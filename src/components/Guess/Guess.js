import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner';

function Guess({ answer, wordsToPrint, guessStatuses, setDisableInput }) {

  return (
<>
  <div className='guess-results'>
    {range(NUM_OF_GUESSES_ALLOWED).map((row, index) => (
      <p className='guess' key={index}>
        {range(5).map((cell, cellIndex) => {
          const status = guessStatuses[index] && wordsToPrint[index] && wordsToPrint[index][cellIndex] ? guessStatuses[index][cellIndex].status : '';
          const letter = wordsToPrint[index] && wordsToPrint[index][cellIndex] ? wordsToPrint[index][cellIndex] : ''
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
  )
}

export default Guess;


  /*The range-function is used to generate an array of numbers. For each number in the outer range-function, we create NUM_OF_GUESSES_ALLOWED p-tags. The inner range-function is given a fixed start-argument of 5, and thus with map we render 5 span elements within each paragraph. Then to determine if a letter should be printed in a given span, we use a ternary expression. First we check if there is a word in wordsToPrint on the same index as the current p-tag. If yes, we print the letter that has that p-index and that cellindex inside the span ( So for example the first word would have the index 0 in wordsToPrint, and be printed in the spans in the paragraph with the index 0. Then each letter in the word on index 0 will be printed in the span with the corresponding index).  */
