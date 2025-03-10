import { useContext } from "react";
import { PharmacyContext } from "../context/PharmacyContext";
import "../styles/cart.css";

const Cart = ({ showCheckout = true }) => {
  const { cart, removeFromCart, checkout } = useContext(PharmacyContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cart.map((med) => (
            <li key={med.id}>
              {med.name} - ₹{med.price}
              <button onClick={() => removeFromCart(med.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && showCheckout && <button onClick={checkout}>Checkout</button>}
    </div>
  );
};

export default Cart;
