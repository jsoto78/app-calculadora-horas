import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../actions/auth";
import { limpiar } from "../actions/nomina";

const Navbar = () => {
  const dispach = useDispatch();
  const handleLogout = () => {
    dispach(limpiar());
    dispach(logout());
  };
  return (
    <nav className="blue">
      <div className="nav-wrapper">
        <span to="#" className="brand-logo center">
          Calculadora
        </span>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button
              onClick={handleLogout}
              className="waves-effect waves-light btn red"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
