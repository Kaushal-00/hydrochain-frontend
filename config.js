import axios from "axios";

export const API_BASE_URL = import.meta.env.API_BASE_URL;

export const client = axios.create({
    baseURL: API_BASE_URL,
});