import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput'
import Guess from '../Guess';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]) // state to hold previous guessed words
  const [disableInput, setDisableInput] = React.useState(false)
  const guessStatuses = guessList.map(word => checkGuess(word, answer));

  

  return ( <>
  <Guess 
  answer={answer}
  wordsToPrint={guessList}
  guessStatuses={guessStatuses}
  setDisableInput={setDisableInput}
  />
  <GuessInput 
  guessList={guessList}
  setGuessList={setGuessList}
  disableInput={disableInput}
   />
  </>
  );
}

export default Game;
