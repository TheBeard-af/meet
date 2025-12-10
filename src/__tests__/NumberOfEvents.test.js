import React from "react";
import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

const TestWrapper = ({ initialValue = 32, onChange }) => {
  const [val, setVal] = React.useState(initialValue);
  const handleChange = (n) => {
    setVal(n);
    if (onChange) onChange(n);
  };
  return <NumberOfEvents currentNOE={val} setCurrentNOE={handleChange} />;
};

describe("<NumberOfEvents /> component", () => {
  test("renders textbox with default value of 32", () => {
    const { getByRole } = render(
      <NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} />
    );
    const textbox = getByRole("textbox");
    expect(textbox).toBeInTheDocument();
    expect(textbox).toHaveValue("32");
  });

  test("user can change the number of events", async () => {
    const setCurrentNOE = jest.fn();
    const { getByRole } = render(
      <TestWrapper initialValue={32} onChange={setCurrentNOE} />
    );
    const textbox = getByRole("textbox");
    const user = userEvent.setup();

    await user.type(textbox, "{backspace}{backspace}10");

    expect(textbox).toHaveValue("10");
    expect(setCurrentNOE).toHaveBeenCalledWith(10);
  });
});
