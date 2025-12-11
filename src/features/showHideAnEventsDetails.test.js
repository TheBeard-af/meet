import React from "react";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;

    given("the user opens the app", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    when("the user views the list of events", async () => {
      await waitFor(() => {
        const eventElements = AppDOM.querySelectorAll(".event");
        expect(eventElements.length).toBeGreaterThan(0);
      });
    });

    then("the event element should be collapsed by default", () => {
      const firstEvent = AppDOM.querySelector(".event");
      const details = firstEvent.querySelector(".details");
      expect(details).toBeNull(); // collapsed = no details visible
    });
  });

  test("User can expand an event to see details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let firstEvent;

    given("the user opens the app", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    and("the list of events has loaded", async () => {
      await waitFor(() => {
        const events = AppDOM.querySelectorAll(".event");
        expect(events.length).toBeGreaterThan(0);
      });
      firstEvent = AppDOM.querySelector(".event");
    });

    when("the user clicks the show details button for an event", async () => {
      const detailsButton = firstEvent.querySelector(".show-details-btn");
      const user = userEvent.setup();
      await user.click(detailsButton);
    });

    then("the event element should expand to show the details", () => {
      const details = firstEvent.querySelector(".details");
      expect(details).not.toBeNull();
    });
  });

  test("User can collapse an event to hide details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let firstEvent;

    given("the user has expanded an event’s details", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;

      // wait for events to load
      await waitFor(() => {
        const events = AppDOM.querySelectorAll(".event");
        expect(events.length).toBeGreaterThan(0);
      });

      firstEvent = AppDOM.querySelector(".event");

      // expand event details
      const showButton = firstEvent.querySelector(".show-details-btn");
      const user = userEvent.setup();
      await user.click(showButton);

      // confirm details appeared
      const expandedDetails = firstEvent.querySelector(".details");
      expect(expandedDetails).not.toBeNull();
    });

    when("the user clicks the hide details button", async () => {
      const hideButton = firstEvent.querySelector(".hide-details-btn");
      const user = userEvent.setup();
      await user.click(hideButton);
    });

    then("the event element should collapse and hide the details", () => {
      const details = firstEvent.querySelector(".details");
      expect(details).toBeNull();
    });
  });
});
