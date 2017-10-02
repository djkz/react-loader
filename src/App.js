import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DataLoader, Submitter } from './DataLoader.js'


const render = ( loading, result ) => (
  <div>
    <h1>{ loading ? "Loading..." : result }&nbsp;</h1>
    <Submitter>{(onSubmit) => ( <a className={loading ? 'disabled' : '' } onClick={() => loading ? null :onSubmit("Deal 1")}>Load Deal 1</a>)}</Submitter>
    <Submitter>{(onSubmit) => ( <a className={loading ? 'disabled' : ''} onClick={() => loading ? null : onSubmit("Deal 2")}>Load Deal 2</a>)}</Submitter>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <DataLoader render={ (loading, result) => render(loading, result) } />
          <br />
      </div>
    );
  }
}

export default App;
