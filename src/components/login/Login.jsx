import "./styleLogin/login.css"

function Login(){
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
                                    <form action="">
                                        User Name<input type="text" id="username" />
                                        Password<input type="password" id="password" />
                                        <button id="loginBtn" type="submit">Login</button>
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