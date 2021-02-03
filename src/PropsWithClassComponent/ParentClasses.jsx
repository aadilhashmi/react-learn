import React, { Component } from "react";
import ChildClasses from "./ChildClasses";
class ParentClasses extends Component {
  render() {
    return (
      <div>
        <ChildClasses />
      </div>
    );
  }
}
export default ParentClasses;
