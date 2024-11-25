import connection from "./MySQL.js";

connection.connect((err) => {
  if (err) {
    console.error("Kết nối thất bại:", err.message);
    return;
  }
  console.log("Kết nối MySQL thành công!");

  // Thực hiện truy vấn
  connection.query("SELECT * FROM nhanvien", (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn:", err.message);
      return;
    }
    console.log("Kết quả truy vấn:", results);
  });

  connection.end();
});