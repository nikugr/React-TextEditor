import React from "react";
import Input from "./input";
import View from "./view";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "Body",
      title: "Title",
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div>
        <Input 
          value={this.state.value} 
          title={this.state.title}
          onChange={this.handleChange} 
          onTitleChange={this.handleTitleChange}
        />
        <View text={this.state.value} title={this.state.title} />
      </div>
    );
  }
}

export default TextEditor;
