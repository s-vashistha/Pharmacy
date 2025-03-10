import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">PharmaStore</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
