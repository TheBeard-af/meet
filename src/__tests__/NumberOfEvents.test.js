import React from "react";
import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe("<NumberOfEvents /> component", () => {
  test("renders textbox with default value of 32", () => {
    const { getByRole } = render(<NumberOfEvents />);
    const textbox = getByRole("textbox");
    expect(textbox).toBeInTheDocument();
    expect(textbox).toHaveValue("32");
  });

  test("user can change the number of events", async () => {
    const { getByRole } = render(<NumberOfEvents />);
    const textbox = getByRole("textbox");
    const user = userEvent.setup();

    await user.clear(textbox);
    await user.type(textbox, "10");

    expect(textbox).toHaveValue("10");
  });
});
