import axios from "axios";

const baseUrl= "https://primal-training-gym-backend.onrender.com/api/reservations";
const httpModule = axios.create({
    baseURL: baseUrl,
});

export default httpModule;