import axios from "axios";

export const vibesApi = axios.create({
  baseURL: "http://localhost:3000/vibes/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
