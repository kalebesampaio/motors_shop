import axios from "axios";

export const api = axios.create({
  baseURL: "https://motors-shop-b4yd.onrender.com/",
  timeout: 10000,
});
