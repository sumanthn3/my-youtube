import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    theme: themeSlice,
  },
});
export default store;
