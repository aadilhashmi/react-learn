import React, { Component } from "react";
import PropsWithClassChild from "./PropsWithClassChild";

class PropsWithClassParent extends Component {
  render() {
    return (
      <div>
        <PropsWithClassChild name="aamer khan" age="56" />
        <PropsWithClassChild name="salman khan" age="56" />
        <PropsWithClassChild name="shahruk khan khan" age="56" />
      </div>
    );
  }
}

export default PropsWithClassParent;
