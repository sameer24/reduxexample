import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'

import store from './store';
import Posts from "./components/Posts";
import Postform from "./components/Postform";
import Navbar from "./components/Navbar";
import GridAg from "./components/Gridag";

//const store = createStore(()=>[],{},applyMiddleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route path="/" exact render={() => (
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
            )} />
            <Route path="/postform" render={({ match }) => (
              <Postform />
            )} />
            <Route path="/posts" render={({ match }) => (
              <Posts />
            )} />
            <Route path="/gridag" render={({ match }) => (
              <GridAg />
            )} />
            {/* <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
