import React from 'react';
import './Screen.scss';

const Screen = ({ input, output }) => {
  return (
    <div className='screen__wrapper'>
        <section className='screen__output'>
            <h1 className='screen__outputText'>
                {output}
            </h1>
        </section>
        <section className='screen__input'>
            <h4 className='screen__inputText'>
                {input}
            </h4>
        </section>
    </div>
  )
}

export default Screen;