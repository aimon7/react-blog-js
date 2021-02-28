import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// we can also here use interceptors
// instance.interceptors.request...

export default instance;