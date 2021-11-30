import axios from 'axios';

const base = axios.create({
    baseURL:"/v1/users",
    headers: {
        'Content-Type': 'application/json',
      }
});

base.interceptors.request.use(config=> {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });


const getAuthenticatedUser = async ()=>{
    try{
        const result = await base.get(`/authenticated`);
        return Promise.resolve(result);

    }catch(err){
        return Promise.reject(err);
    }

}

export {getAuthenticatedUser}