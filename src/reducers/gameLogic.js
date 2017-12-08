import {ADD_LETTER} from '../actions/add-letter'
import wordList from '../fixtures/word-index'

// shuffle array, hide letters

let words = wordList
function mixItUp(){
var randomNumber = Math.floor(Math.random()*words.length);
return words[randomNumber];
}

const currentWord = mixItUp();
const underscores = currentWord.replace(/[a-z]/g, "_ ")

// return correct user guesses

function returnGuess(word, payload, gameWord) {
  return word.split("").map(function(guess, index) {
    if (guess === payload || gameWord.split(" ")[index] !== "_") {
      return guess;
    } else {
      return "_"
    }
  }).join(" ")
}

function wrongGuess(word, payload, count) {
  if  (!word.includes(payload))
      {return (count+1)}
    else
      {return count}
  }

const initialState = {
  hiddenWord: currentWord,
  gameWord: underscores,
  userGuess: [],
  wrongGuessCount: 0
}

export default (currentState = initialState, { type, payload } = {}) => {
  switch(type) {
    case ADD_LETTER:
      return {
        ...currentState,
        gameWord: returnGuess(currentState.hiddenWord, payload, currentState.gameWord),
        userGuess: currentState.userGuess.concat(payload),
        wrongGuessCount: wrongGuess(currentState.hiddenWord, payload, currentState.wrongGuessCount),
      }

    default :
      return currentState
  }
}
