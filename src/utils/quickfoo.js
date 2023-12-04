import axios from "axios";
import { customToast } from "./toasts";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const getUser = async (token, userId) => {
  const response = await fetch(`${backendUrl}/users/${userId}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  return data;
};
