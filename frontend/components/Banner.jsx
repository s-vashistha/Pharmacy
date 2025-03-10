import "../styles/banner.css"; // ✅ Import CSS for styling

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Your Trusted Online Pharmacy</h1>
        <p>Get medicines delivered to your doorstep with ease.</p>
        <button className="shop-now">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
