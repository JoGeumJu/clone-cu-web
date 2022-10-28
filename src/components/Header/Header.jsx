import React from "react";
import styled from "styled-components";

import HeaderMenuUtil from "./HeaderMenuUtil";
import HeaderInner from "./HeaderInner";

const Wrapper = styled.header`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  z-index: 100;
  // ★박스 크기 및 여백 설정★
  margin: 0;
  padding: 0;
  border: 0;
  min-height: 140px;
  // ★내부 설정★
  border-bottom: 1px solid #dbe1dc;
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    min-height: 104px;
  }
`;

function Header(props) {
  const getIsToggle = props.getIsToggle;

  return (
    <Wrapper id="header">
      <HeaderMenuUtil />
      <HeaderInner getIsToggle={getIsToggle} />
    </Wrapper>
  );
}

export default Header;
