import React from 'react';
import './Screen.scss';

const Screen = () => {
  return (
    <div className='screen__wrapper'>
        <section className='screen__output'>
            <h1 className='screen__outputText'>
                Hello
            </h1>
        </section>
        <section className='screen__calculation'>
            <h4 className='screen__calculationText'>
                It's me
            </h4>
        </section>
    </div>
  )
}

export default Screen;