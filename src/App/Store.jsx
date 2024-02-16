import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../Features/modalSlice/modalSlice";
import panierSlice from "../Features/panierSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    panier: panierSlice,
  },
});

export default store;
