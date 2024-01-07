import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import NewGameButton from '../NewGameButton/NewGameButton';


function Banner({ answer, wordsToPrint, guessStatuses, setDisableInput }) {
  const [win, setWin] = React.useState(false)
  const [loss, setLoss] = React.useState(false)

  const checkGame = () => {
    const lastIndex = wordsToPrint.length - 1
    const wordToCheck = wordsToPrint[lastIndex]; // the most recent word in the list of guesses

    if (wordToCheck !== answer && wordsToPrint.length >= NUM_OF_GUESSES_ALLOWED) {
      setLoss(!false);
      setDisableInput(!false)
    } else if (wordToCheck === answer) {
      setWin(!false);
      setDisableInput(!false)
    } else {
      return;
    }
  }
  React.useEffect(() => {
    checkGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordsToPrint, guessStatuses]);

  return (
    <div>
      {win && (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {wordsToPrint.length} {(wordsToPrint.length === 1) ? 'guess' : 'guesses'}</strong>.
          </p>
          <NewGameButton />
        </div>
      )}
      {loss && (
        <div className='sad banner'>
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          <NewGameButton />
        </div>
      )}
    </div>
  )
};
export default Banner;
