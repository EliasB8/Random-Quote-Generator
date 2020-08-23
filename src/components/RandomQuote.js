import React from "react";

function RandomQuote(props) {
  return (
    <div className="quote-text">
      <div id="text">
        <h1>
          <i className="fa fa-quote-left" aria-hidden="true"></i> {props.quote}{" "}
          <i className="fa fa-quote-right" aria-hidden="true"></i>
        </h1>
      </div>
      <div id="author">
        <p> - {props.author}</p>
      </div>
    </div>
  );
}

export default RandomQuote;
