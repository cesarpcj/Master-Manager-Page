import React,{useState} from 'react'
import Logo from './logo'
import Header from './header'
import Nav from './Sidebar/index'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Tactics from "../Tactics"
import Home from "../Home"
import Training from "../Training"
import Finances from "../Finances"
import Calendar from "../Calendar"
import Mail from "../Mail"

export default function MainUser() {
    const str = window.location.pathname;
    const temp = str.split("/")[1];
    const [currentPage, setCurrentPage] = useState(temp);
    

    
    return (<>
            <Router>
            <div className="container">
                <div className="side"> 
                    <Logo/>
                    <Nav setCurrentPage={(pageName)=>setCurrentPage(pageName)}/>
                </div>
                <div className="content">
                    <Header currentPage={currentPage}/>
                    <main>
                        <Switch>
                            <Route path="/tactics/" component={Tactics}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/training" component={Training}/>
                            <Route path="/finances" component={Finances}/>
                            <Route path="/calendar" component={Calendar}/>
                            <Route path="/email" component={Mail}/>
                        </Switch>
                        
                    </main>
                </div>
            </div>
            </Router>
        
            <style>{`
                    .container{
                        display: flex
                    }

                    main{
                        margin-top: 60px;
                    }

                    .content{
                        margin-left: 200px;
                    }

                    .side{
                        position:fixed;
                        left: 0px;
                        top: 0px;
                    }
                    

            `}</style>
        </>
            
        
    )
}
