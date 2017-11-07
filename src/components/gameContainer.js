import React, { PureComponent } from 'react'
import Input from './userInput'
import Word from './showWord'
import { connect } from 'react-redux'


class GameContainer extends PureComponent {
    render() {
      return(
        <div>
          <Word hiddenWord={ this.props.gameLogic.gameWord }/>
          <Input/>
          <div><p>Previously guessed letters:</p></div>
          <p>{ this.props.gameLogic.userGuess.join(" ") }</p>
          <div>
          <p> Guesses remaining: </p>
           </div>
        </div>
      )
    }
  }

const mapStateToProps = ({ gameLogic }) => ({ gameLogic })
export default connect (mapStateToProps)(GameContainer)
