import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './components/gameContainer'

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hangman in React</h1>
        </header>
        <div>
        <p className="App-intro">
        Type a letter to kick things off!
        </p>
        </div>
        <div>
        <GameContainer />
        </div>
      </div>
    );
  }

}

export default App;
