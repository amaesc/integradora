const sql = require("mssql");

const dbConfig = {
  user: "sa",
  password: "Aliso1917-",
  server: "localhost", 
  database: "integradora",
  options: {
    encrypt: true, 
    trustServerCertificate: true, 
  },
};

async function connectDB() {
  try {
    let pool = await sql.connect(dbConfig);
    console.log("Connected to SQL Server");
    return pool;
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

module.exports = { connectDB, sql };
