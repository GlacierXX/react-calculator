import React from 'react';
import Number from '../component/Number';

const NumberContainer = ({ handleNumberClick }) => {
  return (
    <div className="number-container">
      <Number val="7" handleNumberClick={handleNumberClick}/>
      <Number val="8" handleNumberClick={handleNumberClick}/>
      <Number val="9" handleNumberClick={handleNumberClick}/>
      <Number val="4" handleNumberClick={handleNumberClick}/>
      <Number val="5" handleNumberClick={handleNumberClick}/>
      <Number val="6" handleNumberClick={handleNumberClick}/>
      <Number val="1" handleNumberClick={handleNumberClick}/>
      <Number val="2" handleNumberClick={handleNumberClick}/>
      <Number val="3" handleNumberClick={handleNumberClick}/>
      <Number val="0" handleNumberClick={handleNumberClick}/>
      <Number val="." handleNumberClick={handleNumberClick}/>
    </div>
  )
}

export default NumberContainer;
