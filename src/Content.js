import React from "react";
import quotes from "./quotes"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class Content extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <p>{this.props.quote}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{this.props.author}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-outline-info" onClick={this.props.handleNewQuote}>New Quote</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info">Tweet</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Content;
