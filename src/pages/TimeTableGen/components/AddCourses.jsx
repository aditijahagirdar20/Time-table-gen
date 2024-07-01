import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import {
  addCourse,
  updateCourse,
  removeCourse,
} from "../../../redux/reducer/courseSlice"; // Adjust the import path as needed

const AddCourses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  const [courseId, setCourseId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCredits, setCourseCredits] = useState("");
  const [courseTeacher, setCourseTeacher] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const creditsOptions = [0, 1, 2, 3];
  const teachersOptions = [
    { value: "", label: "" },
    { value: "sas", label: "SAS" },
    { value: "rjp", label: "RJP" },
    { value: "mlp", label: "MLP" },
    { value: "tsk", label: "TSK" },
    { value: "na", label: "NA" },
  ];

  const handleAddOrUpdateCourse = () => {
    if (courseId && courseName && courseCredits && courseTeacher) {
      const course = {
        id: courseId,
        name: courseName,
        credits: courseCredits,
        teacher: courseTeacher,
      };
      if (isEditing) {
        dispatch(updateCourse(course));
      } else {
        dispatch(addCourse(course));
      }
      setCourseId("");
      setCourseName("");
      setCourseCredits("");
      setCourseTeacher("");
      setIsEditing(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleEditCourse = (course) => {
    setCourseId(course.id);
    setCourseName(course.name);
    setCourseCredits(course.credits);
    setCourseTeacher(course.teacher);
    setIsEditing(true);
  };

  const handleRemoveCourse = (courseId) => {
    dispatch(removeCourse({ id: courseId }));
  };

  return (
    <div className="tabContent">
      <h2 className="tabHeading">Add Courses</h2>
      <TextField
        label="Course ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
      <TextField
        label="Course Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <TextField
        select
        label="Course Credits"
        variant="outlined"
        fullWidth
        margin="normal"
        value={courseCredits}
        onChange={(e) => setCourseCredits(e.target.value)}
        SelectProps={{
          native: true,
        }}
      >
        {creditsOptions.map((credit, index) => (
          <option key={index} value={credit}>
            {credit}
          </option>
        ))}
      </TextField>
      <TextField
        select
        label="Course Teacher"
        variant="outlined"
        fullWidth
        margin="normal"
        value={courseTeacher}
        onChange={(e) => setCourseTeacher(e.target.value)}
        SelectProps={{
          native: true,
        }}
      >
        {teachersOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          View/Edit Courses
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddOrUpdateCourse}
        >
          {isEditing ? "Update Course" : "Add Course"}
        </Button>
      </Box>
      <h3>Existing Courses</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.id} - {course.name} - {course.credits} - {course.teacher}
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEditCourse(course)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleRemoveCourse(course.id)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddCourses;
