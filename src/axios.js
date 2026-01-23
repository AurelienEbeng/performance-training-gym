import axios from "axios";

const baseUrl= "http://localhost:8000/";
const httpModule = axios.create({
    baseURL: baseUrl,
});

export default httpModule;