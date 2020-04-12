import axios from 'axios';

const api = axios.create({
    baseURL: 'http://invistasite.herokuapp.com/api',
});

export default api;
