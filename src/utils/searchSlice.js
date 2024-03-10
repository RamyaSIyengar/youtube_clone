import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // state = { ...action.payload, ...state }; //read js ES6 spread operator
      state = Object.assign(state, action.payload);
      //Object.assign(target, sourceObj1, sourceObj2, ...);
      //The Object.assign() method allows you to copy all enumerable own properties from one or more source objects to a target object, and return the target object
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

/**
 *  the spread operator is used to create a new object by combining the existing state (...state) with
 * the payload from the action (...action.payload). This ensures that you're not directly modifying
 * the existing state but instead creating a new state object.
 */
