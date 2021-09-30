import React from 'react';
import { Container } from '../styles/componentStyles';
import { game } from '../consts/main';

const Title = ({ gameStatus }) => {
  const title = gameStatus => {
    switch (gameStatus) {
      case game.ready:
      case game.new:
        return 'Клик на карточку для старта...';
      case game.running:
        return 'В игре...';
      case game.end:
        return 'Игра окончена!';
    }
  };
  return <Container>{title(gameStatus)}</Container>;
};

export default Title;
