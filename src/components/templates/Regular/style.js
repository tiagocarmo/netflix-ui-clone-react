import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${props => props.theme.palette.background};
  color: ${props => props.theme.palette.text};
`;

export const Content = styled.div`
  padding: 0 60px 100px;
  @media(max-width: 992px) {
    padding: 0 24px 40px;
  }
`;
