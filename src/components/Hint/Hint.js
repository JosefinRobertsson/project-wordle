import React from 'react';
import HintLogic from '../HintLogic';

function Hint({ wordsToPrint, answer }) {
  const [clickCount, setClickCount] = React.useState(0);
  
  //The functional update of clickCount causes an immediate re-render instead of a scheduled one, which means state changes immediately when the button is clicked.
  const showHint = () =>{
      setClickCount((prevCount) => (prevCount === 0 ? 1 : 0));
  };

  const visibilityTracker = () => { 
    if (clickCount === 1 || wordsToPrint.length >= 1) {
      return 'hidden';
    } else {
      return 'visible';
    }
  }


  return (
    <>
    <button className='extraBtn' onClick={showHint} style={{ visibility: visibilityTracker() }}>I want an easy start</button>

    {clickCount === 1 && 
    <HintLogic answer={answer}
    /> }
    </>
  )

}

export default Hint;
