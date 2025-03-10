import db from "../db.js";

const createOrderItemsTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS order_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT NOT NULL,
      product_id INT NOT NULL,
      quantity INT NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    )
  `;

  db.query(sql, (err) => {
    if (err) {
      console.error("Error creating order_items table:", err);
    } else {
      console.log("✅ Order Items table is ready!");
    }
  });
};

export default createOrderItemsTable;
