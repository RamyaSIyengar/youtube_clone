import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
    reducer:{
      app:appSlice,//Added appslice to store
    }
})

export default store;