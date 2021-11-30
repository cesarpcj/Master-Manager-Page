import React from 'react'
import {Link} from 'react-router-dom'

export default function index() {
    return (
        <div>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
        </div>
    )
}
