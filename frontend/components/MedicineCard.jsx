import { useContext } from "react";
import { PharmacyContext } from "../context/PharmacyContext";


const MedicineCard = ({ medicine }) => {
  const { addToCart } = useContext(PharmacyContext);

  return (
    <div className="card">
      <h3>{medicine.name}</h3>
      <p>₹{medicine.price}</p>
      <button onClick={() => addToCart(medicine)}>Add to Cart</button>
    </div>
  );
};

export default MedicineCard;
