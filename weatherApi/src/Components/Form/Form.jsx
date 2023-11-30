import { useRef, useState } from "react"
import "./Form.css"
import { validateData } from "../../utils/validateData"
import { useDispatch, useSelector } from "react-redux"
import { addUser, isUserMatched, updateUser } from "../../utils/userSlice"

import bcrypt from "bcryptjs"
const Form = () => {

    const userName = useRef();
    const password = useRef();

    const dispatch = useDispatch();
    const users = useSelector(store => store.user.users);

    // console.log(users);
    // console.log(users.length);

    const [errorMessage, setErrorMessage] = useState("")
    const [isSignInForm, setIsSignInForm] = useState(true)

    // console.log("isSignInForm", isSignInForm);



    const handleSignInButton = async () => {

        const uname = userName.current.value;
        const pwd = password.current.value

        const res = validateData(uname, pwd);


        if (res) return;
        setErrorMessage(res);

        const bcryptedPwd = await bcrypt.hashSync(pwd, 10);

        const newUser = {
            name: uname.toLowerCase(),
            password: bcryptedPwd,
            isMatched:false
        }
        // console.log("newUser", newUser);


        if (users?.find((user) => user.name === newUser.name)) {
            // console.log("user already exist");
            setErrorMessage("user already exists.. LogiIn")

            return;
        }

        else {
            dispatch(addUser(newUser))

            setIsSignInForm(prev => !prev)

            userName.current.value = "";
            password.current.value = "";
        }

    }


    const handleLogInButton = () => {

        const uname = userName.current.value;
        const pwd = password.current.value

        const res = validateData(uname, pwd);


        if (res) return;
        setErrorMessage(res);


        const encrypted = users.find(user => user.name === uname);

        let encrypt=encrypted.password;

        // console.log("encrypt",encrypt);
        // console.log("pwd",pwd);

         bcrypt.compare(pwd, encrypt, function(err,isMatch){
            if(err){
                throw err;
            }
            else if(!isMatch){
                console.log("Password not match");
            }else{

            
          

                console.log("updateUser uname",uname);
                dispatch(updateUser(uname));
 
                
                console.log("Matchessss");
            }
         })

    }



    const handleSignInForm = () => {
        console.log("here 1");
        userName.current.value = "";
        password.current.value = "";
        setErrorMessage("");
        setIsSignInForm(prev => !prev)
    }



    return (

        <>

            <form className="form" onSubmit={(e) => e.preventDefault()} >
                <h1 className="heading"> {isSignInForm ? "SignIn" : "Login"}</h1>
                <input type="text" placeholder="username" ref={userName} />

                <input type="password" placeholder="password" ref={password} />

                {isSignInForm && <button  className="button" type="submit" onClick={handleSignInButton}>  SignIn </button>}
                {!isSignInForm && <button  className="button" type="submit" onClick={handleLogInButton} >  Login</button>}

                <p className="error" onClick={handleSignInForm}> {errorMessage}</p>


            </form>
        </>

    )
}

export default Form