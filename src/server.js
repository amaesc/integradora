const express = require("express");
const bcrypt = require('bcryptjs');
const cors = require('cors');
const { connectDB, sql } = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());



async function checkPassword(inputPassword, storedHash) {
  try {
    const isMatch = await new Promise((resolve, reject) => {
      bcrypt.compare(inputPassword, storedHash, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
    if (isMatch) {
      return { status: 1, message: "Passwords Match" };
    } else {
      return { status: 0, message: "Passwords don't Match" };
    }
  } catch (err) {
    console.error("Error comparing passwords:", err);
  }
}

app.get("/getUsers", async (req, res) => {
  try {
    let pool = await connectDB();
    let request = pool.request();

    let result = await request.execute("sp_Get_Users");

    return res.status(200).json({ users: result.recordset }); // Return all users
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
});


app.get("/userExists", async (req,res) => {
  try {
    let { email } = req.query;

    if(!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    let pool = await connectDB();
    let request = pool.request();

    request.input("email", sql.NVarChar(100), email);
    request.output("status", sql.Bit);

    let result = await request.execute("sp_UserExists_With_Email");
    return res.status(200).json({ status: result.output.status});

  }catch (err){
    console.error("Error:", err);
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
});


app.get("/getUserInformation", async (req, res) => {
  try {
    if (!req.query.username) {
      let { email } = req.query;

      if (!email) {
        return res.status(400).json({ message: "Email is required." });
      }

      let pool = await connectDB();
      let request = pool.request();

      request.input("email", sql.NVarChar(100), email);
      request.output("username", sql.NVarChar(100));
      request.output("firstName", sql.NVarChar(100));
      request.output("middleName", sql.NVarChar(100));
      request.output("lastName", sql.NVarChar(100));
      request.output("groupKey", sql.NVarChar(100));
      request.output("idiomGroupKey", sql.NVarChar(100));
      request.output("dateOfBirth", sql.Date);
      request.output("profilePhotoURL", sql.NVarChar(255));
      request.output("defaultThemePalette", sql.Int);
      request.output("isAdmin", sql.NVarChar(15));

      let result = await request.execute("sp_Get_User_Info");

      if (result.output.firstName) {
        return res.status(200).json({
          username: result.output.username,
          firstName: result.output.firstName,
          middleName: result.output.middleName,
          lastName: result.output.lastName,
          groupKey: result.output.groupKey,
          idiomGroupKey: result.output.idiomGroupKey,
          dateOfBirth: result.output.dateOfBirth,
          profilePhotoURL: result.output.profilePhotoURL,
          defaultThemePalette: result.output.defaultThemePalette,
          isAdmin: result.output.isAdmin,
          status: 1
        });
      }else{
        console.log("Llego username");
      }
    } else {
      return res.status(404).json({ error: "User not found", status: 0 });
    }

  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
});

app.get("/updatePassword", async (req, res) => {
  try {
    let { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let pool = await connectDB();
    let request = pool.request();

    request.input("email", sql.NVarChar(100), email);
    request.input("newPasswordHash", sql.NVarChar(255), hashedPassword);
    request.output("status", sql.Bit);

    let result = await request.execute("sp_Set_Users_UpdatePassword");

    if (result.output.status) {
      console.log("Password updated successfully.");
      return res.status(200).json({ message: "Password updated successfully." });
    } else {
      console.log("An error occurred while updating the password.");
      return res.status(500).json({ message: "An error occurred while updating the password." });
    }

  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
});

app.get("/login", async (req, res) => {
  try {
    let { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    let pool = await connectDB();
    let request = pool.request();

    request.input("email", sql.NVarChar(100), email);
    request.output("passwordHash", sql.NVarChar(255));

    let result = await request.execute("sp_Get_Users_LoginCredentials");

    if (!result.output.passwordHash) {
      return res.status(404).json({ error: "User not found", status: 0 });
    } else {
      const checkPasswordValue = await checkPassword(password, result.output.passwordHash);
      return res.json({ checkPasswordValue });
    }

  } catch (err) {
    console.error("Database query failed", err);
    res.status(500).json({ error: "Database query failed", details: err.message });
  }
});






// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


