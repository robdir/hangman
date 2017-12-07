import React, { PureComponent } from 'react'
import Input from './userInput'
import Word from './showWord'
import { connect } from 'react-redux'
import img from '../hangman-images/0.jpg'


class GameContainer extends PureComponent {
    render() {
      return(
        <div className="game">
          <Word hiddenWord={ this.props.gameLogic.gameWord }/>
          <Input/>
          <div><p>Previously guessed letters:</p></div>
          <p>{ this.props.gameLogic.userGuess.join(" ") }</p>
          <div>
          <p> Guesses remaining: </p>
            <p>{((this.props.gameLogic.gameWord.length) - (this.props.gameLogic.wrongGuessCount.length)) / 2} </p>
           </div>
           <div className="image">
           <img src={img} alt="hangman" />
           </div>
        </div>
      )
    }
  }

const mapStateToProps = ({ gameLogic }) => ({ gameLogic })
export default connect (mapStateToProps)(GameContainer)
