import React from "react";
import Quotes from "./Quotes";
import Footer from "./Footer";

function rgbGenerator() {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

const background = () => {
  const color = rgbGenerator();
  return { backgroundColor: color, color: color };
};

const color = background();
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: {},
      randomQuote: {},
      color: color
    };
    this.handleClick = this.handleClick.bind(this);
  }

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
