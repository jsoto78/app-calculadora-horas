import React from "react";
import { useDispatch } from "react-redux";
import { borrarRegDb } from "../actions/nomina";

const Element = ({ data }) => {
  const { fecha, valor, id } = data;
  const dispatch = useDispatch();
  let fechaFormato;

  if (fecha.seconds) {
    fechaFormato = fecha.toDate().toLocaleDateString();
  } else {
    fechaFormato = fecha.toLocaleDateString();
  }
  const handleDelete = () => {
    dispatch(borrarRegDb(id));
  };
  return (
    <>
      <td>{fechaFormato}</td>
      <td>$ {valor}</td>
      <td>
        <button className="btn red" onClick={handleDelete}>
          <i className="material-icons">delete_forever</i>
        </button>
      </td>
    </>
  );
};

export default Element;
