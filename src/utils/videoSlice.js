import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    video: null,
  },

  reducers: {
    setVideoContent: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const { setVideoContent } = videoSlice.actions;

export default videoSlice.reducer;
