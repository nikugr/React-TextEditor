import React from "react";

const View = props => {
  const text = props.text;

  let processedText = "";
  let bold = false;
  let head = false;
  for(const char of text) {
    let c = char;

    // Newline
    if(c === "\n") {
      c = "<br>"
    }

    // Bolding
    else if(c === "*") {
      if(!bold) {
        bold = !bold;
        c = "<strong>";
      } else {
        bold = !bold;
        c = "</strong>";
      }
    }

    // Heading
    else if(c === "1") {
      if(!head) {
        head = !head;
        c = "<h1>";
      } else {
        head = !head;
        c = "</h1>";
      }
    }

    processedText = processedText + c;
  }
  

  return (
    <div className="View">
      <article>
        <span
          dangerouslySetInnerHTML={{__html: processedText}}
          />
      </article>
    </div>
  );
};

export default View;
