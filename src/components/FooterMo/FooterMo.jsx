import React from "react";

import styled from "styled-components";
import "./Select.css";

import { AiOutlinePlus } from "react-icons/ai";

const Wrapper = styled.section`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  padding: 60px 20px;
  width: 100%;
  height: auto;
  // ★내부 설정★
  background: #f0f0f0;
  color: #787878;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    display: none;
  }
  @media only screen and (max-width: 767px) {
    padding: 40px 20px 60px;
  }
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  justify-content: space-between;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
// [CUInfo]
const DivCUInfo = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: auto;
  padding-right: 20px;
  // ★내부 설정★
  // ★행동 설정★
`;
// CULogo
const DivCULogo = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding-bottom: 30.8px;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    padding-bottom: 29.8px;
    margin-bottom: 160px;
  }
`;
const ACULogo = styled.a`
  display: flex;
  width: 100px;
  height: 21.2px;
`;
const ImgCULogo = styled.img`
  display: flex;
  width: 100%;
`;
// Address
const DivAddress = styled.address`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    padding: 30px 0 12px;
  }
`;
const PAddress = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.64px;
  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
// Tel
const DivTel = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const PTel = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: -0.56px;
`;
// SNS
const DivSNS = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding-top: 20px;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const AFacebook = styled.a`
  padding-right: 15px;
`;
const IconFacebook = styled.img``;
const ATwitter = styled.a`
  padding-right: 15px;
`;
const IconTwitter = styled.img``;
const ABlog = styled.a`
  padding-right: 15px;
`;
const IconBlog = styled.img``;
// [QuickMenu]
const DivQuickMenu = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const TitleQuickMenu = styled.strong`
  color: #8059ea;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.88;
`;
const NavQuickMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-size: 15px;
  line-height: 2.13;
  letter-spacing: -0.6px;
`;
const NavRight = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 42px 0 0;
  list-style-type: none;
`;
const NavLeft = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 42px 0 0;
  list-style-type: none;
`;
const LiQuickMenu = styled.li``;
const AQuickMenu = styled.a`
  text-decoration: none;
`;
const AStrongQuickMenu = styled.a`
  font-weight: 700;
  color: #000;
  text-decoration: none;
`;
// [FamilySite]
const DivFamilySite = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const TitleFamilySite = styled.strong`
  color: #8059ea;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.88;
`;
const NavFamilySite = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-size: 15px;
  line-height: 2.13;
  letter-spacing: -0.6px;
`;
const LiFamilySite = styled.li``;
const AFamilySite = styled.a`
  text-decoration: none;
`;
// [MobileNavMenu]
const DivMoMenu = styled.div`
  display: none;
  @media only screen and (max-width: 767px) {
    display: flex;
    position: absolute;
    width: 100%;
    top: 51px;
  }
`;
const NavMoMenu = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  font-size: 15px;
  line-height: 2.13;
  letter-spacing: -0.6px;
`;
const UlLeft = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  list-style-type: none;
`;
const UlRight = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  list-style-type: none;
`;
const LiMoMenu = styled.li``;
const AMoMenu = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
const AStrongMoMenu = styled.a`
  font-weight: 700;
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;
// [SelectFamilySite]
const DivSelectFamilySite = styled.div`
  display: none;
  @media only screen and (max-width: 767px) {
    display: flex;
    position: relative;
  }
`;
const SelectFamilySite = styled.select`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 47px;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  line-height: 47px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 2px solid #000;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
const OptionFamilySite = styled.option``;
const IconSelectFamilySite = styled(AiOutlinePlus)`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 50%;
  right: 0px;
  transform: translate(0, -50%);
  color: #000;
`;

function FooterMo(props) {
  return (
    <Wrapper>
      <InnerWrap>
        <DivCUInfo>
          <DivCULogo>
            <ACULogo href="">
              <ImgCULogo
                src="/images/common/footer_logo.png"
                alt="cu_logo_gray"
              />
            </ACULogo>
          </DivCULogo>
          <DivAddress>
            <PAddress>BGF리테일 서울시 강남구 테헤란로 405(삼성동)</PAddress>
            <PAddress>COPYRIGHT © BGFretail ALL RIGHT RESERVED.</PAddress>
          </DivAddress>
          <DivTel>
            <PTel>TEL: 1577-8007</PTel>
          </DivTel>
          <DivSNS>
            <AFacebook
              href="https://www.facebook.com/CU.BGFretail.cvs/"
              target="_blank"
            >
              <IconFacebook
                src="/images/common/footer_facebook.png"
                alt="facebook"
              />
            </AFacebook>
            <ATwitter href="https://twitter.com/BGFretail" target="_blank">
              <IconTwitter
                src="/images/common/footer_twitter.png"
                alt="twitter"
              />
            </ATwitter>
            <ABlog href="http://blog.bgfcu.com" target="_blank">
              <IconBlog src="/images/common/footer_blog.png" alt="blog" />
            </ABlog>
          </DivSNS>
        </DivCUInfo>
        <DivQuickMenu>
          <TitleQuickMenu>Quick Menu</TitleQuickMenu>
          <NavQuickMenu>
            <NavLeft>
              <LiQuickMenu>
                <AQuickMenu href="" target="_blank">
                  입점상담
                </AQuickMenu>
              </LiQuickMenu>
              <LiQuickMenu>
                <AQuickMenu href="" target="_blank">
                  매장찾기
                </AQuickMenu>
              </LiQuickMenu>
              <LiQuickMenu>
                <AQuickMenu href="http://mkr.bgfretail.com/" target="_blank">
                  발주 및 배송데이터
                </AQuickMenu>
              </LiQuickMenu>
              <LiQuickMenu>
                <AQuickMenu
                  href="http://etax.bgfretail.com/index.jsp"
                  target="_blank"
                >
                  전자세금계산서
                </AQuickMenu>
              </LiQuickMenu>
            </NavLeft>
            <NavRight>
              <LiQuickMenu>
                <AQuickMenu
                  href="https://www.pocketcu.co.kr/auth/owner"
                  target="_blank"
                >
                  점주인증
                </AQuickMenu>
              </LiQuickMenu>
              <LiQuickMenu>
                <AQuickMenu
                  href="https://www.pocketcu.co.kr/auth/emp"
                  target="_blank"
                >
                  임직원인증
                </AQuickMenu>
              </LiQuickMenu>
              <LiQuickMenu>
                <AStrongQuickMenu
                  href="https://www.pocketcu.co.kr/policy/policy/pc/privacyPolicy"
                  target="_blank"
                >
                  개인정보처리방침
                </AStrongQuickMenu>
              </LiQuickMenu>
            </NavRight>
          </NavQuickMenu>
        </DivQuickMenu>
        <DivFamilySite>
          <TitleFamilySite>Family Site</TitleFamilySite>
          <NavFamilySite>
            <NavLeft>
              <LiFamilySite>
                <AFamilySite href="http://www.bgf.co.kr" target="_blank">
                  BGF
                </AFamilySite>
              </LiFamilySite>
              <LiFamilySite>
                <AFamilySite href="http://www.bgfretail.com/" target="_blank">
                  BGF리테일
                </AFamilySite>
              </LiFamilySite>
              <LiFamilySite>
                <AFamilySite href="https://www.pocketcu.co.kr" target="_blank">
                  포켓CU
                </AFamilySite>
              </LiFamilySite>
              <LiFamilySite>
                <AFamilySite href="http://www.bgfnetworks.com/" target="_blank">
                  BGF네트웍스
                </AFamilySite>
              </LiFamilySite>
            </NavLeft>
            <NavRight>
              <LiFamilySite>
                <AFamilySite href="http://www.bgfhumannet.com/" target="_blank">
                  BGF휴먼넷
                </AFamilySite>
              </LiFamilySite>
              <LiFamilySite>
                <AFamilySite href="http://www.bgflogis.com/" target="_blank">
                  BGF로지스
                </AFamilySite>
              </LiFamilySite>
              <LiFamilySite>
                <AFamilySite href="http://www.cupost.co.kr" target="_blank">
                  BGF포스트
                </AFamilySite>
              </LiFamilySite>
            </NavRight>
          </NavFamilySite>
        </DivFamilySite>
        {/* 767px부터 보이는 nav */}
        <DivMoMenu>
          <NavMoMenu>
            <UlLeft>
              <LiMoMenu>
                <AMoMenu>거래상담</AMoMenu>
              </LiMoMenu>
              <LiMoMenu>
                <AMoMenu>매장찾기</AMoMenu>
              </LiMoMenu>
              <LiMoMenu>
                <AMoMenu
                  href="http://etax.bgfretail.com/index.jsp"
                  target="_blank"
                >
                  전자세금계산서
                </AMoMenu>
              </LiMoMenu>
              <LiMoMenu>
                <AMoMenu
                  href="https://www.pocketcu.co.kr/auth/emp"
                  target="_blank"
                >
                  임직원인증
                </AMoMenu>
              </LiMoMenu>
              <LiMoMenu>
                <AMoMenu
                  href="https://www.pocketcu.co.kr/auth/semp"
                  target="_blank"
                >
                  계열사인증
                </AMoMenu>
              </LiMoMenu>
            </UlLeft>
            <UlRight>
              <LiMoMenu>
                <AMoMenu href="http://mkr.bgfretail.com/" target="_blank">
                  발주 및 배송데이터
                </AMoMenu>
              </LiMoMenu>
              <LiMoMenu>
                <AStrongMoMenu
                  href="https://www.pocketcu.co.kr/policy/policy/privacyPolicy"
                  target="_blank"
                >
                  개인정보처리방침
                </AStrongMoMenu>
              </LiMoMenu>
              <LiMoMenu>
                <AMoMenu
                  href="https://www.pocketcu.co.kr/auth/owner"
                  target="_blank"
                >
                  점주인증
                </AMoMenu>
              </LiMoMenu>
              <LiMoMenu>
                <AMoMenu
                  href="https://www.pocketcu.co.kr/auth/memp"
                  target="_blank"
                >
                  지주사인증
                </AMoMenu>
              </LiMoMenu>
            </UlRight>
          </NavMoMenu>
        </DivMoMenu>
        {/* 767px부터 보이는 select */}
        <DivSelectFamilySite>
          <SelectFamilySite title="관련사이트">
            <OptionFamilySite value="https://www.bgf.co.kr">
              관련사이트
            </OptionFamilySite>
            <OptionFamilySite value="http://www.bgf.co.kr/m">
              BGF
            </OptionFamilySite>
            <OptionFamilySite value="http://www.bgfretail.com/companyM/main.do">
              BGF리테일
            </OptionFamilySite>
            <OptionFamilySite value="https://www.pocketcu.co.kr">
              포켓CU
            </OptionFamilySite>
            <OptionFamilySite value="http://www.bgfnetworks.com/">
              BGF네트웍스
            </OptionFamilySite>
            <OptionFamilySite value="http://www.bgfhumannet.com/">
              BGF휴먼넷
            </OptionFamilySite>
            <OptionFamilySite value="http://www.bgflogis.com/">
              BGF로지스
            </OptionFamilySite>
            <OptionFamilySite value="https://www.cupost.co.kr/postbox/main.cupost">
              BGF포스트
            </OptionFamilySite>
          </SelectFamilySite>
          <IconSelectFamilySite />
        </DivSelectFamilySite>
      </InnerWrap>
    </Wrapper>
  );
}

export default FooterMo;
