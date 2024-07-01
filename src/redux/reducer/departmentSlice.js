import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const departmentSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {
    addDepartment: (state, action) => {
      state.push(action.payload);
    },
    updateDepartment: (state, action) => {
      const index = state.findIndex(
        (dept) => dept.deptId === action.payload.deptId
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeDepartment: (state, action) => {
      return state.filter((dept) => dept.deptId !== action.payload.deptId);
    },
  },
});

export const { addDepartment, updateDepartment, removeDepartment } =
  departmentSlice.actions;

export default departmentSlice.reducer;
