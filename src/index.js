import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


import logo from './logo.svg';
// import React from "react";
import './App.css';


// import Content from "./Content"

const quotes = [
  {
    "quote": "Be yourself; everyone else is already taken.",
    "author": "Oscar Wilde"
  },
  {
    "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "author": "Albert Einstein"
  },
  {
    "quote": "A room without books is like a body without a soul.",
    "author": "Marcus Tullius Cicero"
  },
  {
    "quote": "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "author": "J.K. Rowling"
  },
  {
    "quote": "Life is growth. If we stop growing, technically and spiritually, we are as good as dead.",
    "author": "Morihei Ueshiba"
  },
  {
    "quote": "Progress comes to those who train and train; reliance on secret techniques will get you nowhere.",
    "author": "Morihei Ueshiba"
  },
  {
    "quote": "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
    "author": "Eminem"
  },
  {
    "quote": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    "author": "Lao Tzu"
  },
  {
    "quote": "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    "author": "John Lennon"
  },
  {
    "quote": "′Classic′ - a book which people praise and don't read.",
    "author": "Mark Twain"
  },
  {
    "quote": "Everyone thinks of changing the world, but no one thinks of changing himself.",
    "author": "Leo Tolstoy"
  },
  {
    "quote": "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
    "author": "J.R.R. Tolkien"
  },
]

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



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
