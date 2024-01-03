import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('') //state for the word guessed by the user
  return <>
  <GuessInput 
  guess={guess}
  setGuess={setGuess} />
  </>;
}

export default Game;
