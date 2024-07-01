import { createSlice } from "@reduxjs/toolkit";

export const sectionSlice = createSlice({
  name: "sections",
  initialState: [],
  reducers: {
    addSection: (state, action) => {
      state.push(action.payload);
    },
    updateSection: (state, action) => {
      const index = state.findIndex(
        (section) => section.sectionId === action.payload.sectionId
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addSection, updateSection } = sectionSlice.actions;

export default sectionSlice.reducer;
