import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  margin:0;
  padding:0;
  border:0;
  width: 100%;
  height: 120px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  // ★행동 설정★
`;

function Section(props) {
  return <Wrapper>섹션입니다~</Wrapper>;
}

export default Section;
