import React from 'react';
import { game } from '../consts/main';
import { useInterval } from '../hooks/timer';
import { Container } from '../styles/componentStyles';

const Timer = ({ gameStatus }) => {
  const isNewGame = gameStatus === game.new;
  const isGameRunning = gameStatus === game.running;

  const [duration, setDuration] = React.useState(0);

  const durationTimerIdRef = useInterval(
    durationRef => {
      durationRef.current++;
      setDuration(durationRef.current);
    },
    isNewGame,
    isGameRunning,
    duration,
    1000,
  );
  React.useEffect(() => {
    console.log('file-game status :', gameStatus);
    if (gameStatus === game.new || gameStatus === game.end) clearInterval(durationTimerIdRef.current);
    if (gameStatus === game.new) setDuration(0);
  }, [gameStatus]);

  const min = duration / 60;
  const sec = duration % 60;

  return <Container>{Math.floor(min) + ' : ' + (sec ? (sec < 10 ? '0' + sec : sec) : '00')}</Container>;
};

export default Timer;
