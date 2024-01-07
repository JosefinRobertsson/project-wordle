import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner';
import Hint from '../Hint';

function Guess({ answer, wordsToPrint, guessStatuses, setDisableInput }) {

  return (
<>
  <div className='guess-results'>
    <Hint 
    answer={answer} 
    />
    {/*The range-function is used to generate an array of numbers. The range functions decide how many times to map, in order to be able to print all the necessary element for the whole gameboard regardless of how many guesses have been submitted (print empty rows too) */}
  {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
  <p className='guess' key={rowIndex}>
{range(5).map((cellIndex) => {
          const letter = wordsToPrint[rowIndex]?.[cellIndex] ?? ''; //Optional chaining operator (?.). First we check if there is a word in wordsToPrint at the same index as the current rowIndex. If wordsToPrint[rowIndex] is not null or undefined, print the letter at the respective rowIndex and cellIndex. Else, print an empty string
           const status = guessStatuses[rowIndex]?.[cellIndex].status ?? '';
          return (
          <span className={`cell ${status}`} key={cellIndex}> 
              {letter}
            </span>
          );
        })}
  </p>
))}
  </div>;

  <Banner 
  answer={answer}
  wordsToPrint={wordsToPrint}
  guessStatuses={guessStatuses}
  setDisableInput={setDisableInput}/>
  </>
);
      };
      
export default Guess;
