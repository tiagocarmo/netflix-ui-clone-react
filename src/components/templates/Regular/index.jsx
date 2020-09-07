import React from 'react';
import Header from '../../organisms/Header';
import * as S from './style';

const Regular = ({ children }) => {
  return (
    <S.Background>
      <Header />
      <S.Content>
        {children}
      </S.Content>
    </S.Background>
  );
};

export default Regular;
