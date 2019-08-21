import React from "react";
import TextFormatter from "./textFormatter";

const View = props => {
  const processedText = TextFormatter(props.text);

  return (
    <div className="View">
      <article>
        <h1>
          {props.title}
        </h1>
        <span
          dangerouslySetInnerHTML={{__html: processedText}}
          />
      </article>
    </div>
  );
};

export default View;
