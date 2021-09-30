import React from 'react';

export const useInterval = (callback, isNewGame, isGameRunning, duration, delay) => {
  const durationRef = React.useRef(duration);
  const durationIntervalRef = React.useRef({});

  const handler = () => {
    callback(durationRef);
  };
;
  React.useEffect(() => {
    if(isNewGame) durationRef.current = 0;
    const durationInterval = (isNewGame || isGameRunning) && setInterval(handler, delay);
    durationIntervalRef.current = durationInterval;
    return () => {
      clearInterval(durationInterval);
    };
  }, [delay, isNewGame, isGameRunning]);

  return durationIntervalRef;
};
