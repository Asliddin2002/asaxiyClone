export enum actionTypes {
  DATA_ADDED = "DATA_ADDED",
  DELETE_DATA = "DELETE_DATA",
}

interface stateTypes {
  data: any[];
}

type productType = {
  id: number;
  product_name: string;
  product_image: string;
  product_price: number;
  dicount_price: number;
  reviews: number;
  discount: boolean;
};

interface loadedType {
  type: actionTypes.DATA_ADDED;
  payload: productType[];
}
interface deletedType {
  type: actionTypes.DELETE_DATA;
  payload: number;
}

export type actionTypeReducer = loadedType | deletedType;

const initialState = {
  data: [],
} as stateTypes;

export const addCartReducer = (
  state = initialState,
  action: actionTypeReducer
) => {
  switch (action.type) {
    case actionTypes.DATA_ADDED: {
      return { ...state, data: [...state.data, action.payload] };
    }
    case actionTypes.DELETE_DATA: {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
