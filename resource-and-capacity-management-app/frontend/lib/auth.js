import api from "./api";

export async function login(username, password) {
  try {
    const res = await api.post("/auth/login", { username, password });
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
}