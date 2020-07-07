import { useEffect, useRef, useDebugValue } from 'react';

export const usePrevious = (value) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  });

  useDebugValue(ref.current > 18 ? 'Too much' : 'Too little');

  return ref.current;
};

export default usePrevious;
