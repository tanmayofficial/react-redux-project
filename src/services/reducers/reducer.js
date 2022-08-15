import { ADD_TO_CART } from "../constants";

// a redux proj can have multiple reducers
// we have to merge each reducers to a ROOT reducer

const initialState = {
  cartData: [],
};

const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: action.data,
      };
      break;

    default:
      return state;
      break;
  }
};

export default cartItems;
