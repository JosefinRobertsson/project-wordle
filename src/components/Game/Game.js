import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput'
import GuessList from '../GuessList';
import Guess from '../Guess';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]) // state to hold previous guessed words
  const guessStatuses = guessList.map(word => checkGuess(word, answer));

  console.log("Game rerender");

  return ( <>
  <Guess 
  wordsToPrint={guessList}
  guessStatuses={guessStatuses}
  />
<GuessList
guessList={guessList}
/>
  <GuessInput 
  guessList={guessList}
  setGuessList={setGuessList}
   />
  </>
  );
}

export default Game;
