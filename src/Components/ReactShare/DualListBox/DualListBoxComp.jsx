import React from "react";
import "react-dual-listbox/lib/react-dual-listbox.css";
import DualListBox from "react-dual-listbox";

const options = [
  { value: "one", label: "Option One" },
  { value: "two", label: "Option Two" },
];

export class DualListBoxComp extends React.Component {
  state = {
    selected: ["two"],
  };

  onChange = (selected) => {
    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;

    return (
      <DualListBox
        options={options}
        selected={selected}
        onChange={this.onChange}
      />
    );
  }
}
