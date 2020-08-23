import React from "react";

function Link(props) {
  const link = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" ${props.content} "  - ${props.author}`;
  return (
    <a
      id="tweet-quote"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={props.color}
    >
      <i className="fa fa-twitter fa-2x"></i>
    </a>
  );
}

export default Link;
