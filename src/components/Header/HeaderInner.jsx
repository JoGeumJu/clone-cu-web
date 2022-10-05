import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  height: 104px;
  padding: 0 30px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  text-align: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    padding: 0 20px;
  }
  @media only screen and (max-width: 860px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
    padding: 0px;
    min-width: auto;
  }
`;
const HeaderLogo = styled.h1`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 860px) {
    padding: 0 20px;
  }
`;
const ALogo = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 860px) {
    padding: 20px 0px;
  }
`;
const ImgHeaderLogo = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 860px) {
    width: 95px;
  }
`;
const NavHeaderMenu = styled.nav`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  margin: 0 auto;
  // ★내부 설정★
  justify-content: space-around;
  list-style-type: none;
  // ★행동 설정★

  @media only screen and (max-width: 860px) {
    margin: 0px;
  }
`;
const Ul = styled.ul`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  // ★행동 설정★
  @media only screen and (max-width: 860px) {
    justify-content: flex-start;
  }
`;
const Li = styled.li`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 150px;
  margin: 0px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  text-align: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width: auto;
  }
  @media only screen and (max-width: 860px) {
    justify-content: left;
  }
`;
const LiDisappear = styled.li`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 150px;
  margin: 0px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  text-align: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width: auto;
  }
  @media only screen and (max-width: 860px) {
    display:none;
  }
`;
const A = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding-top: 38px;
  padding-bottom: 38px;
  // ★내부 설정★
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.8px;
  text-align: center;
  // ★행동 설정★
  &:hover {
    color: #37d243;
  }
  @media only screen and (max-width: 1370px) {
    padding: 38px 12px 38px;
    font-size: 18px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 38px 12px 38px;
    font-size: 17px;
  }
  @media only screen and (max-width: 860px) {
    padding: 14px 10px;
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
const SubUl = styled.ul`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  list-style-type: none;
  // ★행동 설정★
`;
const SubLi = styled.li`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const SubA = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const HeaderLangMenu = styled.div`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  margin: 0 19px;
  height: 100%;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  text-align: center;
  // ★행동 설정★
  @media only screen and (max-width: 1024px) {
    margin: 0px;
  }
  @media only screen and (max-width: 860px) {
    display: none;
  }
`;
const BtnLangMenu = styled.button`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  min-width: 60px;
  height: 100%;
  // ★내부 설정★
  background-color: rgba(0, 0, 0, 0);
  justify-content: center;
  align-items: center;
  // ★행동 설정★
`;
const DivLang = styled.div`
  // ★레이아웃 설정★
  display: inline-flex;
  // ★박스 크기 및 여백 설정★
  height: 100%;
  padding-top: 3px;
  // ★내부 설정★
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  text-align: center;
  // ★행동 설정★
`;
const ImgLang = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding: 0;
  margin-left: 3px;
  border: 0;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 12px;
  height: auto;
  // ★행동 설정★
`;
const SubUlLang = styled.ul`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  list-style-type: none;
  // ★행동 설정★
`;
const SubLiLang = styled.li`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const HeaderToggleMenu = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 860px) {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
const BtnToggleMenu = styled.button`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  background-color: rgba(0, 0, 0, 0);
  // ★행동 설정★
`;
const ImgToggleMenu = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding-top: 3px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 860px) {
    width: 20px;
    height: auto;
  }
`;

function HeaderInner(props) {
  return (
    <Wrapper className="inner_wrap">
      <HeaderLogo>
        <ALogo href="">
          <ImgHeaderLogo
            src={process.env.PUBLIC_URL + "/images/common/logo.png"}
            alt="CU로고"
          ></ImgHeaderLogo>
        </ALogo>
      </HeaderLogo>
      <NavHeaderMenu>
        <Ul>
          <Li>
            <A href="#">CU소개</A>
          </Li>
          <Li>
            <A href="#">상품·서비스</A>
          </Li>
          <Li>
            <A href="#">매장안내</A>
          </Li>
          <Li>
            <A href="#">멤버십</A>
          </Li>
          <Li>
            <A href="#">창업·상생</A>
          </Li>
          <LiDisappear>
            <A href="#">입점상담</A>
          </LiDisappear>
          <Li>
            <A href="#">새로운소식</A>
          </Li>
        </Ul>
      </NavHeaderMenu>
      <HeaderLangMenu>
        <BtnLangMenu>
          <DivLang>KR</DivLang>
          <ImgLang
            src={
              process.env.PUBLIC_URL + "/images/common/btn_lang_menu_ico.png"
            }
            alt="언어메뉴버튼"
          />
          <SubUlLang>
            <SubLiLang></SubLiLang>
          </SubUlLang>
        </BtnLangMenu>
      </HeaderLangMenu>
      <HeaderToggleMenu>
        <BtnToggleMenu>
          <ImgToggleMenu
            src={process.env.PUBLIC_URL + "/images/common/btn_menu_ico.png"}
            alt="토글메뉴버튼"
          />
        </BtnToggleMenu>
      </HeaderToggleMenu>
    </Wrapper>
  );
}

export default HeaderInner;
