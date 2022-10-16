import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: 36px;
  // ★내부 설정★
  justify-content: flex-end;
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const Ul = styled.ul`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  margin-right: 20px;
  // ★내부 설정★
  list-style-type: none;
  // ★행동 설정★
`;
const Li = styled.li`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  padding: 0 10px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 36px;
  // ★행동 설정★
`;
const LiAfter = styled.li`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  padding: 0 10px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 36px;
  // ★행동 설정★
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    margin-right:71px;
    width: 1px;
    height: 12px;
    background: #555555;
  }
`;
const A = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  text-decoration: none;
  color: #555;
  font-size: 14px;
  // ★행동 설정★
  &:hover {
    text-decoration: underline;
  }
`;

function HeaderMenuUtil(props) {
  return (
    <Wrapper className="menu_util">
      <Ul>
        <Li>
          <A href="">로그인</A>
        </Li>
        <LiAfter>
          <A href="https://www.pocketcu.co.kr/auth/owner" target="_blank">점주인증</A>
        </LiAfter>
        <LiAfter>
          <A href="http://owner.bgfretail.com">점주광장</A>
        </LiAfter>
      </Ul>
    </Wrapper>
  );
}

export default HeaderMenuUtil;
