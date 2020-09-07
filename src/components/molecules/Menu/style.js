import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: inline-block;
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
`;
