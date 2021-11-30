import React,{useState} from 'react'
import {login} from '../../controller/auth-controller';

export default function Login({setUser, history}) {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

    const submitLogin = (e) =>{
        e.preventDefault();
        login({email,password})
        .then((result) => {
           
            localStorage.setItem('token', result.data.tokens.access.token);
            setUser(result.data.user);
            
        }).catch((err) => {
            console.log(err);
        });

    }
    return (
        <div>
            <div>LOGIN</div>
            <form onSubmit={submitLogin}>
                <input onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} ></input>
                <button>login</button>
            </form>
        </div>
    )
}
