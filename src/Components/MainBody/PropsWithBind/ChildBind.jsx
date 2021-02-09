import React, { Component } from "react";

class ChildBind extends Component {
  render() {
    return (
      <div>
        <p>
          i am {this.props.name} my age {this.props.age}
        </p>
        <p>
          i am {this.props.name1} my age {this.props.age}
        </p>
      </div>
    );
  }
}

export default ChildBind;
