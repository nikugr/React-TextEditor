import React from "react";
import Input from "./input";
import View from "./view";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Empty" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <Input onChange={this.handleChange} />
        <View text={this.state.value} />
      </div>
    );
  }
}

export default TextEditor;
