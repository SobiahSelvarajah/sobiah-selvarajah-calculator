import React from 'react';
import './Button.scss';

const Button = ({ char,handleClick }) => {
  return (
    <button
      className='button__wrapper'
      onClick={() => handleClick(char)}
    >
      {char}
    </button>
  )
}

export default Button;