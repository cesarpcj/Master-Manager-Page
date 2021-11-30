import axios from 'axios';

const base = axios.create({
    baseURL:"/v1/formations",
    headers: {
        'Content-Type': 'application/json',
      }
})

base.interceptors.request.use(config =>{
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
})

const getAllFormation = async () =>{
    try{

        const result = await base.get("/all");
        return Promise.resolve(result)
    }catch(err){
    
        return Promise.reject(err)
    };
}

export {getAllFormation}