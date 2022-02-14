/*
{
    id:"adsasdf",
    fecha: "12/01/2020",
    valor: 300.00
}

*/

import { db } from "../firebase/config-firebase";
import { types } from "../types/types";

export const crearRegistro = (valor) => {
  return async (dispach, getState) => {
    const { uid } = getState().auth;

    const datos = {
      fecha: new Date(),
      valor: parseFloat(valor),
    };
    const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos);
    const id = await referencia.id;
    const newData = {
      id,
      ...datos,
    };
    dispach(crearNomina(newData));
  };
};

export const leerRegistros = (data) => {
  return {
    type: types.nominaRead,
    payload: data,
  };
};
export const crearNomina = (data) => {
  return {
    type: types.nominaAdd,
    payload: data,
  };
};

export const borrarRegDb = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await db.doc(`${uid}/nominas/nomina/${id}`).delete();

    dispatch(borrar(id));
  };
};
export const borrar = (id) => {
  return {
    type: types.nominaDelete,
    payload: id,
  };
};
export const limpiar = () => {
  return {
    type: types.nominaClean,
  };
};
