import React, { Component } from "react";
import "./EnableDisable.css";

class Enable_Disable extends Component {
  state = {
    disabled: true,
  };

  onChangeHandle = (e) => {
    if (e.target.value.lenght >= 6) {
      this.setState({
        disabled: false,
      });
    }
    else {
      this.setState({
        disabled: true,
      });
    }
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="ENTER"
            onChange={this.onChangeHandle}
          />
          <br />
          <button disabled={this.state.disabled}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Enable_Disable;
