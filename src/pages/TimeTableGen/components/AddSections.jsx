import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import { addSection, updateSection } from "../../../redux/reducer/sectionSlice"; // Adjust the import path as needed

const AddSections = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sections);

  const [sectionId, setSectionId] = useState("");
  const [department, setDepartment] = useState("");
  const [coursesPerWeek, setCoursesPerWeek] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const CorrespondingDEPT = [
    { value: "", label: "" },
    { value: "ise", label: "ISE" },
    { value: "cse", label: "CSE" },
  ];

  const handleAddOrUpdateSection = () => {
    if (sectionId && department && coursesPerWeek) {
      const section = { sectionId, department, coursesPerWeek };
      if (isEditing) {
        dispatch(updateSection(section));
      } else {
        dispatch(addSection(section));
      }
      setSectionId("");
      setDepartment("");
      setCoursesPerWeek("");
      setIsEditing(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleEditSection = (section) => {
    setSectionId(section.sectionId);
    setDepartment(section.department);
    setCoursesPerWeek(section.coursesPerWeek);
    setIsEditing(true);
  };

  return (
    <div className="tabContent">
      <h2 className="tabHeading">Add Sections</h2>
      <TextField
        label="Section ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sectionId}
        onChange={(e) => setSectionId(e.target.value)}
      />
      <TextField
        select
        label="Corresponding Department"
        variant="outlined"
        fullWidth
        margin="normal"
        SelectProps={{
          native: true,
        }}
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        {CorrespondingDEPT.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        label="Courses Per Week"
        variant="outlined"
        fullWidth
        margin="normal"
        value={coursesPerWeek}
        onChange={(e) => setCoursesPerWeek(e.target.value)}
      />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          View/Edit Sections
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddOrUpdateSection}
        >
          {isEditing ? "Update Section" : "Add Section"}
        </Button>
      </Box>
      <h3>Existing Sections</h3>
      <ul>
        {sections.map((section) => (
          <li key={section.sectionId}>
            {section.sectionId} - {section.department} -{" "}
            {section.coursesPerWeek}
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEditSection(section)}
            >
              Edit
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddSections;
