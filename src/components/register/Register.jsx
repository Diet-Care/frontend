import { useDispatch, useSelector } from "react-redux";
import "./styleRegister/register.css";
import { useState } from "react";
import { regis } from "../../redux/actionRegister/actionRegister";

function Register() {
  const { isLoading, error } = useSelector((state) => state.registerReducer);
  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(regis(inputName, inputEmail, inputPassword));

    setInputName("");
    setInputEmail("");
    setInputPassword("");
  };

  return (
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
                  <form onSubmit={handleSubmit} action="add-data">
                    Name{" "}
                    <input
                      type="text"
                      id="name"
                      value={inputName}
                      onChange={handleNameChange}
                    />
                    Email{" "}
                    <input
                      type="email"
                      id="email"
                      value={inputEmail}
                      onChange={handleEmailChange}
                    />
                    Password{" "}
                    <input
                      type="password"
                      id="password"
                      value={inputPassword}
                      onChange={handlePasswordChange}
                    />
                    <button id="registerBtn" type="submit" disabled={isLoading}>
                      {isLoading ? "Loading..." : "Submit"}
                    </button>
                    {error && <p>{error}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
