import React from 'react';
import HintLogic from '../HintLogic';

function Hint({ answer }) {
  const [clickCount, setClickCount] = React.useState(0);

  const showHint = () =>{

      setClickCount((prevCount) => (prevCount === 0 ? 1 : 0));
  };

  return (
    <>
    <button className='extraBtn' onClick={showHint} style={{ visibility: clickCount === 0 ? 'visible' : 'hidden' }}>Let's make it easier</button>
    {clickCount === 1 && 
    <HintLogic answer={answer}
    /> }
    </>
  )

}

export default Hint;
