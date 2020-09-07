import React from 'react';
import * as S from './style';

const IconPlaySVG = () => (<svg viewBox='0 0 24 24'><path d='M6 4l15 8-15 8z' fill='currentColor'></path></svg>);
const IconInfoSVG = () => (<svg viewBox='0 0 24 24'><path d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z' fill='currentColor'></path></svg>);

const Featured = ({ item }) => {
  const description = (item && item.overview && item.overview.length > 199) ? `${item.overview.substr(0, 199)}...` : item.overview;
  return (
    <section>
      <S.Background image={item.backdrop_path}>
        <S.Container>
          <S.Title>{item.name}</S.Title>
          <S.Description>{description}</S.Description>
          <div>
            <S.Play> <IconPlaySVG /> Assistir</S.Play>
            <S.MoreInfo> <IconInfoSVG /> Mais informações</S.MoreInfo>
          </div>
        </S.Container>
      </S.Background>
    </section>
  );
};

export default Featured;
