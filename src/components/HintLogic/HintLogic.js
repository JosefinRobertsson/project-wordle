import React from 'react';

function HintLogic({ answer }) {
  const [hintLetter, setHintLetter] = React.useState(''); //save the hint in state so it persists between renders
  const [letterIndex, setLetterIndex] = React.useState(0);

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 5); //generate a random number to pick a letter in the answer
    setLetterIndex(randomIndex)
    setHintLetter(answer[randomIndex]);
  }, [answer]);

  return (
    <>
     <p className='guess'>
      {answer.split('').map((letter, index) => (
          <span className='cell' key={index} style={{ backgroundColor: 'rgb(100, 100, 100)', color: 'white' }}>
           {index === letterIndex ? hintLetter : ''}
          </span>
      ))}
      </p>
    </>
  );
}

export default HintLogic;

