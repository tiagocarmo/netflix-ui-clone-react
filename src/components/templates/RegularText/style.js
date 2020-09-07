import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${props => props.theme.palette.background};
  color: ${props => props.theme.palette.text};
`;

export const Content = styled.div`
  padding: 68px 60px 100px;
`;
