import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer, FrontImg, BackImg } from '../styles/componentStyles';
import Icon from './Icon';
import { backCard } from '../consts/main';

const Card = ({ card, handleCardClick }) => {
  console.log('Card>>>:');
  return (
    <CardContainer
      onClick={() => {
        card.isClickable ? handleCardClick(card) : null;
      }}
    >
      <FrontImg isFlipped={card.isFlipped}>
        <Icon name={card.imgPath} size={100} />
      </FrontImg>
      <BackImg isFlipped={card.isFlipped}>
        <Icon name={backCard} size={100} />
      </BackImg>
    </CardContainer>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    isFlipped: PropTypes.bool,
    isClickable: PropTypes.bool,
    matchId: PropTypes.string,
    handleCardClick: PropTypes.func,
  }),
};

export default React.memo(Card);
