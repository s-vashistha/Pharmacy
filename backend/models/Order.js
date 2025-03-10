import db from "../db.js";

const createOrderTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      total_price DECIMAL(10,2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  db.query(sql, (err) => {
    if (err) {
      console.error("Error creating orders table:", err);
    } else {
      console.log("✅ Orders table is ready!");
    }
  });
};

export default createOrderTable;
