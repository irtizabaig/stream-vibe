import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// IMPORTANT: no Authorization header