import React, {useState} from 'react';
import Screen from '../screen/Screen';
import ClearButtons from '../clearButtons/ClearButtons';
import Button from '../button/Button';
import './Calc.scss';

const Calc = () => {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleOutput = (value) => {
        setInput((input) => [...input, value + " "]);
    };

  return (
    <main className='calc__wrapper'>
        <Screen input={input} output={output}/>
        <ClearButtons />
        <div className='calc__row'>
            <Button char="7" handleClick={handleOutput}/>
            <Button char="8" handleClick={handleOutput}/>
            <Button char="9" handleClick={handleOutput}/>
            <Button char="/" handleClick={handleOutput}/>
        </div>
        <div className='calc__row'>
            <Button char="4" handleClick={handleOutput}/>
            <Button char="5" handleClick={handleOutput}/>
            <Button char="6" handleClick={handleOutput}/>
            <Button char="x" handleClick={handleOutput}/>
        </div>
        <div className='calc__row'>
            <Button char="1" handleClick={handleOutput}/>
            <Button char="2" handleClick={handleOutput}/>
            <Button char="3" handleClick={handleOutput}/>
            <Button char="+" handleClick={handleOutput}/>
        </div>
        <div className='calc__row'>
            <Button char="0" handleClick={handleOutput}/>
            <Button char="." handleClick={handleOutput}/>
            <Button char="=" handleClick={handleOutput}/>
            <Button char="-" handleClick={handleOutput}/>
        </div>
    </main>
  )
}

export default Calc;