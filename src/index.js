import React from "react";
import ReactDOM from "react-dom";
import TextEditor from "./textEditor";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TextEditor />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
