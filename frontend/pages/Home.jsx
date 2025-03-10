import React, { useContext } from "react"; 
import { PharmacyContext } from "../context/PharmacyContext";
import "../styles/Home.css"; // Ensure correct path
import Banner from "../components/Banner";

const Home = () => {
  const { medicines, addToCart } = useContext(PharmacyContext);

  if (!medicines || medicines.length === 0) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="home-container">
      <Banner />
      <div className="container">
      <h1 className="title">Available Medicines</h1>
      <div className="medicine-grid">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="medicine-card">
            <img 
              src={medicine.image || "/placeholder.jpg"} 
              alt={medicine.name} 
              className="medicine-image" 
            />
            <div className="col-2">
            <h3>{medicine.name}</h3>
            <p>Price: <span>₹{medicine.price}</span></p></div>
            <button className="add-to-cart" onClick={() => addToCart(medicine)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
