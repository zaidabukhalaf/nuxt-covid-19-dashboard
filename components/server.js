import axios from "axios";
const clientApi = axios.create({
  baseURL: "https://api.covid19api.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getSummary() {
    return clientApi.get("/summary");
  }
};
