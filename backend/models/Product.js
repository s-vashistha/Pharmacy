import db from "../db.js";

const createProductTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      price DECIMAL(10,2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  db.query(sql, (err) => {
    if (err) {
      console.error("Error creating products table:", err);
    } else {
      console.log("✅ Products table is ready!");
    }
  });
};

export default createProductTable;
