import axios from 'axios';

const api = axios.create({
    baseURL: 'https://invistasite.herokuapp.com/api',
    // baseURLe: 'http://127.0.0.1:8000/api',
});

export default api;
