import React, { Component } from "react";

class PropsWithClassChild extends Component {
  render() {
    return (
      <div>
        <p>
          i am {this.props.name} my age {this.props.age}
        </p>
      </div>
    );
  }
}

export default PropsWithClassChild;
