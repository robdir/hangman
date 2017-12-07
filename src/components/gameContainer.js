import React, { PureComponent } from 'react'
import Input from './userInput'
import Word from './showWord'
import Photo from './image'
import { connect } from 'react-redux'


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
            <p>{(10 - (this.props.gameLogic.wrongGuessCount.length)) / 2} </p>
           </div>
           <div className="image">
           <Photo photoId={ this.props.gameLogic.wrongGuessCount.length } />
           </div>
        </div>
      )
    }
  }

const mapStateToProps = ({ gameLogic }) => ({ gameLogic })
export default connect (mapStateToProps)(GameContainer)
