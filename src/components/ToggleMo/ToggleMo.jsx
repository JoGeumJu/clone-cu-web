import React, { useState } from "react";
import styled from "styled-components";
import "./MenuClick.css";

import { FiChevronDown } from "react-icons/fi";

function ToggleMo(props) {
  // BtnClose Click Event
  const onClickClose = () => {
    props.getIsToggle(false);
  };

  // ToggleMenu Click Event
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const onClick1 = () => {
    if (isOpen1 === false) setIsOpen1(true);
    else if (isOpen1 === true) setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const onClick2 = () => {
    if (isOpen2 === false) setIsOpen2(true);
    else if (isOpen2 === true) setIsOpen2(false);
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const onClick3 = () => {
    if (isOpen1 === false) setIsOpen3(true);
    else if (isOpen3 === true) setIsOpen3(false);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const onClick4 = () => {
    if (isOpen4 === false) setIsOpen4(true);
    else if (isOpen4 === true) setIsOpen4(false);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const onClick5 = () => {
    if (isOpen5 === false) setIsOpen5(true);
    else if (isOpen5 === true) setIsOpen5(false);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen6(false);
  };
  const onClick6 = () => {
    if (isOpen6 === false) setIsOpen6(true);
    else if (isOpen6 === true) setIsOpen6(false);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  return (
    <Wrapper isToggle={props.isToggle}>
      <DivTopbar />
      <InnerWrap>
        <DivLoginBtnClose>
          <DivLogin>
            <LoginIcon src="/images/common/ico_login.png" alt="icon_login" />
            <LoginP>로그인</LoginP>
          </DivLogin>
          <DivBtnClose onClick={onClickClose}>
            <CloseIcon
              src="/images/common/btn_gnb_close.png"
              alt="icon_close"
            />
          </DivBtnClose>
        </DivLoginBtnClose>
        <DivToggleMenu>
          <MenuUl>
            <MenuLi onClick={onClick1}>
              <MenuP>CU소개</MenuP>
              <MenuArrowDown />
              <SubMenu style={isOpen1 ? { display: "flex" } : {}}>
                <SubMenuLi>
                  <SubMenuP>브랜드 스토리</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>디지털 사보</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>CU 갤러리</SubMenuP>
                </SubMenuLi>
              </SubMenu>
            </MenuLi>
            <MenuLi onClick={onClick2}>
              <MenuP>상품·서비스</MenuP>
              <MenuArrowDown />
              <SubMenu style={isOpen2 ? { display: "flex" } : {}}>
                <SubMenuLi>
                  <SubMenuP>전체 상품</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>CU 차별화 상품</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>행사상품</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>생활편의 서비스</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>제휴카드</SubMenuP>
                </SubMenuLi>
              </SubMenu>
            </MenuLi>
            <MenuLi onClick={onClick3}>
              <MenuP>매장안내</MenuP>
              <MenuArrowDown />
            </MenuLi>
            <MenuLi onClick={onClick4}>
              <MenuP>멤버십</MenuP>
              <MenuArrowDown />
              <SubMenu style={isOpen4 ? { display: "flex" } : {}}>
                <SubMenuLi>
                  <SubMenuP>멤버십 소개</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP href="https://www.pocketcu.co.kr" target="_blank">
                    포켓 CU
                  </SubMenuP>
                </SubMenuLi>
              </SubMenu>
            </MenuLi>
            <MenuLi onClick={onClick5}>
              <MenuP>창업·상생</MenuP>
              <MenuArrowDown />
              <SubMenu style={isOpen5 ? { display: "flex" } : {}}>
                <SubMenuLi>
                  <SubMenuP>사업의 이해</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>가맹조건</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>창업 설명회</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>창업 성공기</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>점포물건</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>상생혜택</SubMenuP>
                </SubMenuLi>
              </SubMenu>
            </MenuLi>
            <MenuLi onClick={onClick6}>
              <MenuP>새로운소식</MenuP>
              <MenuArrowDown />
              <SubMenu style={isOpen6 ? { display: "flex" } : {}}>
                <SubMenuLi>
                  <SubMenuP>CU소식</SubMenuP>
                </SubMenuLi>
                <SubMenuLi>
                  <SubMenuP>이거어때</SubMenuP>
                </SubMenuLi>
              </SubMenu>
            </MenuLi>
          </MenuUl>
        </DivToggleMenu>
        <DivCommonMenu>
          <DivAuthSite>
            <DivOwnerSquare>
              <IconOwnerSquare
                src="/images/common/ico_sitelink_type1.png"
                alt="icon_close"
              />
              <POwnerSquare href="http://owner.bgfretail.com" target="_blank">
                점주광장
              </POwnerSquare>
            </DivOwnerSquare>
            <DivOwnerAuth>
              <IconOwnerAuth
                src="/images/common/ico_sitelink_type2.png"
                alt="icon_close"
              />
              <POwnerAuth
                href="https://www.pocketcu.co.kr/auth/owner"
                target="_blank"
              >
                점주인증
              </POwnerAuth>
            </DivOwnerAuth>
            <DivEmpAuth>
              <IconEmpAuth
                src="/images/common/ico_sitelink_type3.png"
                alt="icon_close"
              />
              <PEmpAuth
                href="https://www.pocketcu.co.kr/auth/emp"
                target="_blank"
              >
                임직원인증
              </PEmpAuth>
            </DivEmpAuth>
          </DivAuthSite>
          <DivFooterbar>
            <DivStoreInfo>
              <NameStoreInfo>매장안내</NameStoreInfo>
            </DivStoreInfo>
            <DivCS href="https://cs.bgfretail.com/index.jsp" target="_blank">
              <NameCS>고객센터</NameCS>
              <ContentCS>
                <PCS>1577-8007</PCS>
                <PCS>평일 09:00 ~ 21:00</PCS>
              </ContentCS>
            </DivCS>
          </DivFooterbar>
        </DivCommonMenu>
      </InnerWrap>
    </Wrapper>
  );
}

export default ToggleMo;

const Wrapper = styled.div`
  display: none;
  @media only screen and (max-width: 767px) {
    ${(props) => props.isToggle && "display:flex;"}
    ${(props) => !props.isToggle && "display:none;"}
    position: fixed;
    flex-direction: column;
    z-index: 200;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
`;
// Topbar
const DivTopbar = styled.div`
  display: flex;
  width: 100%;
  height: 3px;
  background-color: #37d243;
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: space-between;
`;
// Login & BtnClose
const DivLoginBtnClose = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  height: 60px;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
`;
const DivLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
const LoginIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;
const LoginP = styled.p`
  font-size: 14px;
  color: #37d243;
  font-weight: 700;
`;
const DivBtnClose = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 10px;
  cursor: pointer;
`;
const CloseIcon = styled.img`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 15px;
  height: 15px;
`;
// ToggleMenu
const DivToggleMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
`;
const MenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style-type: none;
`;
const MenuLi = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.96px;
  color: #000;
  cursor: pointer;
`;
const MenuP = styled.p`
  display: flex;
  height: 68px;
  line-height: 68px;
  justify-items: center;
  vertical-align: middle;
`;
const MenuArrowDown = styled(FiChevronDown)`
  position: absolute;
  width: 36px;
  line-height: 36px;
  height: 36px;
  right: 0px;
  top: 15px;
`;
const SubMenu = styled.ul`
  display: none;
  flex-direction: column;
  height: auto;
  list-style-type: none;
  margin-bottom: 20px;
  margin-left: 20px;
  animation: pulldown 0.4s ease 0s normal 1 none;
`;
const SubMenuLi = styled.li`
  width: 100%;
  height: 32px;
`;
const SubMenuP = styled.p`
  width: 100%;
  height: 100%;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.96px;
  color: #000;
  cursor: pointer;
`;
// [DivCommonMenu]
const DivCommonMenu = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
// AuthSite
const DivAuthSite = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  width: 100%;
  height: 50px;
  align-items: center;
`;
const DivOwnerSquare = styled.a`
  display: flex;
  flex-direction: row;
  width: 33.3%;
  justify-content: center;
  cursor: pointer;
`;
const IconOwnerSquare = styled.img`
  margin-right: 5px;
`;
const POwnerSquare = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #747474;
`;
const DivOwnerAuth = styled.a`
  display: flex;
  flex-direction: row;
  width: 33.3%;
  justify-content: center;
  border-left: 1px solid #c2c2c2;
  border-right: 1px solid #c2c2c2;
  cursor: pointer;
`;
const IconOwnerAuth = styled.img`
  margin-right: 5px;
`;
const POwnerAuth = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #747474;
`;
const DivEmpAuth = styled.a`
  display: flex;
  flex-direction: row;
  width: 33.3%;
  justify-content: center;
  cursor: pointer;
`;
const IconEmpAuth = styled.img`
  margin-right: 5px;
`;
const PEmpAuth = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #747474;
`;
// Footerbar
const DivFooterbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
const DivStoreInfo = styled.a`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90px;
  background: #d3c2f2 url("/images/common/banner_store.png") right bottom
    no-repeat;
  background-size: 375px 90px;
  text-decoration: none;
  cursor: pointer;
`;
const NameStoreInfo = styled.p`
  margin: 35px 0 0 20px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.72px;
`;
const DivCS = styled.a`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90px;
  background: #e8e7fb url("/images/common/banner_customer.png") right bottom
    no-repeat;
  background-size: 375px 90px;
  text-decoration: none;
  cursor: pointer;
`;
const NameCS = styled.p`
  margin: 25px 0 0 20px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.72px;
`;
const ContentCS = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 20px;
`;
const PCS = styled.p`
  color: #000;
  font-size: 15px;
  letter-spacing: -0.6px;
`;
