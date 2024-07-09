import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./reducer/roomSlice"; // ensure correct path
import timesReducer from "./reducer/timesSlice"; // ensure correct path
import coursesReducer from "./reducer/courseSlice";
import departmentReducer from "./reducer/departmentSlice";
import sectionReducer from "./reducer/sectionSlice";
import teachersReducer from "./reducer/teachersSlice";
export default configureStore({
  reducer: {
    teachers: teachersReducer,
    rooms: roomsReducer,
    times: timesReducer,
    courses: coursesReducer,
    departments: departmentReducer,
    sections: sectionReducer,
  },
});
