import React from 'react';
import './ClearButtons.scss';

export default function ClearButtons ({ handleClear, handleC }) {
  return (
    <div className='clearButtons__wrapper'>
      <button
        className='clearButtons__clear'
        onClick={handleClear}
      >
        Clear
      </button>
      <button
        className='clearButtons__c'
        onClick={handleC}
      >
        C
      </button>
    </div>
  );
};