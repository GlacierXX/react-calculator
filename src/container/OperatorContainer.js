import React from 'react';
import Number from '../component/Operator';

const OperatorContainer = ({ handleOperatorClick }) => {
  return (
    <div className="operator-container">
      <Number val="C" handleOperatorClick={ handleOperatorClick }/>
      <Number val="+/-" handleOperatorClick={ handleOperatorClick }/>
      <Number val="%" handleOperatorClick={ handleOperatorClick }/>
    </div>
  )
}

export default OperatorContainer;
