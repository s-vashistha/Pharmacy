import express from "express";
import db from "../db.js";

const router = express.Router();

// Place an order
router.post("/", (req, res) => {
  const { user_id, products, total_price } = req.body;
  db.query(
    "INSERT INTO orders (user_id, products, total_price) VALUES (?, ?, ?)",
    [user_id, JSON.stringify(products), total_price],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Order placed successfully!" });
    }
  );
});

export default router;
