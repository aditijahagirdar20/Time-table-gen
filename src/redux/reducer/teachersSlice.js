import { createSlice } from "@reduxjs/toolkit";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: [],
  reducers: {
    addTeacher: (state, action) => {
      state.push(action.payload);
    },
    removeTeacher: (state, action) => {
      return state.filter((teacher) => teacher.id !== action.payload.id);
    },
    updateTeacher: (state, action) => {
      const index = state.findIndex(
        (teacher) => teacher.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addTeacher, removeTeacher, updateTeacher } =
  teachersSlice.actions;
export default teachersSlice.reducer;
