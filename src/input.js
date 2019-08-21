import React from "react";

const Input = props => {
  return (
    <div className="Input">
      <form>
        <h3>Article writer</h3>
        <label>
          Title:
          <input type="Text" value={props.title} onChange={e => props.onTitleChange(e)}>
          </input>
        </label>
        <br />
        <label>
          Article: 
          <textarea value={props.value} onChange={e => props.onChange(e)} />
        </label>
      </form>
    </div>
  );
};

export default Input;
