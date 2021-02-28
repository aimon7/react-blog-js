import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Axios default configuration
axios.defaults.baseURL = `https://jsonplaceholder.typicode.com`;
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(requestConfig => {
    // Edit requestConfig
    // E.g. we can set a custom authorization header
    return requestConfig;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // Edit response
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
