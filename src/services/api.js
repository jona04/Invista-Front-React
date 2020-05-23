import axios from 'axios';

class ApiService {
    httpClient = axios.create({
        // baseURL: 'https://invistasite.herokuapp.com/api',
        baseURL: 'http://127.0.0.1:8000',
    });

    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    isAutenticado() {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        } else {
            return false;
        }
    }

    post(url, objeto) {
        return this.httpClient.post(url, objeto);
    }

    put(url, objeto) {
        return this.httpClient.put(url, objeto);
    }

    delete(url) {
        return this.httpClient.delete(url);
    }

    get(url) {
        return this.httpClient.get(url);
    }
}
export default ApiService;
