import React from 'react';
import Template from '../../templates/RegularText';
import * as S from './style';

const NotFound = () => {
  return (
    <Template>
      <S.Container>
        <S.Title>Você se perdeu?</S.Title>
        <p>Infelizmente, não localizamos essa página. <span role='img' aria-label='Sadface'>😟</span><br /> Você encontra muitos outros títulos na página inicial.</p>
        <S.LinkHome href='/'>Página inicial da Netflix</S.LinkHome>
      </S.Container>
    </Template>
  );
};

export default NotFound;
