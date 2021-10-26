import React, { useState } from "react";
import "./App.css";

function App() {
  const [colorBtn, setColorBtn] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newColorBtn = colorBtn === "red" ? "blue" : "red";

  return (
    <div className="App">
      <button
        // style={{ backgroundColor: colorBtn }}
        onClick={() => setColorBtn(newColorBtn)}
        disabled={disabled}
        style={{ backgroundColor: disabled ? "gray" : colorBtn }}
      >
        Change to {newColorBtn}
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
