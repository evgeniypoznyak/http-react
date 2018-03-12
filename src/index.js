import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN 007';


axios.interceptors.request.use((request) => {
  //  console.log('Request: ', request);
    return request;
}, (error) => {
        console.log('Error!', error);
        return Promise.reject(error);
    }
)

axios.interceptors.response.use((responce) => {
   // console.log('Responce: ', responce);
    return responce;
}, (error) => {
      //  console.log('Error!', error );
        return Promise.reject(error);
    }
)




ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
