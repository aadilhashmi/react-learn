import React, { Component } from "react";

class EnableDisable extends Component {
  state = {
    disable: true,
  };
  handleChange = (e) => {
    if (e.target.value.lenght >= 6) {
      this.setState({
        disable: fasle,
      });
    } else {
      this.state({
        disable: true,
      });
    }
    render();
    return (
      <div>
        <form>
          <input type="text" placeholder="ENTER" onChange={this.handleChange} />
          <br />
          <br />
          <button disabled={this.state.disable}>SUBMIT</button>
        </form>
      </div>
    );
  };
}

export default EnableDisable;
