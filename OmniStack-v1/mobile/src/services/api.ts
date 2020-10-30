import axios from "axios";

// const URL = 'http://localhost:3333';
const URL = 'http://192.168.101.104:3333';

export const api = axios.create({
    baseURL: URL
});