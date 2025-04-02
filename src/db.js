/*const sql = require("mssql");

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
*/
/*
const sql = require("mssql");

const dbConfig = {
  user: "sqlserver",
  password: "Aliso1917-",
  server: "34.59.58.171", 
  database: "nuevaIntegradora",
  port: 1433,
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
*/