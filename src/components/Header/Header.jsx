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
  // ★내부 설정★
  border-bottom: 1px solid #dbe1dc;
  // ★행동 설정★
`;

function Header(props) {
  return (
    <Wrapper id="header">
      <HeaderMenuUtil />
      <HeaderInner />
    </Wrapper>
  );
}

export default Header;
