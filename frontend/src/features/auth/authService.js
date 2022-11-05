import axios from "axios";

const API_URI = process.env.REACT_APP_HOST + "/api/users";

const register = async (userData) => {
  const response = await axios.post(API_URI, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const authService = {
  register,
};
