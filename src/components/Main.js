import React from "react";
import Quotes from "./Quotes";
import Footer from "./Footer";

// random color generator
function rgbGenerator() {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//  css background color generator
const background = () => {
  const color = rgbGenerator();
  return { backgroundColor: color, color: color };
};

const color = background();
class Main extends React.Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      quote: {},
      randomQuote: {},
      color: color
    };

    // bind he function to use the state
    this.handleClick = this.handleClick.bind(this);
  }

  // Make API request when component mount and store it in state
  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const random = Math.floor(Math.random() * data.length);
        this.setState({
          quote: data,
          randomQuote: data[random]
        });
      });
  }

  // on click of new quote generator a random quote id and color and display the quote
  handleClick() {
    const random = Math.floor(Math.random() * this.state.quote.length);
    this.setState((state) => ({
      randomQuote: state.quote[random],
      color: background()
    }));
  }

  render() {
    return (
      <div style={this.state.color} className="App">
        <Quotes
          color={this.state.color}
          background={this.state.color}
          randomQuote={this.state.randomQuote}
          handleClick={this.handleClick}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
