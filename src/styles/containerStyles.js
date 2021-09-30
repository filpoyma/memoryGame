import styled from 'styled-components';

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  box-shadow: 0 0 10px grey;
  padding: 10px;
  border-radius: 6px;
`;

export const GameScreen = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
