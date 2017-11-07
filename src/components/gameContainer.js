import React, { PureComponent } from 'react'
import userInput from './userInput'
import showWord from './showWord'
import { connect } from 'react-redux'


class GameContainer extends PureComponent {
    render() {
      return(
        <div>
          <h1>Welcome to Hangman</h1>
          <showWord guessedWord={ this.props.gameLogic.gameWord }/>
          <userInput wrongGuessCount={ this.props.gameLogic.wrongGuessCount }/>
          <div><p>Guessed Letters: </p></div>
          <p>{ this.props.gameLogic.userGuess.join(" ") }</p>
        </div>
      )
    }
  }

const mapStateToProps = ({ hangman }) => ({ hangman })
export default connect (mapStateToProps)(GameContainer)
