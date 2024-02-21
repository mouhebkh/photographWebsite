import { configureStore } from "@reduxjs/toolkit";
import {  useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import contactReducer from "./Reducers/features/contactSlice";

const rootReducer = combineReducers({
  contact: contactReducer,
  // Add other reducers here if needed
});
const store = configureStore({
  reducer: {
    rootReducer,
  },
});

const { dispatch, getState } = store;

const useAppSelector = useSelector;

module.exports = {
  store,
  dispatch,
  getState,
  useAppSelector,
};
