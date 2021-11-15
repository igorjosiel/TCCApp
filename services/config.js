import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://192.168.43.138:3000'
});