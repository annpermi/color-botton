import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [colorBtn, setColorBtn] = useState("red");
  const newColorBtn = colorBtn === "red" ? "blue" : "red";

  return (
    <div className="App">
      <button
        style={{ backgroundColor: colorBtn }}
        onClick={() => setColorBtn(newColorBtn)}
      >
        Change to {newColorBtn}
      </button>
    </div>
  );
}

export default App;
