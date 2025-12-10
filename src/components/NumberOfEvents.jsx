import React from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const handleInputChanged = (event) => {
    const { value } = event.target;

    if (value === "") {
      setCurrentNOE(0);
      return;
    }
    const cleaned = value.replace(/[^0-9]/g, "");
    const numericValue = Number(cleaned);

    if (!isNaN(numericValue)) {
      setCurrentNOE(numericValue);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-count">Number of Events:</label>
      <input
        type="text"
        id="event-count"
        role="textbox"
        value={currentNOE}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
