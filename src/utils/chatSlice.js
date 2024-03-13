import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.push(action.payload);

      // state.messages.unshift(action.payload); //unshift- push it from the first
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
