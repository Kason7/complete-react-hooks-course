import React, { useState, useMemo } from 'react';

// Import components
import MemoExampleChild from './MemoExampleChild';

export const MemoExample = () => {
  const [i, setI] = useState(0);

  const incrementHandler = () => {
    setI(i + 1);
  };

  const memoChild = useMemo(() => {
    return <MemoExampleChild />;
  }, []);
  const memoChildonlyI = useMemo(() => {
    return <MemoExampleChild />;
  }, [i]);

  return (
    <div>
      <h2>Use Memo Hook</h2>
      <p>i: {i} </p>
      <button onClick={incrementHandler}>Increase</button>
      <MemoExampleChild />
      <div>Child with Memo Hook: {memoChild}</div>
      <div>Child with Memo Hook only I: {memoChildonlyI}</div>
    </div>
  );
};

export default MemoExample;
