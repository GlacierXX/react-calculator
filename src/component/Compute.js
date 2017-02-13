import React from 'react';

const Compute = ({ val, handleComputeClick }) => {
    return (
      <div className="compute" onClick={() => handleComputeClick(val)}>
        <span>{val}</span>
      </div>
    );
}

export default Compute;
