import { useState } from "react";
import "./styleLogin/login.css"
import { login } from "../../redux/actionRegister/actionLogin";
import { useDispatch, useSelector } from "react-redux";

function Login() {
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');

    const isLoading = useSelector((state) => state.loginReducer);
    const error = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password));

        setName('')
        setPassword('')
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return(
        <>
            <section className="login">
                <div className="container">
                    <div className="login-wrapper">
                        <div className="row mx-auto login-content align-items-center">
                            <div className="col form text">
                                <div className="box-login d-flex justify-content-center flex-column">
                                    <img
                                        src="https://i.ibb.co/FzRc6JC/logo-primary.png"
                                        alt="logo-primary"
                                        width="60%"
                                        className="img-logo mb-lg-5 mb-4 mx-auto"
                                    />
                                    <form onSubmit={(e) => handleSubmit(e)}>
                                        Username<input type="username" id="username" value={username} onChange={(e) => handleNameChange(e)}/>
                                        Password<input type="password" id="password" value={password} onChange={(e) => handlePasswordChange(e)}/>
                                        <button id="loginBtn" type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Login'}</button>
                                        {error && <p>{error}</p>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;