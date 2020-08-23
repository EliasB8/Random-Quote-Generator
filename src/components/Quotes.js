import React from "react";
import RandomQuote from "./RandomQuote";
import Link from "./Link";
import Button from "./Button";

class Quotes extends React.Component {
  render() {
    const unknown = "Unknown";
    return (
      <div id="quote-box" className="Quotes">
        <RandomQuote
          quote={this.props.randomQuote.text}
          author={
            this.props.randomQuote.author
              ? this.props.randomQuote.author
              : unknown
          }
        />
        <div className="clickable-container">
          <Link
            color={this.props.color}
            content={this.props.randomQuote.text}
            author={
              this.props.randomQuote.author
                ? this.props.randomQuote.author
                : unknown
            }
          />
          <Button
            color={this.props.color}
            handleClick={this.props.handleClick}
          />
        </div>
      </div>
    );
  }
}
export default Quotes;
