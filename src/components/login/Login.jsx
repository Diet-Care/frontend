import React, { useState } from "react";
import axios from "axios";
import "./styleLogin/login.css";
import Navigation from "../../components/Navigation";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://backend-production-2c47.up.railway.app/login",
        {
          email,
          password,
        }
      );

      // Store the token in local storage
      localStorage.setItem("token", response.data.data);

      console.log(response.data);
      dispatch(setLoginStatus(true));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />
      <section className="login">
        <div className="container">
          <div className="login-wrapper">
            <div className="row mx-auto login-content align-items-center">
              <div className="col form text">
                <div className="box-login d-flex justify-content-center flex-column">
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <button id="loginBtn" type="submit" onClick={handleLogin}>
                    {isLoggedIn ? "Profile" : "Login"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
