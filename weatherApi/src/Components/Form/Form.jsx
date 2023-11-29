import "./Form.css"


const Form = () => {
    return (

        <>

            <form className="form">
                <h1 className="heading">Login</h1>
                <input type="text"  placeholder="username"/>

                <input type="password" placeholder="password" />

                <button type="submit">LogIn</button>
            </form>
        </>

    )
}

export default Form