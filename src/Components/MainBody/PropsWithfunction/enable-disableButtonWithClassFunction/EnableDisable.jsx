import React, { Component } from "react";

class EnableDisable extends Component {
  state = {
    disabled: true,
  };
  handleChange = (e) => {
    if (e.target.value.lenght >= 6) {
      this.setState({
        disabled: false,
      });
    } else {
      this.state({
        disabled: true,
      });
    }
    render();
    return (
      <div>
        <form>
          <input type="text" placeholder="ENTER" onChange={this.handleChange} />
          <br />
          <br />
          <button disabled={this.state.disabled}>SUBMIT</button>
        </form>
      </div>
    );
  };
}

export default EnableDisable;
