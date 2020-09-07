import React from 'react';

import * as S from './style';

const ASSETS_URL = 'https://image.tmdb.org/t/p/w400';

const ListItem = ({ item, size }) => {
  return (
    <>
      <S.Img
        src={`${ASSETS_URL}${item.poster_path}`}
        alt={item.name}
        size={size}
      />
    </>
  );
};

export default ListItem;
