import React from 'react';
import { BtnContainer } from '../styles/componentStyles';
import { game } from '../consts/main';

const Button = ({ setGameStatus }) => {
  return <BtnContainer onClick={() => {setGameStatus(game.new)}}>Новая игра</BtnContainer>;
};

export default Button;
