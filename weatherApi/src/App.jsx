
import './App.css'
import Login from './Components/Login/Login'
import Weather from './Components/Weather/Weather';
import {  useSelector } from "react-redux";

function App() {

  const isMatched=useSelector(store=>store.user.isMatched)
 

  return (
    < >
      {isMatched ? <Weather/> : <Login />}  
    </>


  )
}

export default App
