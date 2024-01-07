import React from 'react';

function NewGameButton() {

  const restartGame = () => {
    window.location.reload();
  }
  return (
  <button onClick={restartGame} className='extraBtn'>New Game</button>
  )
}

export default NewGameButton;
