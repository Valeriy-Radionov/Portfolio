import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "https://recomendations-back.vercel.app" : "https://recomendations-back.vercel.app",
  // withCredentials: true,
})
