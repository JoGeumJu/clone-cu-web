import React from "react";
import styled from "styled-components";
import "./Input.css";

const Wrapper = styled.section`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: auto;
  margin-bottom: 235px;
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    margin-bottom: 155px;
  }
  @media only screen and (max-width: 767px) {
    order: 6;
    margin-bottom: 80px;
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
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width:100%:
    max-width: 100%;
    padding:0 20px;
    overflow:visible;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
// SearchNowNeed
const SearchNowNeed = styled.div`
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
    padding: 0 0 20px;
  }
`;
const TextNowNeed = styled.div`
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
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 36px;
    letter-spacing: -1.12px;
    line-height: 1.29;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    letter-spacing: -0.4px;
    line-height: 1.36;
    margin-bottom: 10px;
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
    display: none;
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
`;
const ImgSearchIcon = styled.img`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  width: 28px;
  height: 28px;
  // ★내부 설정★
  // ★행동 설정★
`;
// SelectNowNeed
const SelectNowNeed = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 50%;
  height: auto;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 375px;
    height: 240px;
    margin: 0 auto;
  }
`;
const ACategory1 = styled.a`
  display: flex;
  position: absolute;
  top: 0px;
  left: 89px;
  padding: 13px 31px 12px 30px;
  align-items: center;
  background-color: #313842;
  height: 84px;
  border-radius: 42px 42px 0 42px;
  box-shadow: 10px 30px 20px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;
  @media only screen and (min-width: 1371px) {
    &:hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 1370px) {
    height: 65px;
    padding: 13px 25px 12px 20px;
  }
  @media only screen and (max-width: 767px) {
    top: 0px;
    left: 70px;
    height: 50px;
    border-raidus: 25px 25px 0 25px;
    padding: 7px 17px 8px 16px;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.12);
  }
`;
const TextCategory1 = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  @media only screen and (max-width: 1370px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
const ImgCategory1 = styled.img`
  @media only screen and (max-width: 767px) {
    width: 36px;
    height: auto;
  }
`;
const ACategory2 = styled.a`
  display: flex;
  position: absolute;
  top: 100px;
  left: 149px;
  padding: 17px 31px 16px;
  align-items: center;
  background-color: #fff;
  height: 84px;
  border-radius: 42px 42px 0 42px;
  box-shadow: 10px 30px 20px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;
  @media only screen and (min-width: 1371px) {
    &:hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 1370px) {
    height: 65px;
    padding: 17px 22px 16px;
  }
  @media only screen and (max-width: 767px) {
    top: 66px;
    left: 102px;
    height: 50px;
    border-raidus: 25px 25px 0 25px;
    padding: 10px 18px 9px 17px;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.12);
  }
`;
const TextCategory2 = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #000;
  @media only screen and (max-width: 1370px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
const ImgCategory2 = styled.img`
  @media only screen and (max-width: 767px) {
    width: 30px;
    height: auto;
  }
`;
const ACategory3 = styled.a`
  display: flex;
  position: absolute;
  bottom: 21px;
  right: 0px;
  padding: 14px 44px 12px 17px;
  align-items: center;
  background-color: #37d243;
  height: 63px;
  border-radius: 32px 32px 0 32px;
  box-shadow: 10px 30px 20px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;
  @media only screen and (min-width: 1371px) {
    &:hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 1370px) {
    height: 50px;
    padding: 14px 24px 12px 17px;
  }
  @media only screen and (max-width: 767px) {
    bottom: 8px;
    right: 10px;
    height: 40px;
    border-raidus: 20px 20px 0 20px;
    padding: 9px 12px 9px 10px;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.12);
  }
`;
const TextCategory3 = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  @media only screen and (max-width: 1370px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
const ImgCategory3 = styled.img`
  @media only screen and (max-width: 767px) {
    width: 22px;
    height: auto;
  }
`;
const ACategory4 = styled.a`
  display: flex;
  position: absolute;
  top: 155px;
  right: 40px;
  padding: 11px 21px 10px 19px;
  align-items: center;
  background-color: #fff;
  height: 63px;
  border-radius: 32px 32px 0 32px;
  box-shadow: 10px 30px 20px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;
  @media only screen and (min-width: 1371px) {
    &:hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 1370px) {
    height: 50px;
    padding: 11px 21px 10px 19px;
  }
  @media only screen and (max-width: 767px) {
    top: 135px;
    right: 29px;
    height: 40px;
    border-raidus: 20px 20px 0 20px;
    padding: 8px 12px 7px;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.12);
  }
`;
const TextCategory4 = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #000;
  @media only screen and (max-width: 1370px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
const ImgCategory4 = styled.img`
  @media only screen and (max-width: 767px) {
    width: 25px;
    height: auto;
  }
`;
const ACategory5 = styled.a`
  display: flex;
  position: absolute;
  bottom: 0px;
  left: 50%;
  padding: 11px 27px 10px;
  margin-left: -70px;
  align-items: center;
  background-color: #313842;
  height: 63px;
  border-radius: 32px 32px 0 32px;
  box-shadow: 10px 30px 20px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;
  @media only screen and (min-width: 1371px) {
    &:hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 1370px) {
    height: 50px;
    paddig: 11px 27px 10px 27px;
  }
  @media only screen and (max-width: 767px) {
    height: 40px;
    margin-left: -42px;
    border-raidus: 20px 20px 0 20px;
    padding: 7px 17px 8px 16px;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.12);
  }
`;
const TextCategory5 = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  @media only screen and (max-width: 1370px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
const ImgCategory5 = styled.img`
  @media only screen and (max-width: 767px) {
    width: 25px;
    height: auto;
  }
`;
const ACategory6 = styled.a`
  display: flex;
  position: absolute;
  top: 75px;
  right: 44px;
  padding: 13px 31px 12px 30px;
  align-items: center;
  background-color: #6837f8;
  height: 63px;
  border-radius: 32px 32px 0 32px;
  box-shadow: 10px 30px 20px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;
  @media only screen and (min-width: 1371px) {
    &:hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 1370px) {
    height: 50px;
    padding: 14px 28px 12px 18px;
  }
  @media only screen and (max-width: 767px) {
    top: 38px;
    right: 29px;
    height: 40px;
    border-raidus: 20px 20px 0 20px;
    padding: 9px 22px 9px 17px;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.12);
  }
`;
const TextCategory6 = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  @media only screen and (max-width: 1370px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
const ImgCategory6 = styled.img`
  @media only screen and (max-width: 767px) {
    width: 23px;
    height: auto;
  }
`;
const ACategory7 = styled.a`
  display: flex;
  position: absolute;
  bottom: 48px;
  left: 0px;
  padding: 18px 38px 19px 26px;
  align-items: center;
  background-color: #6837f8;
  height: 84px;
  border-radius: 42px 42px 0 42px;
  box-shadow: 10px 30px 20px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;
  @media only screen and (min-width: 1371px) {
    &:hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 1370px) {
    height: 65px;
    padding: 18px 28px 19px 16px;
  }
  @media only screen and (max-width: 767px) {
    top: 128px;
    left: 10px;
    height: 50px;
    border-raidus: 25px 25px 0 25px;
    padding: 10px 20px 11px 17px;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.12);
  }
`;
const TextCategory7 = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  @media only screen and (max-width: 1370px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 22px;
  }
`;
const ImgCategory7 = styled.img`
  @media only screen and (max-width: 767px) {
    width: 29px;
    height: auto;
  }
`;

function SectionNowNeed(props) {
  return (
    <Wrapper>
      <DivInnerWrap>
        <SearchNowNeed>
          <TextNowNeed>
            <TitleText>지금 나에게 필요한건?</TitleText>
            <SubTitleText>CU의 다양한 상품들을 소개합니다!</SubTitleText>
          </TextNowNeed>
          <DivSearch>
            <InputSearch
              type="text"
              placeholder="연세우유 크림빵을 검색해보세요!"
            ></InputSearch>
            <ASearchIcon>
              <ImgSearchIcon
                src="/images/main/ico_search.png"
                alt="search_icon"
              />
            </ASearchIcon>
          </DivSearch>
        </SearchNowNeed>
        <SelectNowNeed>
          <ACategory1>
            <ImgCategory1
              src="/images/main/ico_need_cate01.png"
              alt="need_category_01"
            />
            <TextCategory1>간편식사</TextCategory1>
          </ACategory1>
          <ACategory6>
            <ImgCategory6
              src="/images/main/ico_need_cate06.png"
              alt="need_category_06"
            />
            <TextCategory6>음료</TextCategory6>
          </ACategory6>
          <ACategory2>
            <ImgCategory2
              src="/images/main/ico_need_cate02.png"
              alt="need_category_02"
            />
            <TextCategory2>즉석조리</TextCategory2>
          </ACategory2>
          <ACategory4>
            <ImgCategory4
              src="/images/main/ico_need_cate04.png"
              alt="need_category_04"
            />
            <TextCategory4>아이스크림</TextCategory4>
          </ACategory4>
          <ACategory7>
            <ImgCategory7
              src="/images/main/ico_need_cate07.png"
              alt="need_category_07"
            />
            <TextCategory7>생활용품</TextCategory7>
          </ACategory7>
          <ACategory5>
            <ImgCategory5
              src="/images/main/ico_need_cate05.png"
              alt="need_category_05"
            />
            <TextCategory5>식품</TextCategory5>
          </ACategory5>
          <ACategory3>
            <ImgCategory3
              src="/images/main/ico_need_cate03.png"
              alt="need_category_03"
            />
            <TextCategory3>스낵</TextCategory3>
          </ACategory3>
        </SelectNowNeed>
      </DivInnerWrap>
    </Wrapper>
  );
}

export default SectionNowNeed;
