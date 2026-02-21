import axios from "axios";

const baseUrl= "https://borderless.pythonanywhere.com/";
const httpModule = axios.create({
    baseURL: baseUrl,
});

export default httpModule;