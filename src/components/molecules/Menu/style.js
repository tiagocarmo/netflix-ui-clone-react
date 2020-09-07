import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: inline-block;
  @media(max-width: 992px) {
    display: block;
    padding-bottom: 16px;
  }
`;

export const ListItem = styled.li`
  padding-left: 18px;
  display: inline-block;
  a {
    font-size: 13px;
    letter-spacing: 0.8px;
    text-decoration: none;
    color: ${props => props.theme.palette.text};
    transition: opacity .1s;
    &:hover {
      opacity: 0.8;
    }
  }
  @media(max-width: 992px) {
    padding: 12px 24px 0 0;
    a {
      font-size: 14px;
    }
  }
`;
