import React from "react";
import "./App.css";
import { Landing } from "./Components/HomePage/Landing";
import Radium, { StyleRoot } from "radium";
function App() {
  return (
    <StyleRoot>
      <React.Fragment>
        <div className="App">
          <Landing />
        </div>
      </React.Fragment>
    </StyleRoot>
  );
}

export default App;
