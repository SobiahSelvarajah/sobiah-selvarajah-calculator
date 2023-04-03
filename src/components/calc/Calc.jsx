import React, {useState} from 'react';
import Screen from '../screen/Screen';
import ClearButtons from '../clearButtons/ClearButtons';
import Button from '../button/Button';
import './Calc.scss';

const Calc = () => {

    const [input, setInput] = useState("hi");
    const [output, setOutput] = useState("bye");

  return (
    <main className='calc__wrapper'>
        <Screen input={input} output={output}/>
        <ClearButtons />
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