import { useDispatch, useSelector } from 'react-redux';
import './styleRegister/register.css'
import { useState } from 'react';
import { regis } from '../../redux/actionRegister/actionRegis';

function Register() {
    
    const { isLoading, error } = useSelector((state) => state.registerReducer);
    const [inputEmail, setEmail] = useState('');
    const [inputName, setName] = useState('');
    const [inputNomor, setNomor] = useState('');
    const [inputPassword, setPassword] = useState('');

    const dispatch = useDispatch()

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleNomorChange = (e) => {
        setNomor(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(regis(inputEmail, inputName, inputNomor, inputPassword))

        setEmail('')
        setName('')
        setNomor('')
        setPassword('')
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
                                    <form onSubmit={handleSubmit} action='add-data'>
                                        Email <input type="email" id="username" value={inputEmail} onChange={(e) => handleEmailChange(e)}/>
                                        Nama <input type="username" value={inputName} onChange={(e) => handleNameChange(e)}/>
                                        Nomor Telepon <input type="nomor" value={inputNomor} onChange={(e) => handleNomorChange(e)}/>
                                        Password <input type="password" id="password" value={inputPassword} onChange={(e) => handlePasswordChange(e)}/>
                                        <button id="loginBtn" type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</button>
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

export default Register;