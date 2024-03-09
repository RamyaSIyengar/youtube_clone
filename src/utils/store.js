import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice, //Added appslice to store
    search: searchSlice,
  },
});

export default store;

/**
 * In summary, this code sets up a Redux store with two slices: app and search.
 * Each slice is handled by a separate reducer (appSlice and searchSlice).
 * The configuration ensures that actions dispatched to the app slice are processed by the appSlice
 *  reducer, and actions dispatched to the search slice are processed by the searchSlice reducer.
 * This structure helps organize and manage the state of different parts of your application.
 */
