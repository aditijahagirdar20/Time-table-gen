import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import {
  addDepartment,
  updateDepartment,
  removeDepartment,
} from "../../../redux/reducer/departmentSlice";

const AddDepartments = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departments);

  const [deptId, setDeptId] = useState("");
  const [deptName, setDeptName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleAddOrUpdateDepartment = () => {
    if (deptId && deptName) {
      const department = { deptId, deptName };
      if (isEditing) {
        dispatch(updateDepartment(department));
      } else {
        dispatch(addDepartment(department));
      }
      setDeptId("");
      setDeptName("");
      setIsEditing(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleEditDepartment = (department) => {
    setDeptId(department.deptId);
    setDeptName(department.deptName);
    setIsEditing(true);
  };

  const handleRemoveDepartment = (deptId) => {
    dispatch(removeDepartment({ deptId }));
  };

  return (
    <div className="tabContent">
      <h2 className="tabHeading">Add Departments</h2>
      <TextField
        label="Department ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={deptId}
        onChange={(e) => setDeptId(e.target.value)}
      />
      <TextField
        label="Department Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={deptName}
        onChange={(e) => setDeptName(e.target.value)}
      />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          View/Edit Departments
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddOrUpdateDepartment}
        >
          {isEditing ? "Update Department" : "Add Department"}
        </Button>
      </Box>
      <h3>Existing Departments</h3>
      <ul>
        {departments.map((department) => (
          <li key={department.deptId}>
            {department.deptId} - {department.deptName}
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEditDepartment(department)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleRemoveDepartment(department.deptId)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddDepartments;
