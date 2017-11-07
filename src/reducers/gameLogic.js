import ADD_LETTER from './actions/add-letter'
import wordList from './fixtures/word-index'

// shuffle array, hide letters

let words = wordList
function mixItUp(){
var randomNumber = Math.floor(Math.random()*words.length);
return words[randomNumber];
}

const currentWord = mixItUp();
const underscores = currentWord.replace(/[a-z]/g, "_ ")

// return correct user guesses

function returnGuess(realword, hiddenword, payload){
  var splitWord = realword.split("");
  var correctLetters = splitWord.map(function(letter){
    return payload.includes(letter) ? letter : "_" ;
  });
  return correctLetters.join(" ");
}

const initialState = {
  hiddenWord: currentWord,
  gameWord: underscores,
  userGuess: [],
  wrongGuessCount: 0
}


export default (currentState = initialState, { type, payload } = {}) => {
  switch(type) {
    case ADD_LETTER: // INCREASE WGC OR ADD CORRECTLETTERS, ADD GUESSED LETTERS TO ARRAY
    default:
      return currentState
  }
}
