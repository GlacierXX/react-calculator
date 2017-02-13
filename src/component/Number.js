import React from 'react';

const Number = ({ val, handleNumberClick }) => {
    let className = val === '0'? 'number double': 'number';
    return (
      <div className={className} onClick={() => handleNumberClick(val)}>
        <span>{val}</span>
      </div>
    );
}

export default Number;
