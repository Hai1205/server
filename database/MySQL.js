import mysql from "mysql2";
import dote from "dotenv";

dote.config({ path: ".env" });

// Tạo kết nối
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: "java_coffee",
});

export default connection;