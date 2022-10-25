import React from "react";
import styled from "styled-components";

import FixedBanner from "../components/FixedBanner/FixedBanner";

const Wrapper = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  // ★내부 설정★
  // ★행동 설정★
`;

function Main(props) {
  return (
    <Wrapper id="wrap" className="main">
      <FixedBanner />
    </Wrapper>
  );
}

export default Main;
