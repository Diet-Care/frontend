import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styleLogin/login.css";
import Navigation from "../../components/Navigation";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../../redux/actions/actions";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Button from "../Button";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    Navigate("/register");
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
      localStorage.setItem("token", response.data.token);

      dispatch(setLoginStatus(true));
      navigate("/edukasi");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setLoginStatus(true));
      navigate("/edukasi");
    }
  }, []);

  return (
    <>
      <Navigation />
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
                  <Button variant="primary" type="submit" onClick={handleLogin}>
                    Login
                  </Button>
                  <NavLink to="/register" className="signup">
                    <Button variant="secondary" type="submit">
                      Register
                    </Button>
                  </NavLink>
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
