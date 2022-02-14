import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import Tabla from "../components/Tabla";

const AppScreen = () => {
  const name = useSelector((state) => state.auth.diplayName);
  console.log(name);
  const nomina = useSelector((state) => state.nomina.data);
  console.log(nomina);
  return (
    <>
      {" "}
      <Navbar />
      <div className="container animate__animated animate__backInUp">
        <h1 className="center">Hola {name}</h1>

        <hr />

        <Form />

        <Tabla nomina={nomina} />
      </div>
    </>
  );
};

export default AppScreen;
