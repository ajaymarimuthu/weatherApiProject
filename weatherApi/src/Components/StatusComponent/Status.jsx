// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Status.css"
import { updateUser } from '../../utils/userSlice';



const Status = () => {

    const users=useSelector(store=>store.user.users);
    const dispatch=useDispatch()

    const user=users.find((user)=>user.isMatched=== true);
    console.log(user);

 

    const handleLogInUser= () =>{
        dispatch(updateUser(user.name))
    }

  return (
    <div className='status'>

        <p >Welcome <span className='username'>{user.name.toUpperCase()}</span>...!</p>

        <div>
        <button onClick={handleLogInUser}>  {user.isMatched== true ? "Logout":"Login" }</button>
        </div>
        
      
    </div>
  )
}

export default Status