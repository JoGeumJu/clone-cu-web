import React from "react";
import styled from "styled-components";

import { HiChevronRight } from "react-icons/hi";

import "./AHover.css";

const Wrapper = styled.section`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: auto;
  margin-bottom: 206px;
  // ★내부 설정★
  align-items: center;
  justify-content: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    margin-bottom: 140px;
  }
  @media only screen and (max-width: 767px) {
    order: 9;
    margin-bottom: 0px;
  }
`;
const InnerWrap = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  max-width: 1280px;
  margin: 0 10px;
  // ★내부 설정★
  justify-content: space-between;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width: 100%;
    max-width: none;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    margin: 0 20px;
  }
`;
// Franchise
const WrapFranchise = styled.div`
  @media only screen and (max-width: 1370px) {
    display: flex;
    position: relative;
    width: 50%;
    margin: 0 10px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;
const DivFranchise = styled.a`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  width: 630px;
  height: 260px;
  padding: 50px 60px;
  // ★내부 설정★
  justify-content: space-between;
  background: #ceeef8 url("/images/main/info_bnr01.png") no-repeat;
  border-radius: 16px;
  text-decoration: none;
  cursor: pointer;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    &:hover {
      background-image: url(/images/main/info_bnr01.png),
        linear-gradient(67deg, #50e2c4 7%, #4f69ec);
    }
  }
  @media only screen and (max-width: 1370px) {
    width: 100%;
    height: 195px;
    background-position: right bottom !important;
    background-size: contain !important;
    padding: 30px 35px;
  }
  @media only screen and (max-width: 767px) {
    height: 130px;
    padding: 30px 20px;
    border-radius: 12px;
  }
`;
const DivFCText = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const TitleFCText = styled.h2`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  font-size: 36px;
  font-weight: 700;
  line-height: 1.39;
  margin-bottom: 5px;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    ${DivFranchise}:hover & {
      color: #fff;
      transition: none;
    }
  }
  @media only screen and (max-width: 1370px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 1;
    margin-bottom: 15px;
  }
`;
const SubTitleFCText = styled.p`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -0.88px;
  line-height: 1.45;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    ${DivFranchise}:hover & {
      color: #fff;
      transition: none;
    }
  }
  @media only screen and (max-width: 1370px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 14px;
    letter-spacing: -0.56px;
    line-height: 1.57;
  }
`;
const DivFCArrow = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const LengFCArrow = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  margin-bottom: 6px;
  width: 26px;
  // ★내부 설정★
  border-bottom: 4px solid #000;
  animation: toleft 0.4s ease 0s normal 1 none;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    ${DivFranchise}:hover & {
      width: 106px;
      border-bottom: 4px solid #fff;
      animation: toright 0.4s ease 0s normal 1 none;
    }
  }
  @media only screen and (max-width: 1370px) {
    border-bottom: 3px solid #000;
  }
`;
const ImgFCArrow = styled(HiChevronRight)`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 35px;
  height: 35px;
  // ★내부 설정★
  transform: translate(-18px, 9px);
  transition: none;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    ${DivFranchise}:hover & {
      color: #fff;
      transition: none;
    }
  }
  @media only screen and (max-width: 1370px) {
    transform: translate(-15px, 6.5px);
    width: 28px;
    height: 28px;
  }
`;
// SeviceCenter
const WrapSeviceCenter = styled.div`
  @media only screen and (max-width: 1370px) {
    display: flex;
    position: relative;
    width: 50%;
    margin: 0 10px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
    margin-top: 12px;
  }
`;
const DivSeviceCenter = styled.a`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  width: 630px;
  height: 260px;
  padding: 50px 60px;
  // ★내부 설정★
  justify-content: space-between;
  background: #dcdafc url("/images/main/info_bnr02.png") no-repeat;
  border-radius: 16px;
  text-decoration: none;
  cursor: pointer;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    &:hover {
      background-image: url(/images/main/info_bnr02.png),
        linear-gradient(67deg, #9262f3 7%, #f276d6);
    }
  }
  @media only screen and (max-width: 1370px) {
    width: 100%;
    height: 195px;
    background-position: right bottom !important;
    background-size: contain !important;
    padding: 30px 35px;
  }
  @media only screen and (max-width: 767px) {
    height: 130px;
    padding: 30px 20px;
    border-radius: 12px;
  }
`;
const DivSCText = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const TitleSCText = styled.h2`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  font-size: 36px;
  font-weight: 700;
  line-height: 1.39;
  margin-bottom: 5px;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    ${DivSeviceCenter}:hover & {
      color: #fff;
      transition: none;
    }
  }
  @media only screen and (max-width: 1370px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 1;
    margin-bottom: 15px;
  }
`;
const SubTitleSCText = styled.p`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -0.88px;
  line-height: 1.45;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    ${DivSeviceCenter}:hover & {
      color: #fff;
      transition: none;
    }
  }
  @media only screen and (max-width: 1370px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 14px;
    letter-spacing: -0.56px;
    line-height: 1.57;
  }
`;
const DivSCArrow = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const LengSCArrow = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  margin-bottom: 6px;
  width: 26px;
  // ★내부 설정★
  border-bottom: 4px solid #000;
  animation: toleft 0.4s ease 0s normal 1 none;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    ${DivSeviceCenter}:hover & {
      width: 106px;
      border-bottom: 4px solid #fff;
      animation: toright 0.4s ease 0s normal 1 none;
    }
  }
  @media only screen and (max-width: 1370px) {
    border-bottom: 3px solid #000;
  }
`;
const ImgSCArrow = styled(HiChevronRight)`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 35px;
  height: 35px;
  // ★내부 설정★
  transform: translate(-18px, 9px);
  transition: none;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    ${DivSeviceCenter}:hover & {
      color: #fff;
      transition: none;
    }
  }
  @media only screen and (max-width: 1370px) {
    transform: translate(-15px, 6.5px);
    width: 28px;
    height: 28px;
  }
`;

function SectionInfoBanner(props) {
  return (
    <Wrapper>
      <InnerWrap>
        <WrapFranchise>
          <DivFranchise>
            <DivFCText>
              <TitleFCText>창업안내</TitleFCText>
              <SubTitleFCText>
                점주님들의 성공을
                <br />
                최우선으로 생각하는
              </SubTitleFCText>
            </DivFCText>
            <DivFCArrow>
              <LengFCArrow />
              <ImgFCArrow />
            </DivFCArrow>
          </DivFranchise>
        </WrapFranchise>
        <WrapSeviceCenter>
          <DivSeviceCenter
            href="https://cs.bgfretail.com/index.jsp"
            target="_blank"
          >
            <DivSCText>
              <TitleSCText>고객센터</TitleSCText>
              <SubTitleSCText>
                상품문의, 창업상담 무엇을
                <br />
                도와드릴까요?
              </SubTitleSCText>
            </DivSCText>
            <DivSCArrow>
              <LengSCArrow />
              <ImgSCArrow />
            </DivSCArrow>
          </DivSeviceCenter>
        </WrapSeviceCenter>
      </InnerWrap>
    </Wrapper>
  );
}

export default SectionInfoBanner;
