// This is ROOT reducer to merge all reducer in one place

import { combineReducers } from "redux";
import cartItems from "./reducer";

export default combineReducers({
  cartItems,
});
