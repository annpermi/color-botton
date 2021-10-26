import React, { useState } from "react";
import "./App.css";

function App() {
  const [colorBtn, setColorBtn] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newColorBtn = colorBtn === "red" ? "blue" : "red";

  return (
    <div className="App">
      <button
        style={{ backgroundColor: colorBtn }}
        onClick={() => setColorBtn(newColorBtn)}
        disabled={disabled}
      >
        Change to {newColorBtn}
      </button>
      <input
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
        data-testid="input-checkbox-checked"
        defaultChecked={disabled}
        aria-checked={disabled}
      />
    </div>
  );
}

export default App;
