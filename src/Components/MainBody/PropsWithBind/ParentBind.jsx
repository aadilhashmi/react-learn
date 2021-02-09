import React, { Component } from "react";
import ChildBind from "./ChildBind";

class ParentBind extends Component {
  state = {
    person: [
      { name: "Batman", age: 25 },
      { name: "Superman", age: 30 },
      { name: "Captain America", age: 56 },
    ],
  };

  changNameHandler = (newname, newname1) => {
    this.setState({
      person: [
        { name: newname, age: 10 },
        { name: newname1, age: 20 },
      ],
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.changNameHandler.bind(this, "aamer", "rizwan")}>
          ON CLICK
        </button>
      </div>
    );
  }
}

export default ParentBind;
