import { types } from "../types/types";

const initialSate = {
  data: [],
};
export const nominareducer = (state = initialSate, action) => {
  switch (action.type) {
    case types.nominaAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.nominaRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.nominaDelete:
      return {
        ...state,
        data: state.data.filter((d) => {
          return d.id !== action.payload;
        }),
      };
    case types.nominaClean:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};
