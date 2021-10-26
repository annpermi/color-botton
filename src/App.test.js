import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

/* test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /learn react/i });
  // const linkElement = screen.getByText("Learn React");
  expect(linkElement).toBeInTheDocument();
}); */

//1. Write initial test
test("button has correct initial color", () => {
  //2. Add render method for component, access to virtual DOM
  render(<App />);

  //find an element with role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //click button
  //fireEvent - interact with dom elements
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

// test("button turns blue when click", () => {
//   render(<App />);
//   const colorButton = screen.getByRole("button", { name: "Change to blue" });
// });

test("initial condition", () => {
  render(<App />);

  //check that button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  //access to the dom elements
  // const checkbox = screen.getByTestId("input-checkbox-checked");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  //click checkbox
  fireEvent.click(checkbox);
  //check button disabled
  expect(button).toBeDisabled();

  //click checkbox
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
