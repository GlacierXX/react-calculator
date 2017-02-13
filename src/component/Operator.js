import React from 'react';

const Operator = ({ val, handleOperatorClick }) => {
    return (
      <div className="operator" onClick={() => handleOperatorClick(val)}>
        <span>{val}</span>
      </div>
    );
}

export default Operator;
