import React, { Component } from "react";

class EnableDisable extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="ENTER" onChange={this.handleChange} />
          <br />
          <br />
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default EnableDisable;
