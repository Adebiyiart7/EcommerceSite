import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI + "/api/products";

const getProducts = async () => {
  const response = await axios.get(API_URI);

  if (response.data) {
    return response.data;
  }
};

export const productsService = {
  getProducts,
};
