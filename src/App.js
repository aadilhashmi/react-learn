import React from "react";
import "./App.css";
import { ClassMates } from "./Components/ClassMates/ClassMates";
import { Parent } from "./Components/FooterSection/PropsWithfunction/Parent";
import ParentClasses from "./PropsWithClassComponent/ParentClasses";

function App() {
  return (
    <React.Fragment>
      <div>
        <ClassMates />
        <Parent />
        <ParentClasses />
      </div>
    </React.Fragment>
  );
}

export default App;
