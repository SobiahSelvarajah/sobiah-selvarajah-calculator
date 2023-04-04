import React from 'react';
import Heading from './components/heading/Heading';
import Calc from './components/calc/Calc';
import './App.scss';

const App = () => {
  return (
    <section className='app__container'>
      <Heading />
      <Calc />
    </section>
  );
};

export default App;