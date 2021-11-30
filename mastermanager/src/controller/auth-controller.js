import axios from 'axios';

const auth = axios.create({
    baseURL:"/v1/auth",
    headers: {
        'Content-Type': 'application/json',
      }
})

auth.interceptors.request.use(config=> {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

const register = async (body) =>{
    try{
        const result = await auth.post("/register", body);
        return Promise.resolve(result);
    }catch(err){
        return Promise.reject(err);
    }
}

const login = async (body) =>{
    try{
        const result = await auth.post("/login", body);
        return Promise.resolve(result);
    }catch(err){

        return Promise.reject(err);
    }
}

const logout = async (body) =>{
    try{
        const result = await auth.post("/logout", body);
        return Promise.resolve(result);
    }catch(err){

        return Promise.reject(err);
    }
}



export {register, login, logout};