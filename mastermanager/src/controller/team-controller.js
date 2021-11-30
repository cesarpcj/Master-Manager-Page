import axios from 'axios';

const base = axios.create({
    baseURL:"/v1/teams",
    headers:{
        'Content-Type': 'application/json',
    }
})

base.interceptors.request.use(config =>{
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
})

const getMyTeam = async () =>{
    try{
        const team =  await base.get('/myTeam');
        return Promise.resolve(team);
    }catch(err){
        return Promise.reject(err);
       
    }      
}
const createTeam = async (body) =>{
    try{
        const result =  await base.post('/create', body);
        return Promise.resolve(result);
    }catch(err){
        return Promise.reject(err);
       
    }      
}

const updateTeamPlayers = async(body) =>{
    try{
        const result = await base.patch('/myTeam', body );
        return Promise.resolve(result);
    }catch(err){
        return Promise.reject(err);
    }
}
const updateTactics = async(body) =>{
    try{
        const result = await base.patch('/update-tactics', body );
        return Promise.resolve(result);
    }catch(err){
        return Promise.reject(err);
    }
}


export {getMyTeam, createTeam, updateTeamPlayers, updateTactics};