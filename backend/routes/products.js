import express from "express";
import db from "../db.js";

const router = express.Router();

// Get all products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Add a new product
router.post("/", (req, res) => {
  const { name, price, stock } = req.body;
  db.query(
    "INSERT INTO products (name, price, stock) VALUES (?, ?, ?)",
    [name, price, stock],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Product added successfully!", id: result.insertId });
    }
  );
});

export default router;
