import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducers/index";
import { useDispatch, useSelector, useStore } from "react-redux";

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
export const useAppStore = useStore;
