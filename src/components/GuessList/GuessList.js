import React from 'react';

function GuessList({ guessList }) {
  console.log("GL:", guessList)

  return (
  <div className='guess-results'>
   {guessList.map((guess) => {
return <p className='guest' key={Math.random()}>{guess}</p>;
   })}
  </div>
  );
}

export default GuessList;
