import { useState } from "react";
import "./styleLogin/login.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      // Mengganti URL dengan URL endpoint login yang sesuai
      const response = await axios.post('https://backend-production-2c47.up.railway.app/login', {
        email,
        password,
      });
      // Menangani respons dari server setelah berhasil login
      console.log(response.data); // Ubah sesuai kebutuhan Anda
      // Redirect ke halaman lain setelah login berhasil
      navigate('/');
    } catch (error) {
      console.error(error);
      // Menangani error saat login gagal
      // Misalnya, menampilkan pesan error kepada pengguna
    }
  };

  return (
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
                        <div>
                            <label htmlFor="email">email:</label>
                            <input type="text" id="email" value={email} onChange={handleEmailChange} />
                            </div>
                            <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                            </div>
                            <button  id="loginBtn" type="submit" onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
   
  );
}

export default Login;

