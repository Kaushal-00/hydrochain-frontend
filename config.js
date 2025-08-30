import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const NPOINT_URL = import.meta.env.VITE_NPOINT_URL;

export const client = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
});