import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addTeacher,
  updateTeacher,
  removeTeacher,
} from "../../../redux/reducer/teachersSlice"; // Adjust the path as needed

const AddTeachers = () => {
  const [teacherId, setTeacherId] = useState("");
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editTeacherId, setEditTeacherId] = useState(null);

  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers);

  const handleAddTeacher = () => {
    if (isEditing) {
      dispatch(
        updateTeacher({ id: editTeacherId, teacherId, fullName, designation })
      );
      setIsEditing(false);
      setEditTeacherId(null);
    } else {
      dispatch(
        addTeacher({ id: Date.now(), teacherId, fullName, designation })
      );
    }
    setTeacherId("");
    setFullName("");
    setDesignation("");
  };

  const handleEditTeacher = (teacher) => {
    setTeacherId(teacher.teacherId);
    setFullName(teacher.fullName);
    setDesignation(teacher.designation);
    setIsEditing(true);
    setEditTeacherId(teacher.id);
  };

  const handleRemoveTeacher = (teacherId) => {
    dispatch(removeTeacher({ id: teacherId }));
  };

  return (
    <div className="tabContent">
      <h2 className="tabHeading">
        {isEditing ? "Edit Teacher" : "Add Teachers"}
      </h2>
      <TextField
        label="Teacher ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={teacherId}
        onChange={(e) => setTeacherId(e.target.value)}
      />
      <TextField
        label="Full Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        select
        label="Designation"
        variant="outlined"
        fullWidth
        margin="normal"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        SelectProps={{
          native: true,
        }}
      >
        <option value=""></option>
        <option value="Associate Professor">Associate Professor</option>
        <option value="Assistant Professor">Assistant Professor</option>
        <option value="HOD">HOD</option>
      </TextField>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
          onClick={handleAddTeacher}
        >
          {isEditing ? "Update Teacher" : "Add Teacher"}
        </Button>
      </Box>
      <h2 className="tabHeading">View/Edit Teachers</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.fullName} ({teacher.designation})
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleEditTeacher(teacher)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleRemoveTeacher(teacher.id)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTeachers;
