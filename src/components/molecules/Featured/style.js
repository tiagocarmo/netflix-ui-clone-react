import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 80vh;
  background: linear-gradient(to top, ${props => props.theme.palette.background} 5%, transparent),
    linear-gradient(to right, ${props => props.theme.palette.background} 20%, transparent 100%),
    ${props => props.theme.palette.background} url('https://image.tmdb.org/t/p/original${props => props.backdrop_path}') left top no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  @media(max-width: 992px) {
    display: block;
    background: linear-gradient(to top, ${props => props.theme.palette.background} 5%, transparent),
      linear-gradient(to right, ${props => props.theme.palette.background} 20%, transparent 100%),
      ${props => props.theme.palette.background} url('https://image.tmdb.org/t/p/original${props => props.backdrop_path}') center center no-repeat;
      background-size: cover;
  }
`;

export const Container = styled.div`
  display: block;
  padding: 0 60px;
  @media(max-width: 992px) {
    padding: 80px 24px 0;
  }
`;

export const Title = styled.div`
  font-size: 62px;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0,0,0,.57);
  margin-bottom: 24px;
  color: ${props => props.theme.palette.text};
  @media(max-width: 992px) {
    font-size: 32px;
  }
`;

export const Description = styled.div`
  font-size: 24px;
  color: #999;
  margin-bottom: 36px;
  width: 40vw;
  @media(max-width: 992px) {
    font-size: 24px;
    width: 87vw;
  }
`;

export const Play = styled.button`
  background: #ffffff;
  color: #141414;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  margin-right: 16px;
  padding: 12px 24px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  & svg {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: auto;
  }
  @media(max-width: 992px) {
    min-width: 212px;
    margin-bottom: 16px;
  }
`;

export const MoreInfo = styled.button`
  background: #6d6d6d;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  margin-right: 16px;
  padding: 12px 24px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  & svg {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: auto;
  }
  @media(max-width: 992px) {
    min-width: 212px;
    margin-bottom: 16px;
  }
`;
