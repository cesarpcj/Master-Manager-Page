
import './App.css';
import { useState, useEffect } from 'react';
import MainUser from './pages/MainUser';
import LandPage from './pages/LandPage';
import { getAuthenticatedUser } from './controller/user-controller';



function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoaded,setIsLoaded] = useState(false);
   
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!user && token){
      getAuthenticatedUser()
      .then((result) => {
        
        setUser(result.data)
        
      }).catch((err) => {
        
      });
      
    }

    if(user && !isLogged) setIsLogged(true);
    setIsLoaded(true);

    
  },[user, isLogged])

  return (
    
    <div className="App">
      {isLoaded && isLogged ? <MainUser/> : <LandPage setUser={setUser}/>}
    </div>
  );
}


export default App;
