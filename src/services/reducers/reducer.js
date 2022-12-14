import { ADD_TO_CART } from "../constants";

// a redux proj can have multiple reducers
// we have to merge each reducers to a ROOT reducer

const initialState = {
  cartData: [],
};

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("reducer", action);
      return [...state, { cartData: action.data }];

    default:
      return state;
  }
};

export default cartItems;
