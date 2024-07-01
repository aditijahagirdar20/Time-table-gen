import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import {
  addTime,
  updateTime,
  removeTime,
} from "../../../redux/reducer/timesSlice";

const AddTimings = () => {
  const dispatch = useDispatch();
  const times = useSelector((state) => state.times);

  const [meetingId, setMeetingId] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleAddOrUpdateTime = () => {
    if (meetingId && timeSlot && dayOfWeek) {
      const time = { meetingId, timeSlot, dayOfWeek };
      if (isEditing) {
        dispatch(updateTime(time));
      } else {
        dispatch(addTime(time));
      }
      setMeetingId("");
      setTimeSlot("");
      setDayOfWeek("");
      setIsEditing(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleEditTime = (time) => {
    setMeetingId(time.meetingId);
    setTimeSlot(time.timeSlot);
    setDayOfWeek(time.dayOfWeek);
    setIsEditing(true);
  };

  const handleRemoveTime = (meetingId) => {
    dispatch(removeTime({ meetingId }));
  };

  return (
    <div className="tabContent">
      <h2 className="tabHeading">Add Timings</h2>
      <TextField
        label="Meeting ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={meetingId}
        onChange={(e) => setMeetingId(e.target.value)}
      />
      <TextField
        select
        label="Time Slot"
        variant="outlined"
        fullWidth
        margin="normal"
        SelectProps={{
          native: true,
        }}
        value={timeSlot}
        onChange={(e) => setTimeSlot(e.target.value)}
      >
        <option value=""></option>
        <option value="7:30-8:30">7:30-8:30</option>
        <option value="8:30-9:30">8:30-9:30</option>
        <option value="9:30-10:30">9:30-10:30</option>
        <option value="10:30-11">10:30-11 (Break)</option>
        <option value="11:00-11:50">11:00-11:50</option>
        <option value="11:50-12:40">11:50-12:40</option>
        <option value="12:40-1:30">12:40-1:30</option>
        <option value="1:30-2:30">1:30-2:30 (Break)</option>
        <option value="2:30-3:30">2:30-3:30</option>
        <option value="3:30-4:30">3:30-4:30</option>
        <option value="4:30-5:30">4:30-5:30</option>
      </TextField>
      <TextField
        select
        label="Day of Week"
        variant="outlined"
        fullWidth
        margin="normal"
        SelectProps={{
          native: true,
        }}
        value={dayOfWeek}
        onChange={(e) => setDayOfWeek(e.target.value)}
      >
        <option value=""></option>
        <option value="mon">Mon</option>
        <option value="tue">Tue</option>
        <option value="wed">Wed</option>
        <option value="thur">Thur</option>
        <option value="fri">Fri</option>
        <option value="sat">Sat</option>
        <option value="sun">Sun</option>
      </TextField>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          View/Edit Timings
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddOrUpdateTime}
        >
          {isEditing ? "Update Timing" : "Add Timing"}
        </Button>
      </Box>
      <h3>Existing Timings</h3>
      <ul>
        {times.map((time) => (
          <li key={time.meetingId}>
            {time.meetingId} - {time.timeSlot} - {time.dayOfWeek}
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEditTime(time)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleRemoveTime(time.meetingId)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTimings;
