import React, { useState } from "react";

const NumberOfEvents = () => {
  const [eventCount, setEventCount] = useState("32");

  const handleInputChanged = (event) => {
    setEventCount(event.target.value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-count">Number of Events:</label>
      <input
        type="text"
        id="event-count"
        role="textbox"
        value={eventCount}
        onChange={(e) => setEventCount(e.target.value)}
      />
    </div>
  );
};

export default NumberOfEvents;
