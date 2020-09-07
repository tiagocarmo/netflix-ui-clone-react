import React from 'react';
import * as S from './style';

const Menu = () => {
  return (
    <S.List>
      <S.ListItem><a href='/browser'>Início</a></S.ListItem>
      <S.ListItem><a href='/browser/series'>Séries</a></S.ListItem>
      <S.ListItem><a href='/browser/movies'>Filmes</a></S.ListItem>
      <S.ListItem><a href='/browser/latest'>Mais recentes</a></S.ListItem>
      <S.ListItem><a href='/browser/my-list'>Minha lista</a></S.ListItem>
    </S.List>
  );
};

export default Menu;
