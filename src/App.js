import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/gameContainer'

class App extends Component {
  render() {

    return (
      <div className="App">
        <p className="App-intro">
        Type a letter to kick things off!
        </p>
        <div>
        <GameContainer />
        </div>
      </div>
    );
  }

}

export default App;
