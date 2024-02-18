import { combineReducers } from "redux";
import contactSlice from "./features/contactSlice";

export const rootReducer = combineReducers({
  contactSlice: contactSlice,
});
