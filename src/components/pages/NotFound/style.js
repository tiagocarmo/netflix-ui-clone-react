import styled from 'styled-components';

export const Title = styled.div`
  font-size: 62px;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0,0,0,.57);
  margin-bottom: 24px;
`;

export const Container = styled.div`
  height: calc(100vh - 68px - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
`;

export const LinkHome = styled.a`
  margin-top: 24px;
  border-radius: 4px;
  padding: 8px 24px;
  text-decoration: none;
  font-weight: bold;
  background-color: ${props => props.theme.palette.cta.primary.background};
  color: ${props => props.theme.palette.cta.primary.text};
  font-size: 16px;
  line-height: 24px;
  transition: opacity .1s;
  &:hover {
    opacity: 0.8;
  }
`;
