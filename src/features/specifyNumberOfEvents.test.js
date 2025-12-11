import React from "react";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When the user hasn’t specified a number, 32 events are shown by default", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;

    given("the user has not specified a number of events", () => {
      // nothing to do, initial state
    });

    when("the user opens the app", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    then(/^the default number of events should be (\d+)$/, async (arg0) => {
      const expectedNumber = parseInt(arg0); // arg0 = "32"

      await waitFor(() => {
        const EventListDOM = AppDOM.querySelector("#event-list");
        const EventItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventItems.length).toBe(expectedNumber);
      });
    });
  });

  test("User can specify how many events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let numberInput;

    given("the user can see the number of events textbox", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;

      numberInput = AppDOM.querySelector("#number-of-events input");
      expect(numberInput).toBeInTheDocument();
    });

    when(
      "the user types a number into the number of events textbox",
      async () => {
        const user = userEvent.setup();
        await user.clear(numberInput);
        await user.type(numberInput, "10");
      }
    );

    then(
      "the number of displayed events should match the number typed",
      async () => {
        await waitFor(() => {
          const EventListDOM = AppDOM.querySelector("#event-list");
          const EventItems = within(EventListDOM).queryAllByRole("listitem");
          expect(EventItems.length).toBe(10);
        });
      }
    );
  });
});
