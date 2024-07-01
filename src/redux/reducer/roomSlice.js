import { createSlice } from "@reduxjs/toolkit";

const roomsSlice = createSlice({
  name: "rooms",
  initialState: [],
  reducers: {
    addRoom: (state, action) => {
      state.push(action.payload);
    },
    removeRoom: (state, action) => {
      return state.filter((room) => room.id !== action.payload.id);
    },
    updateRoom: (state, action) => {
      const index = state.findIndex((room) => room.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addRoom, removeRoom, updateRoom } = roomsSlice.actions;
export default roomsSlice.reducer;
