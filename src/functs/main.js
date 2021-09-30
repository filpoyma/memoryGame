import { cards } from '../consts/main';

export const shuffle = arr => {
  return arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
};

export const createBoard = () =>
  [...cards, ...cards].map((card, i) => ({
    id: `id${i}`,
    imgPath: card,
    isFlipped: false,
    isClickable: true,
    matchId: i < cards.length ? `id${i + cards.length}` : `id${i - cards.length}`,
  }));
