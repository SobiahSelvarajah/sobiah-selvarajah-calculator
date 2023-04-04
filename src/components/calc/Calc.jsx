import React, {useState} from 'react';
import Screen from '../screen/Screen';
import ClearButtons from '../clearButtons/ClearButtons';
import EachButton from '../eachButton/EachButton';
import './Calc.scss';

const Calc = () => {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleOutput = (value) => {
        setInput((input) => [...input, value + " "]);
    };

    const clearFunc = () => {
        setInput("");
        setOutput("");
    };

    const cFunc = () => {
        setInput(input.slice(0, input.length - 1));
    };

  return (
    <main className='calc__wrapper'>
        <Screen input={input} output={output}/>
        <ClearButtons handleClear={clearFunc} handleC={cFunc}/>
        <div className='calc__row'>
            <EachButton char="7" handleClick={handleOutput}/>
            <EachButton char="8" handleClick={handleOutput}/>
            <EachButton char="9" handleClick={handleOutput}/>
            <EachButton char="/" handleClick={handleOutput}/>
        </div>
        <div className='calc__row'>
            <EachButton char="4" handleClick={handleOutput}/>
            <EachButton char="5" handleClick={handleOutput}/>
            <EachButton char="6" handleClick={handleOutput}/>
            <EachButton char="x" handleClick={handleOutput}/>
        </div>
        <div className='calc__row'>
            <EachButton char="1" handleClick={handleOutput}/>
            <EachButton char="2" handleClick={handleOutput}/>
            <EachButton char="3" handleClick={handleOutput}/>
            <EachButton char="+" handleClick={handleOutput}/>
        </div>
        <div className='calc__row'>
            <EachButton char="0" handleClick={handleOutput}/>
            <EachButton char="." handleClick={handleOutput}/>
            <EachButton char="=" handleClick={handleOutput}/>
            <EachButton char="-" handleClick={handleOutput}/>
        </div>
    </main>
  );
};

export default Calc;