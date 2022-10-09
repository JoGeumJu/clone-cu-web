import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: auto;
  min-height: 40px;
  // ★내부 설정★
  background: #634094;
  text-align: center;
  // ★행동 설정★
  @media only screen and (max-width:767px) {
    display:none;
  }
`;
const BannerContent = styled.a`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: 40px;
  // ★내부 설정★
  background-color: #634094;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 40px;
  // ★행동 설정★
  &:hover{
    text-decoration:underline;
}
`;

function FixedBanner(props) {
  return (
    // 배너 활성화: display:"none" block으로 바꾸기
    <Wrapper>
      <BannerContent href="#">
        포켓 CU 신규 가입하면 100% 드리는 Welcome 혜택!
      </BannerContent>
    </Wrapper>
  );
}

export default FixedBanner;
