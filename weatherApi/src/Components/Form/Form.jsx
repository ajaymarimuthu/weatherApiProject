import { useRef, useState } from "react"
import "./Form.css"
import { validateData, validateLoginData } from "../../utils/validateData"
import { useDispatch, useSelector } from "react-redux"
import { addUser, updateUser } from "../../utils/userSlice"

import bcrypt from "bcryptjs"
const Form = () => {

    const userName = useRef();
    const password = useRef();

    const dispatch = useDispatch();
    const users = useSelector(store => store.user.users);


    const [errorMessage, setErrorMessage] = useState("")
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [loginError, setLoginError] = useState("")


    const handleSignInButton = async () => {

        const uname = userName.current.value;
        const pwd = password.current.value

        const res = validateData(uname, pwd, users);


        setErrorMessage(res);
        if (res) return;


        const bcryptedPwd = await bcrypt.hashSync(pwd, 10);

        const newUser = {
            name: uname.toLowerCase(),
            password: bcryptedPwd,
            isMatched: false
        }



        if (users?.find((user) => user.name === newUser.name)) {

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


        const uname = userName.current.value.toLowerCase();
        const pwd = password.current.value

        const res = validateLoginData(uname, pwd, users);

        if (res) {

            setLoginError(res);
            return;
        }


        var encrypt;


        const encrypted = users.find(user => user.name === uname);
        encrypt = encrypted?.password;



        bcrypt.compare(pwd, encrypt, function (err, isMatch) {
            if (err) {
                throw err;
            }
            else if (!isMatch) {
                if (!errorMessage) {
                    setLoginError("Password do not match")
                }

            } else {
                dispatch(updateUser(uname));
            }
        })

    }



    const handleSignInForm = () => { 
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

                {isSignInForm && <button className="button" type="submit" onClick={handleSignInButton}>  SignIn </button>}
                {!isSignInForm && <button className="button" type="submit" onClick={handleLogInButton} >  Login</button>}

                {loginError && <p className="error">{loginError}</p>}

                <p className="error" onClick={handleSignInForm}> {errorMessage}</p>


            </form>
        </>

    )
}

export default Form