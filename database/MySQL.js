import mysql from "mysql2";

// Tạo kết nối
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "java_coffee",
});

export default connection;