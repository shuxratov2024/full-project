import axios from "axios";
const API_URL = import.meta.env.API_URL

const api = axios.create({
    withCredentials: true,
    baseURL: `${API_URL}/api`
})

export default api;