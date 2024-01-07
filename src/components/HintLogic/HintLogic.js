import React from 'react';

function HintLogic({ answer }) {
  const [hintLetter, setHintLetter] = React.useState('');
  const [letterIndex, setLetterIndex] = React.useState(0);

  console.log( answer )
  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 5);
    setLetterIndex(randomIndex)
    setHintLetter(answer[randomIndex]);
  }, [answer]);

  return (
    <>
     <p className='guess'>
      {answer.split('').map((letter, index) => (
          <span className='cell' key={index}>
           {index === letterIndex ? hintLetter : ''}
          </span>
      ))}
      </p>
    </>
  );
}

export default HintLogic;

