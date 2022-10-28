import React from "react";
import styled from "styled-components";

import { BsChevronRight } from "react-icons/bs";

function TogglePc(props) {
  // BtnClose Click Event
  const onClickClose = () => {
    props.getIsToggle(false);
  };

  return (
    <Wrapper isToggle={props.isToggle}>
      <DivTopbar />
      <BtnClose onClick={onClickClose}>
        <ImgClose src="/images/common/btn_gnb_close.png" alt="btn_gnb_close" />
      </BtnClose>
      <InnerWrap>
        <LeftDiv>
          <DivMenu>
            <NavMenu>
              <TopNav>
                <Li>
                  <A>CU소개</A>
                  <SubMenu>
                    <SubLi>
                      <SubA>브랜드 스토리</SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>디지털 사보</SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>CU 갤러리</SubA>
                    </SubLi>
                  </SubMenu>
                </Li>
                <Li>
                  <A>상품·서비스</A>
                  <SubMenu>
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
                  </SubMenu>
                </Li>
                <Li>
                  <A>매장안내</A>
                </Li>
                <Li>
                  <A>멤버십</A>
                  <SubMenu>
                    <SubLi>
                      <SubA>멤버십 소개</SubA>
                    </SubLi>
                    <SubLi>
                      <SubA href="https://www.pocketcu.co.kr" target="_blank">
                        포켓 CU
                      </SubA>
                    </SubLi>
                  </SubMenu>
                </Li>
              </TopNav>
              <BottomNav>
                <Li>
                  <A>창업·상생</A>
                  <SubMenu>
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
                  </SubMenu>
                </Li>
                <Li>
                  <A>입점상담</A>
                  <SubMenu>
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
                  </SubMenu>
                </Li>
                <Li>
                  <A>새로운소식</A>
                  <SubMenu>
                    <SubLi>
                      <SubA>CU소식</SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>이거어때</SubA>
                    </SubLi>
                  </SubMenu>
                </Li>
              </BottomNav>
            </NavMenu>
          </DivMenu>
        </LeftDiv>
        <RightDiv>
          <DivLogon>
            <DivLogin>
              <IconLogin src="/images/common/ico_login.png" alt="icon_login" />
              <PLogin>로그인</PLogin>
            </DivLogin>
            <DivSignup>
              <IconSignup src="/images/common/ico_join.png" alt="icon_signup" />
              <PSignup
                href="https://www.pocketcu.co.kr/login?service=http://cu.bgfretail.com"
                target="_blank"
              >
                회원가입
              </PSignup>
            </DivSignup>
          </DivLogon>
          <DivAuthSite>
            <DivOwnerSquare>
              <IconOwnerSquare />
              <POwnerSquare href="http://owner.bgfretail.com" target="_blank">
                점주광장
              </POwnerSquare>
              <ArrowOwnerSquare />
            </DivOwnerSquare>
            <DivOwnerAuth>
              <IconOwnerAuth />
              <POwnerAuth
                href="https://www.pocketcu.co.kr/auth/owner"
                target="_blank"
              >
                점주인증
              </POwnerAuth>
              <ArrowOwnerAuth />
            </DivOwnerAuth>
            <DivEmpAuth>
              <IconEmpAuth />
              <PEmpAuth
                href="https://www.pocketcu.co.kr/auth/emp"
                target="_blank"
              >
                임직원인증
              </PEmpAuth>
              <ArrowEmpAuth />
            </DivEmpAuth>
          </DivAuthSite>
          <DivCS>
            <ACS href="https://cs.bgfretail.com/index.jsp" target="_blank">
              <PCS>고객센터</PCS>
              <ImgCS src="/images/common/img_customer.png" alt="img_cs" />
            </ACS>
          </DivCS>
        </RightDiv>
      </InnerWrap>
    </Wrapper>
  );
}

export default TogglePc;

const Wrapper = styled.div`
  ${(props) => props.isToggle && "display:flex;"}
  ${(props) => !props.isToggle && "display:none;"}
  flex-direction: column;
  position: fixed;
  z-index: 200;
  width: 100%;
  height: 100%;
  background-color: #fff;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
// Topbar
const DivTopbar = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background-color: #37d243;
`;
// BtnClose
const BtnClose = styled.div`
  display: flex;
  position: absolute;
  top: 25px;
  right: 17px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
`;
const ImgClose = styled.img`
  display: flex;
  position: relative;
  width: 24px;
  height: 24px;
`;
const InnerWrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1370px;
  height: auto;
  margin: auto;
  padding: 0 45px;
  justify-content: space-between;
`;
// [LeftDiv]
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 975px;
  @media only screen and (max-width: 1370px) {
    width: 800px;
  }
`;
// Menu
const DivMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const TopNav = styled.ul`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  list-style-type: none;
`;
const BottomNav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;
const Li = styled.li`
  width: 25%;
  height: auto;
  @media only screen and (max-width: 1370px) {
    max-height: 250px;
  }
`;
const A = styled.a`
  font-size: 42px;
  font-weight: 700;
  letter-spacing: -3.5px;
  color: #000;
  cursor: pointer;
  &:hover {
    color: #37d243;
  }
  @media only screen and (max-width: 1370px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 880px) {
    font-size: 24px;
    letter-spacing: -4px;
  }
`;
const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-top: 30px;
  @media only screen and (max-width: 1370px) {
    margin-top: 15px;
  }
`;
const SubLi = styled.li``;
const SubA = styled.a`
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.8px;
  color: #444;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #37d243;
    border-bottom: 1px solid #37d243;
  }
  @media only screen and (max-width: 1370px) {
    font-size: 17px;
    line-height: 34px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 16px;
    line-height: 30px;
  }
  @media only screen and (max-width: 880px) {
    font-size: 15px;
    line-height: 26px;
  }
`;
// [RightDiv]
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
`;
// Logon
const DivLogon = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const DivLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
const IconLogin = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 4px;
`;
const PLogin = styled.p`
  color: #37d243;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.8px;
  @media only screen and (max-width: 1370px) {
    font-size: 17px;
  }
`;
const DivSignup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  &::before {
    content: "";
    margin: 0 8px;
    width: 1px;
    height: 18px;
    background: rgba(0, 0, 0, 0.2);
  }
`;
const IconSignup = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 4px;
`;
const PSignup = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.8px;
  @media only screen and (max-width: 1370px) {
    font-size: 17px;
  }
`;
// AuthSite
const DivAuthSite = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const DivOwnerSquare = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 52px;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  border: solid 1px #c2c2c2;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background: #37d243;
    border: solid 1px #37d243;
  }
`;
const IconOwnerSquare = styled.img`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(0, -50%);
  content: url("/images/common/ico_sitelink_type1.png");
  ${DivOwnerSquare}:hover & {
    content: url("/images/common/ico_sitelink_type1_on.png");
  }
`;
const POwnerSquare = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  ${DivOwnerSquare}:hover & {
    color: #fff;
  }
`;
const ArrowOwnerSquare = styled(BsChevronRight)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(0, -50%);
  color: #747474;
  transition: none;
  ${DivOwnerSquare}:hover & {
    color: #fff;
  }
`;
const DivOwnerAuth = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 52px;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  border: solid 1px #c2c2c2;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background: #37d243;
    border: solid 1px #37d243;
  }
`;
const IconOwnerAuth = styled.img`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(0, -50%);
  content: url("/images/common/ico_sitelink_type2.png");
  ${DivOwnerAuth}:hover & {
    content: url("/images/common/ico_sitelink_type2_on.png");
  }
`;
const POwnerAuth = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  ${DivOwnerSquare}:hover & {
    color: #fff;
  }
`;
const ArrowOwnerAuth = styled(BsChevronRight)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(0, -50%);
  color: #747474;
  transition: none;
  ${DivOwnerAuth}:hover & {
    color: #fff;
  }
`;
const DivEmpAuth = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 52px;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 1px #c2c2c2;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background: #37d243;
    border: solid 1px #37d243;
  }
`;
const IconEmpAuth = styled.img`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(0, -50%);
  content: url("/images/common/ico_sitelink_type3.png");
  ${DivEmpAuth}:hover & {
    content: url("/images/common/ico_sitelink_type3_on.png");
  }
`;
const PEmpAuth = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  ${DivEmpAuth}:hover & {
    color: #fff;
  }
`;
const ArrowEmpAuth = styled(BsChevronRight)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(0, -50%);
  color: #747474;
  transition: none;
  ${DivEmpAuth}:hover & {
    color: #fff;
  }
`;
// CS (customer sevice)
const DivCS = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  width: 100%;
  height: auto;
`;
const ACS = styled.a`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 180px;
  position: relative;
  background-color: #e8e7fb;
  border-radius: 16px;
  cursor: pointer;
`;
const PCS = styled.p`
  position: absolute;
  top: 30px;
  left: 30px;
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.96px;
`;
const ImgCS = styled.img`
  padding: 0;
  margin: 0;
  bottom: 0;
`;
