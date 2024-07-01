import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import { addRoom, updateRoom } from "../../../redux/reducer/roomSlice";

const AddRooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);

  const [roomId, setRoomId] = useState("");
  const [roomType, setRoomType] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleAddRoom = () => {
    if (roomId && roomType) {
      const room = { id: roomId, type: roomType };
      if (isEditing) {
        dispatch(updateRoom(room));
      } else {
        dispatch(addRoom(room));
      }
      setRoomId("");
      setRoomType("");
      setIsEditing(false);
    } else {
      alert("Please fill out both fields.");
    }
  };

  const handleEditRoom = (room) => {
    setRoomId(room.id);
    setRoomType(room.type);
    setIsEditing(true);
  };

  return (
    <div className="tabContent">
      <h2 className="tabHeading">Add Rooms</h2>
      <TextField
        label="Room ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <TextField
        select
        label="Room Type"
        variant="outlined"
        fullWidth
        margin="normal"
        SelectProps={{
          native: true,
        }}
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
      >
        <option value=""></option>
        <option value="lab">Lab</option>
        <option value="theory">Theory</option>
      </TextField>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          View/Edit Rooms
        </Button>
        <Button variant="contained" color="primary" onClick={handleAddRoom}>
          {isEditing ? "Update Room" : "Add Room"}
        </Button>
      </Box>
      <h3>Existing Rooms</h3>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            {room.id} - {room.type}
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEditRoom(room)}
            >
              Edit
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddRooms;
