import React from 'react';
import './EachButton.scss';

export default function EachButton ({ char, handleClick }) {
  return (
    <button
      className='eachButton__wrapper'
      onClick={() => handleClick(char)}
    >
      {char}
    </button>
  );
};