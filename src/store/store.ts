import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addcartSlice from "./addcart";
import database from "./database";

const reducer = combineReducers({
  database,
  addcart: addcartSlice
});
const store = configureStore({ reducer });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
