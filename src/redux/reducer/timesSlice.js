import { createSlice } from "@reduxjs/toolkit";

const timesSlice = createSlice({
  name: "times",
  initialState: [],
  reducers: {
    addTime: (state, action) => {
      state.push(action.payload); // corrected action name
    },
    removeTime: (state, action) => {
      return state.filter(
        (time) => time.meetingId !== action.payload.meetingId
      );
    },
    updateTime: (state, action) => {
      const index = state.findIndex(
        (time) => time.meetingId === action.payload.meetingId
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addTime, removeTime, updateTime } = timesSlice.actions; // corrected action name
export default timesSlice.reducer;
