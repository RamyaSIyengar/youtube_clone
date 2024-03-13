import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    app: appSlice, //Added appslice to store
    search: searchSlice,
    chat: chatSlice,
    video: videoSlice,
  },
});

export default store;

/**
 * In summary, this code sets up a Redux store with slices: app, chat and search.
 * Each slice is handled by a separate reducer (appSlice, chatSlice and searchSlice).
 * The configuration ensures that actions dispatched to the app slice are processed by the appSlice
 *  reducer, and actions dispatched to the search slice are processed by the searchSlice reducer.
 * This structure helps organize and manage the state of different parts of your application.
 */
