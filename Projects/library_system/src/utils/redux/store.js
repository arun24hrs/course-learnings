import {configureStore} from "@reduxjs/toolkit";
import booksReducer from "./bookSlice.js"

const bookStore = configureStore({
    reducer: booksReducer
});

export default bookStore;