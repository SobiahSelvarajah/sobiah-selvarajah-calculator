import React from 'react';
import './EachButton.scss';

const EachButton = ({ char,handleClick }) => {
  return (
    <button
      className='eachButton__wrapper'
      onClick={() => handleClick(char)}
    >
      {char}
    </button>
  )
}

export default EachButton;