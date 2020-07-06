import React, { useState, useRef, useLayoutEffect } from 'react';

function useDim(el, val) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    let boundingBox = el.current.getBoundingClientRect();
    setWidth(boundingBox.width);
    console.log(boundingBox);
    console.log(boundingBox.width);
  }, [val]);

  return { width };
}

export const MeasureElement = () => {
  const [val, setVal] = useState(2);
  const valEl = useRef(null);

  const { width } = useDim(valEl, val);
  return (
    <>
      <p>Width: {width}</p>
      <div ref={valEl}>{val}</div>
      <button onClick={() => setVal(val * 10)}>10*</button>
    </>
  );
};

export default MeasureElement;
