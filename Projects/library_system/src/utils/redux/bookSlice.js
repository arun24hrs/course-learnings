import { createSlice } from "@reduxjs/toolkit";
import books from "../booksData";

const bookSlice = createSlice({
    name: "books",
    initialState: {
      items: [...books],
    },
    reducers: {
      addBook: (state, action) => {
        // console.log(state.items, "state");
        state.items.unshift([...books, action.payload]);
      },
    },
  });
export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;