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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://backend-production-2c47.up.railway.app/login",
        {
          email,
          password,
        }
      );

      const token = response.data.token;
      // Store the token in local storage
      localStorage.setItem("token", token);

      // Fetch user data to check role
      let user;
      try {
        const userResponse = await axios.get(
          "https://backend-production-2c47.up.railway.app/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        user = userResponse.data.data.find((user) => user.email === email);
      } catch (error) {
        console.error(error);
      }

      if (user && user.role === "admin") {
        dispatch(setLoginStatus(true));
        navigate("/admin");
      } else {
        dispatch(setLoginStatus(true));
        navigate("/edukasi");
      }
    } catch (error) {
      console.error(error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
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
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleLogin}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </Button>
                  {error && <span className="error-message">{error}</span>}
                  <div className="register-wrapper">
                    <p className="r">Belum Punya Akun?</p>
                    <NavLink to="/register" className="signup">
                      Register
                    </NavLink>
                  </div>
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
