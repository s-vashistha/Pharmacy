import axios from "axios";

const ORDER_API_URL = "http://localhost:5000/api/orders";

// Place an order
export const placeOrder = async (cartItems, userId) => {
  if (!cartItems || cartItems.length === 0) {
    throw new Error("Cart is empty");
  }

  try {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    const response = await axios.post(ORDER_API_URL, {
      user_id: userId,
      products: cartItems,
      total_price: totalPrice,
    });

    return response.data;
  } catch (error) {
    console.error("Error placing order:", error);
    throw error;
  }
};