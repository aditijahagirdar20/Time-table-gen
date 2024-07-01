import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <div className="upper-section">
        <h1>Welcome to Time Table Generator</h1>
        <p>A timetable management system for our college.</p>
        <button className="get-started-btn">Get Started &gt;</button>
      </div>
      <hr className="partition" />
      <div className="lower-section">
        <div className="component">
          <h3>1:Add Teachers</h3>

          <p>
            Navigate to the "Add Teachers" section and add the list of teachers
            for the semester.
          </p>
        </div>
        <div className="component">
          <h3>2:Add Rooms</h3>

          <p>
            Navigate to the "Add Rooms" section and add the coreesponding
            details. Select one of thr rooms from lab rooms for lab classes and
            regular room for theory classes.
          </p>
        </div>
        <div className="component">
          <h3>3:Add Timings</h3>

          <p>
            Navigate to the "Add Timings" section and add the timing for each
            day of the week.
          </p>
        </div>
      </div>
      <hr className="dot-divider" />
      <div className="lower-section">
        <div className="component">
          <h3>4:Add Courses</h3>

          <p>
            Navigate to the "Add Courses" section and add the subject codes and
            subject names for the semester.
          </p>
        </div>
        <div className="component add-departments">
          <h3>5:Add Department</h3>
          <p>
            Choose the department for whichthe time table has been generated{" "}
          </p>
        </div>
        <div className="component">
          <h3>6:Add Sections</h3>

          <p>
            Navigate to the "Add Section" section and add the corresponding
            details. Incorrect details can also be removed via the "Edit
            Section" option
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
