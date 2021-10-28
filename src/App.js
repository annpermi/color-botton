import React, { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  // if (colorName === "MediumVioletRed") {
  //   return "Midnight Blue";
  // }
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [colorBtn, setColorBtn] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);

  const newColorBtn =
    colorBtn === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div className="App">
      <button
        // style={{ backgroundColor: colorBtn }}
        onClick={() => setColorBtn(newColorBtn)}
        disabled={disabled}
        style={{ backgroundColor: disabled ? "gray" : colorBtn }}
      >
        Change to {replaceCamelWithSpaces(newColorBtn)}
      </button>
      <input
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
        id="disabled-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
      />
      <label htmlFor="disabled-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
