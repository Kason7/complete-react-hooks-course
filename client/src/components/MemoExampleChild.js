import React, { useEffect } from 'react';

let renderCount = 0;

export const MemoExampleChild = () => {
  useEffect(() => {
    renderCount++;
  });

  return <div>renderCount: {renderCount}</div>;
};

export default MemoExampleChild;
