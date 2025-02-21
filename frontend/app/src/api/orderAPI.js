import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api/orders"; // 

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(API_BASE_URL, orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
