import React, { Component } from "react";

export class PropsWithClassChild extends Component {
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
