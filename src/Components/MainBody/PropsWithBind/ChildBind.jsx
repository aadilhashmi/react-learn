import React, { Component } from "react";

class ChildBind extends Component {
  render() {
    return (
      <div>
        i am {this.props.name} my age {this.props.age}
      </div>
    );
  }
}

export default ChildBind;
