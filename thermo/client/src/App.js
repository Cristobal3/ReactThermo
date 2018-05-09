import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    response: ''
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
      <div>
          <h1 className="App-title">Welcome to React</h1>
        
        <p className="App-intro">{this.state["response"]}</p>
      </div>
      </Router>
    );
  }
}

export default App;
