import React, { useEffect, useState } from 'react';
import './DateTimeDisplay.css';

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="timeDisplay">
      {currentTime}
    </div>
  );
}

export default DateTimeDisplay;
