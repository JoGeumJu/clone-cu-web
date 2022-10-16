import React, { useState } from "react";
import styled from "styled-components";

import { FiChevronRight } from "react-icons/fi";
import "./AHover.css";

const Wrapper = styled.section`
  display: flex;
  height: auto;
  margin: 0 auto 0;
  padding: 65px 30px 80px;
  @media only screen and (max-width: 1370px) {
    margin: 0 auto 140px;
  }
  @media only screen and (max-width: 1340px) {
    width: 100%;
  }
  @media only screen and (max-width: 767px) {
    order: 2;
    width: 100%;
    padding: 31px 20px 30px;
    margin: 0 auto;
  }
`;
const DivCenter = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  position: relative;
  // ★박스 크기 및 여백 설정★
  margin: 0;
  border: 0;
  min-width: 1280px;
  height: auto;
  // ★내부 설정★
  justify-content: space-between;
  vertical-align: top;
  // ★행동 설정★
  @media only screen and (max-width: 1340px) {
    width: 100%;
    min-width: auto;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const DivHelloFriendsAndCUStory = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  margin: 0;
  padding: 0;
  border: 0;
  // ★내부 설정★
  justify-content: space-between;
  // ★행동 설정★
`;
const DivHelloFriends = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const PictureHelloFriends = styled.picture`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const ImgHelloFriends = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  max-width: 100%;
  // ★내부 설정★
  color: white;
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    max-width: 148px;
  }
`;
const DivCUStory = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  position: relative;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  align-items: center;
  // ★행동 설정★
`;
const ACUStory = styled.a`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  align-items: center;
  justify-content: right;
  color: #999999;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.64px;
  cursor: pointer;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    &:hover {
      color: #000;
    }
  }
  @media only screen and (min-width: 1371px) {
    &:after {
      display: flex;
      position: absolute;
      border-bottom: 1px solid #000;
      content: "";
      left: 0;
      bottom: -5px;
      width: 98px;
      transform: scaleX(0);
      transform-origin: left bottom;
      animation: toleft 0.4s ease 0s normal 1 none;
    }
  }
  @media only screen and (min-width: 1371px) {
    &:hover:after {
      display: flex;
      position: absolute;
      border-bottom: 1px solid #000;
      content: "";
      left: 0;
      bottom: -5px;
      width: 98px;
      transform: scaleX(1);
      transform-origin: left bottom;
      animation: toright 0.4s ease 0s normal 1 none;
    }
  }
  @media only screen and (max-width: 767px) {
    font-size: 13px;
    line-height: 1;
  }
  @media only screen and (max-width: 1370px) {
    &:hover {
      color: #000;
    }
  }
`;
const BtnBgCUStory = styled.div`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  margin: 1px 0 0 6.7px;
  width: 20px;
  height: 20px;
  // ★내부 설정★
  background-color: #37d243;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  // ★행동 설정★
  ${ACUStory}:hover & {
    background-color: #6837f8;
  }
  @media only screen and (max-width: 767px) {
    width: 16px;
    height: 16px;
    margin: 1px 0 0 8.7px;
  }
`;
const BtnArrowCUStory = styled(FiChevronRight)`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding: 0.7px;
  // ★내부 설정★
  color: white;
  // ★행동 설정★
`;
const DivCharacters = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  height: auto;
  // ★내부 설정★
  // ★행동 설정★
`;
const PictureCharacters = styled.picture`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const ImgCharacters = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  max-width: 100%;
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    max-width: 114px;
  }
`;

function SectionCUStory(props) {
  return (
    <Wrapper>
      <DivCenter>
        <DivHelloFriendsAndCUStory>
          <DivHelloFriends>
            <PictureHelloFriends>
              <source
                media="(max-width:767px)"
                srcSet={"/images/main/main_visual_logo_text_mo.png"}
              />
              <source
                media="(min-width:768px)"
                srcSet={"/images/main/main_visual_logo_text_pc.png"}
              />
              <ImgHelloFriends
                src={"/images/main/main_visual_logo_text_pc.png"}
                alt="img_hello_friends"
              />
            </PictureHelloFriends>
          </DivHelloFriends>
          <DivCUStory>
            <ACUStory className="a_cu_story" alt="btn_cu_story">
              CU 스토리 보기
              <BtnBgCUStory>
                <BtnArrowCUStory className="btn_cu_story" src="" />
              </BtnBgCUStory>
            </ACUStory>
          </DivCUStory>
        </DivHelloFriendsAndCUStory>
        <DivCharacters>
          <PictureCharacters>
            <source
              media="(max-width:767px)"
              srcSet={"/images/main/main_visual_illu_mo.png"}
            />
            <source
              media="(min-width:768px)"
              srcSet={"/images/main/main_visual_illu.png"}
            />
            <ImgCharacters
              src={"/images/main/main_visual_illu.png"}
              alt="img_characters"
            />
          </PictureCharacters>
        </DivCharacters>
      </DivCenter>
    </Wrapper>
  );
}

export default SectionCUStory;
