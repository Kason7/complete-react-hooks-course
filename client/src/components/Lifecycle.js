import React, { useState, useEffect } from 'react';

// Init params
let born = false;

export const Lifecycle = () => {
  const [growth, setGrowth] = useState(0);
  const [heaven, setHeaven] = useState(false);

  // States
  const growMore = () => {
    setGrowth(growth + 1);
  };

  // useEffect on heaven state only (this need to be highest in the file, otherwise condtions wont behave correctly)
  useEffect(() => {
    if (born) {
      document.title = 'Now in heaven';
    }
  }, [heaven]);

  // useEffect on lifecycle "birth"
  useEffect(() => {
    console.log('Lifecycle birth');
  }, []);

  // useEffect on lifecycle "birth and life"
  useEffect(() => {
    console.log('Lifecycle birth and life');
  });

  // useEffect on lifecycle "life"
  useEffect(() => {
    if (born) {
      console.log('Lifecycle life');
    } else {
      born = true;
    }
    // useEffect on lifecycle "death"
    if (growth > 10) {
      console.log('Lifecycle death');
      setHeaven(true);
    }
    // Cleanup function
    return function cleanup() {
      console.log('Cleanup');
    };
  });

  return (
    <div>
      <h2>Use Effect</h2>
      <h3>Growth: {growth}</h3>
      <button onClick={growMore}>Grow More</button>
    </div>
  );
};

export default Lifecycle;
