import styled, {css} from 'styled-components';

/**
 * CardContainer
 */
export const CardContainer = styled.div`
  position: relative;
`;

const commonStyles = css`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  cursor: pointer;
  transition: all 0.5s;
`;

export const FrontImg = styled.div`
  ${commonStyles}
  transform: ${props => (props.isFlipped ? 'rotate(0)' : 'rotateY(180deg)')};
`;

export const BackImg = styled.div`
  ${commonStyles}
  transform: ${props => (props.isFlipped ? 'rotateY(180deg)' : 'rotate(360deg)')};
  position: absolute;
  top: 0px;
  left: 0px;
`;

/**
 * BtnContainer
 */
export const BtnContainer = styled.button`
  margin-top: 20px;
  border: none;
  
  background: none;
  letter-spacing: 3px;
  color: #404040;
  padding: 15px;
  text-transform: uppercase;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  
  &:hover {
  cursor: pointer;
  color: #ffffff;
  letter-spacing: 4px;
  background: #404040;
  transition: all 0.3s ease 0s;
  },
`;

export const Container = styled.div`
  text-align: center;
  margin: 20px;
`;

