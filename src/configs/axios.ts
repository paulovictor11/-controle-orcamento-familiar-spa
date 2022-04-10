import axios from "axios";

const baseUrl = axios.create({
    baseURL: 'http://192.168.0.9/api'
});

export default baseUrl;
