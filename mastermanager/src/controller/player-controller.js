import axios from 'axios';

const base = axios.create({
    baseURL: "/v1/players",
    headers: {
        'Content-Type': 'application/json',
      }
})

base.interceptors.request.use(config =>{
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
})

const getAllPlayers = async () =>{
    try{
        const allPlayers = await base.get("/all");
        return Promise.resolve(allPlayers);
    }catch(err){
        return Promise.reject(err);
    }
}

export {getAllPlayers};