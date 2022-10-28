import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./MenuHover.css";

function HeaderInner(props) {
  // [Scroll]
  // scroll 작동 기본 height 설정
  let media767 = matchMedia("screen and (max-width: 767px)");
  const [heightFixedBanner, setHeightFixedBanner] = useState(0); // fiedBanner 유(40)무(0)
  const [heightMenuUtil, setHeightMenuUtil] = useState(36);
  const [heightMenuInner, setHeightMenuInner] = useState(104);
  // scroll 상태, 값 설정
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDown, setIsDown] = useState(true);
  const updateScroll = () => {
    if (media767.matches === true) {
      setHeightFixedBanner(0);
      setHeightMenuInner(104);
      setHeightMenuUtil(55);
    } else {
      setHeightFixedBanner(40); // fiedBanner 유(40)무(0)
      setHeightMenuInner(104);
      setHeightMenuUtil(36);
    }
    if (window.scrollY >= scrollPosition) {
      setIsDown(true);
    } else if (window.scrollY < scrollPosition) {
      setIsDown(false);
    }
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  // scroll 지정

  // LangMenu Click Event
  const [visibleLang, setVisibleLang] = useState("none");
  const onClickLangMenu = () => {
    if (visibleLang === "none") {
      setVisibleLang("flex");
    } else if (visibleLang === "flex") {
      setVisibleLang("none");
    }
  };

  // ToggleMenu Click Event
  const onClickToggleMenu = () => {
    props.getIsToggle(true);
  };

  return (
    <Wrapper
      isMobile={media767.matches}
      isScroll={scrollPosition >= heightMenuUtil + heightFixedBanner}
      isDown={isDown}
    >
      <HeaderLogo
        isMobile={media767.matches}
        isScroll={scrollPosition >= heightMenuUtil + heightFixedBanner}
        isDown={isDown}
      >
        <ALogo href="">
          <ImgHeaderLogo
            src={"/images/common/logo.png"}
            alt="cu_logo"
          ></ImgHeaderLogo>
        </ALogo>
      </HeaderLogo>
      <NavHeaderMenu>
        <Ul>
          <Li className="depth">
            <A href="#">CU소개</A>
            <SubUl className="sub_depth">
              <SubLi>
                <SubA>브랜드 스토리</SubA>
              </SubLi>
              <SubLi>
                <SubA>디지털 사보</SubA>
              </SubLi>
              <SubLi>
                <SubA>CU 갤러리</SubA>
              </SubLi>
            </SubUl>
          </Li>
          <Li className="depth">
            <A href="#">상품·서비스</A>
            <SubUl className="sub_depth">
              <SubLi>
                <SubA>전체 상품</SubA>
              </SubLi>
              <SubLi>
                <SubA>CU 차별화 상품</SubA>
              </SubLi>
              <SubLi>
                <SubA>행사상품</SubA>
              </SubLi>
              <SubLi>
                <SubA>생활편의 서비스</SubA>
              </SubLi>
              <SubLi>
                <SubA>제휴카드</SubA>
              </SubLi>
            </SubUl>
          </Li>
          <Li className="depth">
            <A href="#">매장안내</A>
          </Li>
          <Li className="depth">
            <A href="#">멤버십</A>
            <SubUl className="sub_depth">
              <SubLi>
                <SubA>멤버십 소개</SubA>
              </SubLi>
              <SubLi>
                <SubA href="https://pocketcu.co.kr" target="_blank">
                  포켓 CU
                </SubA>
              </SubLi>
            </SubUl>
          </Li>
          <Li className="depth">
            <A href="#">창업·상생</A>
            <SubUl className="sub_depth">
              <SubLi>
                <SubA>사업의 이해</SubA>
              </SubLi>
              <SubLi>
                <SubA>가맹조건</SubA>
              </SubLi>
              <SubLi>
                <SubA>창업 설명회</SubA>
              </SubLi>
              <SubLi>
                <SubA>창업 성공기</SubA>
              </SubLi>
              <SubLi>
                <SubA>점포물건</SubA>
              </SubLi>
              <SubLi>
                <SubA>상생혜택</SubA>
              </SubLi>
            </SubUl>
          </Li>
          <LiDisappear className="depth">
            <A href="#">입점상담</A>
            <SubUl className="sub_depth">
              <SubLi>
                <SubA>입점 프로세스</SubA>
              </SubLi>
              <SubLi>
                <SubA>기준 안내</SubA>
              </SubLi>
              <SubLi>
                <SubA>입점 상담 신청</SubA>
              </SubLi>
              <SubLi>
                <SubA
                  href="https://www.bgf.co.kr/esg/winwin/vision/"
                  target="_blank"
                >
                  동반 성장
                </SubA>
              </SubLi>
            </SubUl>
          </LiDisappear>
          <Li className="depth">
            <A href="#">새로운소식</A>
            <SubUl className="sub_depth">
              <SubLi>
                <SubA>CU소식</SubA>
              </SubLi>
              <SubLi>
                <SubA>이거 어때</SubA>
              </SubLi>
            </SubUl>
          </Li>
        </Ul>
      </NavHeaderMenu>
      <HeaderLangMenu>
        <BtnLangMenu onClick={onClickLangMenu}>
          <DivLang>KR</DivLang>
          <ImgLang
            src={"/images/common/btn_lang_menu_ico.png"}
            alt="btn_lang_menu"
          />
        </BtnLangMenu>
        <SubUlLang style={{ display: `${visibleLang}` }}>
          <SubLiLang>
            <SubALang style={{ color: "#fff" }}>KR</SubALang>
          </SubLiLang>
          <SubLiLang>
            <SubALang>EN</SubALang>
          </SubLiLang>
          <SubLiLang>
            <SubALang>CN</SubALang>
          </SubLiLang>
        </SubUlLang>
      </HeaderLangMenu>
      <HeaderToggleMenu
        isMobile={media767.matches}
        isScroll={scrollPosition >= heightMenuUtil + heightFixedBanner}
        isDown={isDown}
      >
        <BtnToggleMenu onClick={onClickToggleMenu}>
          <ImgToggleMenu
            src={"/images/common/btn_menu_ico.png"}
            alt="btn_toggle_menu"
          />
        </BtnToggleMenu>
      </HeaderToggleMenu>
    </Wrapper>
  );
}

export default HeaderInner;

const Wrapper = styled.div`
  height: 104px;
  display: flex;
  ${(props) =>
    props.isScroll &&
    "position: fixed; top: 0; border-bottom:1px solid #dbe1dc;"}
  ${(props) =>
    props.isMobile &&
    props.isScroll &&
    props.isDown &&
    "position: fixed; top: 0; height:49px; border-bottom:1px solid #dbe1dc;"}
  // ★레이아웃 설정★
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  padding: 0 30px;
  width: 100%;
  // ★내부 설정★
  background-color: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    padding: 0 20px;
  }
  @media only screen and (max-width: 767px) {
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
  ${(props) =>
    props.isMobile && props.isScroll && props.isDown && "display: none;"}
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    padding: 0 20px;
  }
`;
const ALogo = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    padding: 20px 0;
  }
`;
const ImgHeaderLogo = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    width: 95px;
    padding-top: 5px;
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

  @media only screen and (max-width: 767px) {
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
  @media only screen and (max-width: 767px) {
    justify-content: flex-start;
  }
`;
const Li = styled.li`
  // ★레이아웃 설정★
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 150px;
  margin: 0px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  text-align: center;
  // ★행동 설정★
  &:hover {
    color: #37d243;
  }
  @media only screen and (max-width: 1370px) {
    &:hover {
      color: #000;
    }
    width: auto;
  }
  @media only screen and (max-width: 767px) {
    justify-content: left;
    &:hover {
      color: #000;
    }
  }
`;
const LiDisappear = styled.li`
  // ★레이아웃 설정★
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 150px;
  margin: 0px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  text-align: center;
  // ★행동 설정★
  &:hover {
    color: #37d243;
  }
  @media only screen and (max-width: 1370px) {
    &:hover {
      color: #000;
    }
    width: auto;
  }
  @media only screen and (max-width: 870px) {
    display: none;
  }
`;
const A = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding: 38px 0px;
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
    @media only screen and (max-width: 1370px) {
      &:hover {
        color: #000;
      }
      width: auto;
    }
  }
  @media only screen and (max-width: 1024px) {
    padding: 38px 12px 38px;
    font-size: 17px;
  }
  @media only screen and (max-width: 870px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 767px) {
    padding: 14px 10px;
    font-size: 16px;
    letter-spacing: -0.64px;
    line-height: 1.25;
  }
  @media only screen and (max-width: 501px) {
    font-size: 15px;
    letter-spacing: -0.7px;
  }
`;
const SubUl = styled.ul`
  // ★레이아웃 설정★
  display: none;
  position: absolute;
  z-index: 120;
  // ★박스 크기 및 여백 설정★
  padding: 25px 20px;
  width: inherit;
  top: 60px;
  // ★내부 설정★
  left: 50%;
  transform: translateX(-50%);
  border-radius: 16px;
  background-color: #37d243;
  list-style-type: none;
  // ★행동 설정★
`;
const SubLi = styled.li`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  text-align: left;
  // ★행동 설정★
`;
const SubA = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.78;
  letter-spacing: -0.72px;
  white-space: nowrap;
  cursor: pointer;
  // ★행동 설정★
  &:hover {
    border-bottom: 1px solid #fff;
  }
`;
const HeaderLangMenu = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  position: relative;
  // ★박스 크기 및 여백 설정★
  margin: 0 19px;
  height: 100%;
  width: 60px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  text-align: center;
  // ★행동 설정★
  @media only screen and (max-width: 1024px) {
    margin: 0px;
  }
  @media only screen and (max-width: 767px) {
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
  cursor: pointer;
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
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 120;
  // ★박스 크기 및 여백 설정★
  left: 50%;
  top: 70px;
  transform: translateX(-50%);
  width: inherit;
  padding: 20px 0px;
  // ★내부 설정★
  background-color: #000000;
  color: #fff;
  list-style-type: none;
  border-radius: 16px;
  // ★행동 설정★
  animation: pulldown 0.4s ease 0s normal 1 none;
`;
const SubLiLang = styled.li`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const SubALang = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  color: #999;
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  line-height: 1.375;
  letter-spacing: -0.64px;
  cursor: pointer;
  // ★행동 설정★
  &:hover {
    color: #fff;
  }
`;
const HeaderToggleMenu = styled.div`
  ${(props) =>
    props.isMobile && props.isScroll && props.isDown && "display: none;"}
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    position: absolute;
    top: 17px;
    right: 20px;
  }
`;
const BtnToggleMenu = styled.button`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
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
  @media only screen and (max-width: 767px) {
    width: 20px;
    height: auto;
  }
`;
