import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { googleLogin, emailAndPasswordLogin } from "../actions/auth";
import GoogleButton from "react-google-button";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const valor = e.target.value;
    setData({
      ...data,
      [e.target.name]: valor,
    });
  };
  const { email, password } = data;
  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    }
    dispatch(emailAndPasswordLogin(email, password));
  };
  return (
    <div className="container">
      <h3>Login</h3>
      <hr />
      <div className="row">
        <form className="col s12" onSubmit={handleLogin} autoComplete="off">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                autoComplete="off"
                id="emailtxt"
                type="email"
                className="materialize-textarea"
              />
              <label htmlFor="emailtxt">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                name="password"
                id="passtxt"
                autoComplete="off"
                type="password"
                className="materialize-textarea"
              />
              <label htmlFor="passtxt">Contraseña</label>
            </div>
          </div>
          <br />
          <button className="btn blue waves-effect waves-light" type="submit">
            Enviar
          </button>
          <br />
          <hr />
          <GoogleButton onClick={handleGoogleLogin} /> <br />
          <Link to="/auth/register">Registro</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
