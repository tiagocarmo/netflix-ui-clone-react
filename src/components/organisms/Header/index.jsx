import React, { useState, useEffect } from 'react';
import Logo from '../../atoms/Logo';
import Menu from '../../molecules/Menu';
import * as S from './style';

const Header = () => {
  const [isOnTop, setisOnTop] = useState(true);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setisOnTop(false);
      } else {
        setisOnTop(true);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <S.FixedHeader className={isOnTop ? 'bgTransparent' : 'bgDark'}>
      <S.Main>
        <S.Left>
          <Logo />
          <Menu />
        </S.Left>
        <S.Right />
      </S.Main>
    </S.FixedHeader>
  );
};

export default Header;
