import React, { useState, useEffect } from 'react';

const initXY = {
  x: null,
  y: null,
};

export const Timer = () => {
  const [time, setTime] = useState(Date);
  const [xy, setXY] = useState(initXY);

  useEffect(() => {
    let handle = setInterval(() => {
      setTime(Date);
    }, 1000);

    // The return is used to end the lifecycle of the function/component
    return () => {
      clearInterval(handle);
    };
  });

  const mouseMoveHandle = (event) => {
    setXY({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandle);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandle);
    };
  });

  return (
    <div>
      <h2>Use Effect 2</h2>
      <p>Date and Time: {time}</p>
      <h2>Use Effect 3</h2>
      <p>x: {xy.x}</p>
      <p>y: {xy.y}</p>
    </div>
  );
};

export default Timer;
