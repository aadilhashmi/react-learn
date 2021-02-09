import React, { Component } from "react";
import ChildBind from "./ChildBind";

class ParentBind extends Component {
  changNameHandler = (newname, newname1) => {
    this.setState({
      person: [
        { name: newname, age: 10 },
        { name: newname1, age: 20 },
      ],
    });
  };
  render() {
    return <div>{this.changNameHandler.bind(this, "aamer", "rizwan")}</div>;
  }
}

export default ParentBind;
