import React from 'react';
import Button from '../button/Button';

const Calc = () => {
  return (
    <main className='calc__wrapper'>
        <div className='calc__row'>
            <Button char="7"/>
            <Button char="8"/>
            <Button char="9"/>
            <Button char="/"/>
        </div>
        <div className='calc__row'>
            <Button char="4"/>
            <Button char="5"/>
            <Button char="6"/>
            <Button char="x"/>
        </div>
        <div className='calc__row'>
            <Button char="1"/>
            <Button char="2"/>
            <Button char="3"/>
            <Button char="+"/>
        </div>
        <div className='calc__row'>
            <Button char="0"/>
            <Button char="."/>
            <Button char="="/>
            <Button char="-"/>
        </div>
    </main>
  )
}

export default Calc;