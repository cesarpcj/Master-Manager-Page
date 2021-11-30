
import React,{useState} from 'react'
import {register} from '../../controller/auth-controller';

export default function Register({setUser}) {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [name, setName] =useState("");

    const submitRegister = (e) =>{
        e.preventDefault();
        register({email,password, name})
        .then((result) => {
            console.dir(result);
            localStorage.setItem('token', result.data.tokens.access.token);
            setUser(result.data.user);
            
        }).catch((err) => {
            console.log(err);
        });

    }
    return (
        <div>
            <div>Register</div>
            <form onSubmit={submitRegister}>
                <input onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} ></input>
                <input onChange={(e)=>setName(e.target.value)} value={name} ></input>
                <button>register</button>
            </form>
        </div>
    )
}
