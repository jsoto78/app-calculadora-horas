import React from "react";
import Element from "./Element";

const Tabla = ({ nomina }) => {
  return (
    <table className="highlight">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Cantidad</th>
          <th>Borrar</th>
        </tr>
      </thead>

      <tbody>
        {nomina.map((el) => {
          return (
            <tr key={el.id}>
              <Element data={el} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Tabla;
