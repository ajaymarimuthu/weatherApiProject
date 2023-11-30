
import './App.css'
import Login from './Components/Login/Login'
import Weather from './Components/Weather/Weather';
import {  useSelector } from "react-redux";

function App() {

  const users=useSelector(store=>store?.user?.users);

 

  const user=users?.find(user=>{
    if(user?.isMatched === true){
      return user;
    }
  })
 

  return (
    < >
 
      {user?.isMatched ? <Weather/> : <Login />}  
    </>


  )
}

export default App
