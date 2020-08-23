import React from "react";

function Button(props) {
  const color = {
    backgroundColor: props.color.backgroundColor
  };
  return (
    <button
      id="new-quote"
      className="btn"
      style={color}
      onClick={props.handleClick}
    >
      New Quote
    </button>
  );
}

export default Button;
