import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {
    addCourse: (state, action) => {
      state.push(action.payload);
    },
    removeCourse: (state, action) => {
      return state.filter((course) => course.id !== action.payload.id);
    },
    updateCourse: (state, action) => {
      const index = state.findIndex(
        (course) => course.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addCourse, removeCourse, updateCourse } = courseSlice.actions;
export default courseSlice.reducer;
