import React from "react";

const Input = props => {
  return (
    <div className="Input">
      <form>
        <h3>Text box</h3>
        <textarea onChange={e => props.onChange(e)} />
      </form>
    </div>
  );
};

export default Input;
