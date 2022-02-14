import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina";

const Form = () => {
  const dispach = useDispatch();
  const [formView, setformView] = useState(false);
  const [precioTotal, setCantidadPago] = useState({
    cantidadHoras: 0,
    precioHora: 0,
  });
  const { precioHora, cantidadHoras } = precioTotal;

  const handleUpdate = () => {
    const cantidadFinal = cantidadHoras * precioHora;
    dispach(crearRegistro(cantidadFinal));
    setCantidadPago({
      cantidadHoras: 0,
      precioHora: 0,
    });
    setformView(false);
  };
  const handleMostrar = () => {
    setformView(!formView);
  };
  const handlePago = (e) => {
    setCantidadPago({
      ...precioTotal,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <button className="btn green" onClick={handleMostrar}>
        agregar
      </button>
      {formView && (
        <div className="row">
          <div className="col  s6 offset-s6">
            <label>
              Cantidad a horas
              <input
                type="text"
                name="cantidadHoras"
                placeholder="Cantidad a pagar"
                value={cantidadHoras}
                onChange={handlePago}
              />
            </label>
            <label>
              Cantidad a pagar
              <input
                type="text"
                name="precioHora"
                placeholder="Cantidad a pagar"
                value={precioHora}
                onChange={handlePago}
              />
            </label>
            <button className="btn purple rigth " onClick={handleUpdate}>
              Guardar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
