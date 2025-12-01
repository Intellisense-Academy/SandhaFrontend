import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const apiRequest = async ({ method = "GET", endPoint = "", data = {}, headers = {} }) => {
    try {
        const res = await axios({ method, url: `${BASE_URL}${endPoint}`, data, headers });
        return res.data;
    } catch (error) {
        console.error("API Error:", error?.response?.data || error.message);
        throw error?.response?.data || error;
    }
};
