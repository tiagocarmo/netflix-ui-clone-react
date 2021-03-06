import styled from 'styled-components';

export const Title = styled.div`
  line-height: 1.25vw;
  font-size: 1.4vw;
  color: ${props => props.theme.palette.title};
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0,0,0,.57);
  margin: 8px 0 16px;
  @media(max-width: 992px) {
    font-size: 24px;
  }
`;

export const RowContainer = styled.div`
  overflow-x: hidden;
  padding-bottom: 16px;
  @media(max-width: 992px) {
    overflow-x: auto;
    padding-bottom: 8px;
    margin-bottom: 8px;
  }
`;

export const RowContent = styled.div`
  width: ${props => props.size}px;
`;
