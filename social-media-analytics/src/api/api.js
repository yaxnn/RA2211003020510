import axios from "axios";

const API_BASE = "http://20.244.56.144/test";
const AUTH_TOKEN = "Bearer YOUR_AUTH_TOKEN"; // Replace with your token

const api = axios.create({
  baseURL: API_BASE,
  headers: { Authorization: AUTH_TOKEN },
});

export const fetchUsers = async () => {
  const { data } = await api.get("/users");
  return data;
};

export const fetchPosts = async () => {
  const { data } = await api.get("/posts");
  return data;
};

export const fetchComments = async () => {
  const { data } = await api.get("/comments");
  return data;
};
