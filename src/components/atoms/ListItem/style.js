import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  max-width: ${props => props.size}px;
  height: auto;
  transition: scale 0.4s;
  transform: scale(0.9);
  &:hover {
    transform: scale(1);
  }
`;
