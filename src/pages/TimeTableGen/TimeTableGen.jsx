import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./TimeTableGen.css";
import AddRooms from "./components/AddRooms";
import AddTime from "./components/AddTime";
import AddCourses from "./components/AddCourses";
import AddDepartments from "./components/AddDepartments";
import AddSections from "./components/AddSections";

function TimeTableGen() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return (
          <div className="tabContent">
            <h2>Add Teachers</h2>
            <TextField
              label="Teacher ID"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Designation"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
        );
      case 1:
        return <AddRooms />;
      case 2:
        return <AddTime />;
      case 3:
        return <AddCourses />;
      case 4:
        return <AddDepartments />;
      case 5:
        return <AddSections />;
      case 6:
        return (
          <div className="tabContent">
            <h2>Generate Time-Table</h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="TimeTableGen">
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Add Teachers" />
          <Tab label="Add Rooms" />
          <Tab label="Add Timings" />
          <Tab label="Add Courses" />
          <Tab label="Add Departments" />
          <Tab label="Add Sections" />
          <Tab label="Generate Time-Table" />
        </Tabs>
        <Box sx={{ p: 3 }}>{renderTabContent(value)}</Box>
      </Box>
    </div>
  );
}

export default TimeTableGen;
