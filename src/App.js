import logo from './logo.svg';
import React from "react";
import './App.css';
import quotes from "./quotes"
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"



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
      <Header />
      <Content quote={this.state.quote} author={this.state.author} handleNewQuote={this.randomQuoteHandler}/>
      <Footer />
      </div>
    );
  }
}

export default App;
