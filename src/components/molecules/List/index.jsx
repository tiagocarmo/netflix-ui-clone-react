import React from 'react';
import ListItem from '../../atoms/ListItem';

import * as S from './style';

const LIST_ITEM_SIZE = 200;

const List = ({ name, list }) => {
  return (
    <>
      {name && list && list.length > 0
        &&
        <section>
          <S.Title>{name}</S.Title>
          <S.RowContainer>
            <S.RowContent size={list.length * LIST_ITEM_SIZE}>
              {list && list.map((value, key) => (
                <ListItem key={key} item={value} size={LIST_ITEM_SIZE} />
              ))}
            </S.RowContent>
          </S.RowContainer>
        </section>
      }
    </>
  );
};

export default List;
