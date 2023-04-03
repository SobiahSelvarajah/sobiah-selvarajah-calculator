import React from 'react';
import './ClearButtons.scss';

const ClearButtons = () => {
  return (
    <div className='clearButtons__wrapper'>
        <button className='clearButtons__clear'>Clear</button>        
        <button className='clearButtons__c'>C</button>
    </div>
  )
}

export default ClearButtons;