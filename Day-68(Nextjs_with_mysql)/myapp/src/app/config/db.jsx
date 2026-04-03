import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "hospitals",
});

try {
  const connection = await db.getConnection();
  console.log("Database connection established successfully.");
  connection.release();
} catch (error) {
  console.error("Error connecting to database:", error);
  process.exit(1);
}
