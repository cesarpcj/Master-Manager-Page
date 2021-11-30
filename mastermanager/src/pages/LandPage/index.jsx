import React from 'react'
import Login from '../../components/LandPage/login'
import Register from '../../components/LandPage/register'
import Land from '../../components/LandPage'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
export default function Index({setUser}) {
    
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={"/"}><Land  setUser={setUser}/></Route>
                    <Route path={ "/login"}><Login  setUser={setUser}/></Route>
                    <Route path={"/register"}><Register  setUser={setUser}/></Route>

                </Switch>
            </div>
        </Router>
    )
}
