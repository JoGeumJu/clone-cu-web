import React from "react";
import styled from "styled-components";
import "./Input.css";

const Wrapper = styled.section`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: auto;
  margin-bottom: 160px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    margin-bottom: 140px;
  }
  @media only screen and (max-width: 767px) {
    order: 8;
    margin-bottom: 86px;
  }
`;
const DivInnerWrap = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  width: 1280px;
  height: auto;
  // ★내부 설정★
  justify-content: center;
  align-items:center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width:100%:
    max-width: 100%;
    padding:0 20px;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
// SearchCUStore
const SearchCUStore = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 50%;
  padding: 53px 0;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width: 50%;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
    padding: 0 0 40px;
  }
`;
const TextCUStore = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  width: auto;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;
const TitleText = styled.h2`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  margin-bottom: 10px;
  // ★내부 설정★
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -2.56px;
  line-height: 1.39;
  text-align: center;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 36px;
    letter-spacing: -1.12px;
    line-height: 1.29;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    letter-spacing: -1.12px;
    margin-bottom: 10px;
  }
`;
const EmCU = styled.em`
  width: 95px;
  height: 48px;
  margin: 0 10px;
  background: url(/images/main/ico_cu.png) center bottom no-repeat;
  @media only screen and (max-width: 1370px) {
    width: 63px;
    height: 32px;
    margin: 0 8px;
    background-size: contain;
  }
  @media only screen and (max-width: 767px) {
    width: 39.5px;
    height: 20px;
  }
`;
const SubTitleText = styled.p`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1.28px;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.64px;
    line-height: 1.2;
  }
  @media only screen and (max-width: 767px) {
    font-size: 16px;
  }
`;
const DivSearch = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  padding: 12px 0;
  margin-top: 60px;
  width: 508px;
  // ★내부 설정★
  border-bottom: 6px solid #000;
  justify-content: space-between;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width: auto;
    max-width: 400px;
    border-bottom: 3px solid #000;
    margin-top: 40px;
  }
  @media only screen and (max-width: 767px) {
    margin-top: 11px;
    width: 100%;
    max-width: none;
  }
`;
const InputSearch = styled.input`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  height: 29px;
  // ★내부 설정★
  flex-grow: 1;
  background-color: #fff;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.96px;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    height: 19px;
    font-size: 18px;
    letter-spacing: -0.6px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 15px;
  }
`;
const ASearchIcon = styled.a`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  width: 28px;
  height: 28px;
  // ★내부 설정★
  cursor: pointer;
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    width: 24px;
    height: 24px;
  }
`;
const ImgSearchIcon = styled.img`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  width: 28px;
  height: 28px;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    width: 24px;
    height: 24px;
  }
`;
// CUStore
const DivCUStore = styled.div`
  display: flex;
  width: 50%;
  @media only screen and (max-width: 767px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const ImgCUStore = styled.img`
  width: 100%;
  @media only screen and (max-width: 767px) {
    width: 304px;
  }
`;

function SectionSearchCU(props) {
  return (
    <Wrapper>
      <DivInnerWrap>
        <SearchCUStore>
          <TextCUStore>
            <TitleText>
              우리동네
              <EmCU />
              어디있지?
            </TitleText>
            <SubTitleText>근처에 있는 CU를 찾아보세요!</SubTitleText>
          </TextCUStore>
          <DivSearch>
            <InputSearch
              type="text"
              placeholder="점포명 또는 OO동을 입력해보세요."
            ></InputSearch>
            <ASearchIcon>
              <ImgSearchIcon
                src="/images/main/ico_search.png"
                alt="search_icon"
              />
            </ASearchIcon>
          </DivSearch>
        </SearchCUStore>
        <DivCUStore>
          <ImgCUStore src="/images/main/img_cu_store.png" alt="cu_store" />
        </DivCUStore>
      </DivInnerWrap>
    </Wrapper>
  );
}

export default SectionSearchCU;
