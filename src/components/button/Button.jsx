import React from 'react';
import './Button.scss';

const Button = ({char}) => {
  return (
    <button className='button__wrapper'>{char}</button>
  )
}

export default Button;