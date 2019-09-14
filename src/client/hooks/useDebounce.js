import React, {useEffect, useRef} from 'react';

const useDebounce = (fn, delay, value) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
    else {
      if (!delay) return;

      const handler = setTimeout(fn.bind(null, value), delay);
      return () => {
        clearTimeout(handler);
      };
    }
  }, [fn, delay, value]);
};

export default useDebounce;
