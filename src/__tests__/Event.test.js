import React from "react";
import { render } from "@testing-library/react";
import { getEvents } from "../api";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let allEvents;
  let EventComponent;

  // Fetch the mock events before running tests
  beforeAll(async () => {
    allEvents = await getEvents();
  });

  // Render one event before each test
  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("renders the event component without crashing", () => {
    expect(EventComponent.container.firstChild).toBeInTheDocument();
  });

  test("renders event summary, start time, and location, but details are collapsed by default", () => {
    const event = allEvents[0];
    const { queryByText, queryByRole } = EventComponent;

    // Verify that summary, start time, and location are visible
    expect(queryByText(event.summary)).toBeInTheDocument();
    expect(queryByText(event.location)).toBeInTheDocument();
    expect(queryByText(event.created)).toBeInTheDocument();

    // Verify that details are NOT visible yet
    const details = queryByRole("article");
    expect(details).not.toBeInTheDocument();
  });

  test('shows event details when "Show details" button is clicked', async () => {
    const event = allEvents[0];
    const { queryByRole, getByText } = EventComponent;
    const user = userEvent.setup();

    // Act: click "Show details"
    const showDetailsButton = getByText("Show details");
    await user.click(showDetailsButton);

    // Assert: details should now be visible
    const details = queryByRole("article");
    expect(details).toBeInTheDocument();
  });

  test('hides event details when "Hide details" button is clicked', async () => {
    const event = allEvents[0];
    const { queryByRole, getByText } = EventComponent;
    const user = userEvent.setup();

    // Expand first
    const showDetailsButton = getByText("Show details");
    await user.click(showDetailsButton);

    // Confirm details are visible
    const detailsBefore = queryByRole("article");
    expect(detailsBefore).toBeInTheDocument();

    // Collapse again
    const hideDetailsButton = getByText("Hide details");
    await user.click(hideDetailsButton);

    // Verify details are no longer visible
    const detailsAfter = queryByRole("article");
    expect(detailsAfter).not.toBeInTheDocument();
  });
});
