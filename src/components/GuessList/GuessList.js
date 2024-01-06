import React from 'react';

function GuessList({ guessList }) {
  console.log("GL:", guessList)

  return (
  <div className='guess-results'>
   {guessList.map((word) => {
    const key = Math.random();
    console.log("Key:", key);
return <p className='guess' key={key}>{word}</p>;
   })}
  </div>
  );
}

export default GuessList;
