import React from 'react';

function GuessInput({ guessList, setGuessList }) {
  const [guess, setGuess] = React.useState('') //state for the word guessed by the user

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.info({ guess });
    const nextList = [...guessList, guess]; //create new array with the old words + the new submit
    setGuessList(nextList); //set guessList to be the new array
    setGuess(''); // clear input field
    console.info({ nextList })
    console.info({ guessList })
    ;}
  
  return (
     <form 
     className='guess-input-wrapper'
     onSubmit= {handleSubmit}>
    <label htmlFor='guess-input'>Enter guess:</label>
    <input
    type='text'
    id='guess-input'
    pattern="[A-Za-z]{5}" //accept no less than 5 letters
    maxLength={5}
    value={guess}
    onChange={event => {
      let result = event.target.value.replace(/[^A-Za-z]/g, ''); // Don't allow non-letter characters
      let resultCapital = result.toUpperCase(); //change input to capital letter
      setGuess(resultCapital);
    }}
      />
      </form>
)}

export default GuessInput;
