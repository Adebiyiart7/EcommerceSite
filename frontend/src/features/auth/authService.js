import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI + "/api/users";

// REGISTER USER
const register = async (userData) => {
  const response = await axios.post(API_URI + "/register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// LOGIN USER
const login = async (userData) => {
  const response = await axios.post(API_URI + "/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// LOGOUT USER
const logout = async () => {
  localStorage.removeItem("user");
};

export const authService = {
  register,
  login,
  logout,
};
