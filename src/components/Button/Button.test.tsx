import "@testing-library/jest-dom";
import Button from ".";
import { render, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("renders the button label", () => {
    const label = "Click Me";
    const { getByText } = render(<Button label={label} onClick={() => { }} />);

    const buttonElement = getByText(label);

    expect(buttonElement).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Button label="Click Me" onClick={handleClick} />);

    const button = getByTestId("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders the correct styling based on variant", () => {
    const { getByTestId, rerender } = render(
      <Button label="Click Me" onClick={() => { }} variant="primary" />
    );

    let button = getByTestId("button");
    expect(button).toHaveStyle("background-color: #0056b3;");

    rerender(<Button label="Click Me" onClick={() => { }} variant="secondary" />);
    button = getByTestId("button");
    expect(button).toHaveStyle("background-color: #5a6268;");
  });

  it("is disabled when the disabled prop is true", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Button label="Click Me" onClick={handleClick} disabled={true} />);

    const button = getByTestId("button");
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });
});
