import React, {useState} from 'react';
import * as math from 'mathjs';
import Screen from '../screen/Screen';
import ClearButtons from '../clearButtons/ClearButtons';
import EachButton from '../eachButton/EachButton';
import './Calc.scss';

const Calc = () => {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleInput = (value) => {
        setInput((input) => [...input, value + " "]);
    };

    const clearFunc = () => {
        setInput("");
        setOutput("");
    };

    const cFunc = () => {
        setInput(input.slice(0, input.length - 1));
    };

    const calculateOutput = () => {
        const initialInput = input.join("");
        try {
            setOutput(Number(math.evaluate(initialInput)).toFixed(3));
            setInput("");         
        } catch(error) {
            setOutput("Error");
        }
    };

  return (
    <main className='calc__wrapper'>
        <Screen input={input} output={output}/>
        <ClearButtons handleClear={clearFunc} handleC={cFunc}/>
        <div className='calc__row'>
            <EachButton char="7" handleClick={handleInput}/>
            <EachButton char="8" handleClick={handleInput}/>
            <EachButton char="9" handleClick={handleInput}/>
            <EachButton char="/" handleClick={handleInput}/>
        </div>
        <div className='calc__row'>
            <EachButton char="4" handleClick={handleInput}/>
            <EachButton char="5" handleClick={handleInput}/>
            <EachButton char="6" handleClick={handleInput}/>
            <EachButton char="*" handleClick={handleInput}/>
        </div>
        <div className='calc__row'>
            <EachButton char="1" handleClick={handleInput}/>
            <EachButton char="2" handleClick={handleInput}/>
            <EachButton char="3" handleClick={handleInput}/>
            <EachButton char="+" handleClick={handleInput}/>
        </div>
        <div className='calc__row'>
            <EachButton char="0" handleClick={handleInput}/>
            <EachButton char="." handleClick={handleInput}/>
            <EachButton char="=" handleClick={calculateOutput}/>
            <EachButton char="-" handleClick={handleInput}/>
        </div>
    </main>
  );
};

export default Calc;