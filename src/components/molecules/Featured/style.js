import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 80vh;
  background: linear-gradient(to top, ${props => props.theme.palette.background} 5%, transparent),
    linear-gradient(to right, ${props => props.theme.palette.background} 20%, transparent 100%),
    ${props => props.theme.palette.background} url('https://image.tmdb.org/t/p/original${props => props.image}') left top no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

export const Container = styled.div`
  display: block;
  padding: 0 60px;
`;

export const Title = styled.div`
  font-size: 62px;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0,0,0,.57);
  margin-bottom: 24px;
  color: ${props => props.theme.palette.text}
`;

export const Description = styled.div`
  font-size: 24px;
  color: #999;
  margin-bottom: 36px;
  width: 40vw;
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
`;
