import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    nombre: "",
  });
  const { email, password, password2, nombre } = data;
  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (nombre.trim().length < 2) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }
    dispatch(register(email, nombre, password));
  };
  const handleChange = (e) => {
    const valor = e.target.value;
    setData({
      ...data,
      [e.target.name]: valor,
    });
  };
  return (
    <div className="container">
      <h3>Register</h3>
      <hr />
      <div className="row">
        <form className="col s12" onSubmit={handleRegister} autoComplete="off">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">assignment_ind</i>
              <input
                onChange={handleChange}
                value={nombre}
                autoComplete="off"
                id="nametxt"
                type="text"
                name="nombre"
                className="materialize-textarea"
              />
              <label htmlFor="nametxt">Nombre</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                autoComplete="off"
                id="emailtxt"
                type="email"
                name="email"
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
                id="passtxt"
                autoComplete="off"
                type="password"
                name="password"
                className="materialize-textarea"
              />
              <label htmlFor="passtxt">Contraseña</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">spellcheck</i>
              <input
                onChange={handleChange}
                value={password2}
                name="password2"
                id="pass2txt"
                autoComplete="off"
                type="password"
                className="materialize-textarea"
              />
              <label htmlFor="pass2txt">Confirma Contraseña</label>
            </div>
          </div>
          <br />
          <button className="btn blue waves-effect waves-light" type="submit">
            Enviar
          </button>
          <br />
          <hr />

          <Link to="/auth/login">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
