import React from 'react';

function GuessInput({ guess, setGuess }) {
  
  return (
     <form 
     className='guess-input-wrapper'
     onSubmit={(event) => {
    event.preventDefault(); 
    console.info({ guess });
    setGuess('');}}>
    <label htmlFor='guess-input'>Enter guess:</label>
    <input
    type='text'
    id='guess-input'
    pattern="[A-Za-z]{5}" //accept no less than 5 letters
    maxLength={5}
    value={guess}
    onChange={event => {
      let result = event.target.value;
      let resultCapital = result.toUpperCase(); //change input to capital letter
        setGuess(resultCapital);
    }}
      />
      </form>
    
)}

export default GuessInput;
