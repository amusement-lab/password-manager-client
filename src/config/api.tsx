import { ofetch } from "ofetch";

const api = ofetch.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  async onRequest({ options }) {
    const token = localStorage.getItem("token");
    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  },
});

export default api;
