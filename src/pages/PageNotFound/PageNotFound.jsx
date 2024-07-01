import "./PageNotFound.css";

import React, { useEffect, useState } from "react";

function PageNotFound() {
  const [secondsLeft, setSecondsLeft] = useState(10); // Initial countdown of 10 seconds

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecondsLeft((prevSeconds) => Math.max(0, prevSeconds - 1)); // Decrement timer
      if (secondsLeft === 0) {
        window.history.back(); // Go back after 10 seconds
      }
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup function for timer
  }, [secondsLeft]);
  return (
    <div className="PageNotFound">
      <div className="page-not-found-heading">404 Page Not Found</div>
      <div className="page-not-found-description">
        Redirecting back in {secondsLeft} seconds
      </div>
    </div>
  );
}

export default PageNotFound;
