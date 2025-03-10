import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import "../styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
