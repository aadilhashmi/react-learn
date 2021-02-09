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
        { name: newname, age: 25 },
        { name: newname1, age: 30 },
        { name: "Captain America", age: 56 },
      ],
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.changNameHandler.bind(this, "Khwaja", "rizwan")}>
          ONCLICK
        </button>
        <ChildBind
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <ChildBind name={this.state.person[1].name} />
      </div>
    );
  }
}

export default ParentBind;
