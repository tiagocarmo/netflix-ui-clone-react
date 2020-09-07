import styled from 'styled-components';

export const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  transition: background 0.4s;
  z-index: 1020;
  &.bgTransparent {
    background: transparent;
  }
  &.bgDark {
    background: #141414;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  height: 68px;
  align-items: center;
  background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%, rgba(0,0,0,0));
`;

export const Left = styled.div`
  margin-left: 60px;
  @media(max-wdith: 992px) {
    margin-left: 4%;
  }
`;

export const Right = styled.div`
  margin-right: 60px;
  @media(max-wdith: 992px) {
    margin-right: 4%;
  }
`;
