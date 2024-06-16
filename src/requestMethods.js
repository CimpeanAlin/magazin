// Import Axios
import axios from "axios";

// Base URL for API requests
const BASE_URL = "http://localhost:5000/api/";

// Retrieve user data from local storage
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// Create a public Axios instance (no custom headers)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// Create a user-specific Axios instance with an Authorization header
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },  // Ensure the format is `Bearer ${TOKEN}`
});

// Log user-related information (for debugging)
console.log("Current User:", currentUser);
console.log("Access Token:", TOKEN);
console.log("User Request Axios Instance:", userRequest);
