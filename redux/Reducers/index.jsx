import { combineReducers } from "redux";
import contactReducer from "./features/contactSlice";

export const rootReducer = combineReducers({
  contact: contactReducer,
});
