import logo from './logo.svg';
import React from "react";
import './App.css';
import quotes from "./quotes"
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

// import Content from "./Content"



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    quote: quotes[0].quote,
    author: quotes[0].author
    };
    this.randomQuoteHandler = this.randomQuoteHandler.bind(this);
  }
  randomQuoteHandler = () => {
    const randNumb = Math.floor(Math.random() * quotes.length);
    this.setState({
      quote: quotes[randNumb].quote,
      author: quotes[randNumb].author
    });
  };
  render() {
    return (
      <div className="App">
      <h1 id="title">Random Quote App</h1>
      <div className="container" id="quote-box">
        <div className="row">
          <div className="col">
            <p id="text">{this.state.quote}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p id="author">{this.state.author}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-light" onClick={this.randomQuoteHandler} id="new-quote">New Quote</button>
          </div>
          <div className="col">
            <a id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet/?text=${this.state.quote} - ${this.state.author}`}><button className="btn btn-light">Tweet Quote</button></a>
          </div>
        </div>
      </div>
      <p id="madeby">Made by Balint Pataki, 2021 Febr</p>
      </div>
    );
  }
}

export default App;
