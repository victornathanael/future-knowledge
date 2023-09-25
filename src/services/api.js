import axios from 'axios';

const urlApi = import.meta.env.VITE_API_URL;
const corsAnywhereUrl = import.meta.env.VITE_CORS_ANYWHERE;

const api = axios.create({
    baseURL: `${corsAnywhereUrl}/${urlApi}`,
});

export default api;
