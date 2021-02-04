import React from "react";
import "./App.css";
// import { ClassMates } from "./Components/ClassMates/ClassMates";
import { Parent } from "./Components/MainBody/PropsWithfunction/Parent";
import ParentClasses from "./Components/MainBody/PropsWithClassComponent/ParentClasses";
import PropsWithClassParent from "./Components/MainBody/PropsWithClassComponent/PropsWithClassParent";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        {/* <ClassMates /> */}
        {/* <Parent /> */}
        {/* <ParentClasses /> */}
        <PropsWithClassParent />
      </div>
    </React.Fragment>
  );
}

export default App;
