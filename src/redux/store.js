import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./reducer/roomSlice"; // ensure correct path
import timesReducer from "./reducer/timesSlice"; // ensure correct path
import coursesReducer from "./reducer/courseSlice";
import departmentReducer from "./reducer/departmentSlice";
import sectionReducer from "./reducer/sectionSlice";
export default configureStore({
  reducer: {
    rooms: roomsReducer,
    times: timesReducer,
    courses: coursesReducer,
    departments: departmentReducer,
    sections: sectionReducer,
  },
});
