import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      console.log("vuelve login");
      return action.payload;
    case types.logout:
      return {};
    default:
      console.log("vuelve default :" + action);
      return state;
  }
};
