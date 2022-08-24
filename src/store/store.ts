// configureStore.js
// ao invés de createStore, importamos o configureStore
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSilece from "./cartSilece";
// import cart from "./cart";
import contador from "./contador";
import database from "./database";
import filter from "./filter";
import selectedSlice from "./selected";

// Nela passamos um objeto de configuração que deve
// conter a propriedade reducer

const reducer = combineReducers({
  contador,
  cart: cartSilece,
  database,
  filter,
  selected: selectedSlice
});
const store = configureStore({ reducer });

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
