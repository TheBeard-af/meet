import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      {/* Essential event info that is always visible */}
      <h2 className="summary">{event.summary}</h2>
      <p className="created">{event.created}</p>
      <p className="location">{event.location}</p>

      {/* Toggle button */}
      {!showDetails ? (
        <button
          className="show-details-btn"
          onClick={() => setShowDetails(true)}
        >
          Show details
        </button>
      ) : (
        <button
          className="hide-details-btn"
          onClick={() => setShowDetails(false)}
        >
          Hide details
        </button>
      )}

      {/* Conditionally render details — not shown by default */}
      {showDetails && (
        <article className="details" role="article">
          <h3>Event Details</h3>
          <p>{event.description}</p>
          <p>
            <strong>Start:</strong> {event.start?.dateTime || event.start?.date}
          </p>
          <p>
            <strong>End:</strong> {event.end?.dateTime || event.end?.date}
          </p>
        </article>
      )}
    </li>
  );
};

export default Event;
