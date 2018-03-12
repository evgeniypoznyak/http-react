import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
       common: {
           Authorization: 'AUTH TOKEN FROM INSTANCE'
       },
    },
});

instance.defaults.headers.common['Authorization'] =  'AUTH TOKEN FROM INSTANCE';

// instance.defaults.headers.get['1111test'] =  'instance';
// instance.defaults.headers.get['test123'] = 'local';


/*
instance.interceptors.request.use((request) => {
        console.log('instance Request: ', request);
        return request;
    }, (error) => {
        console.log('instance Error!', error);
        return Promise.reject(error);
    }
)

instance.interceptors.response.use((responce) => {
        console.log('instance Responce: ', responce);
        return responce;
    }, (error) => {
        console.log('instance Error!', error );
        return Promise.reject(error);
    }
)
*/



export default instance;