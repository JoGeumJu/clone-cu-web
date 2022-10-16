import React from "react";
import styled from "styled-components";

import FooterPc from "../components/FooterPc/FooterPc";
import FooterMo from "../components/FooterMo/FooterMo";

const Wrapper = styled.footer`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  // ★내부 설정★
  // ★행동 설정★
`;

function Footer(props) {
  return (
    <Wrapper id="wrap" className="footer">
      <FooterPc />
      <FooterMo />
    </Wrapper>
  );
}

export default Footer;
