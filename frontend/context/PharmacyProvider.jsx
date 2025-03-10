import axios from "axios";
import { useEffect, useState } from "react";
import { PharmacyContext } from "./PharmacyContext";

export const PharmacyProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setMedicines(res.data))
      .catch((err) => console.error("Error fetching medicines:", err));
  }, []);

  const addToCart = (medicine) => setCart([...cart, medicine]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const checkout = async () => {
    await axios.post("http://localhost:5000/api/orders", {
      user_id: 1,
      products: cart,
      total_price: cart.reduce((sum, item) => sum + item.price, 0),
    });
    setCart([]);
    alert("Order placed successfully!");
  };

  return (
    <PharmacyContext.Provider value={{ medicines, cart, addToCart, removeFromCart, checkout }}>
      {children}
    </PharmacyContext.Provider>
  );
};
