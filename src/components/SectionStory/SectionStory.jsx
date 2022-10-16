import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  // ★레이아웃 설정★
  display: flex;
  z-index: 10;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  justify-content: center;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    order: 10;
  }
`;
const InnerWrap = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: row;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  max-width: 1280px;
  height: 1280px;
  // ★내부 설정★
  justify-content: center;
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    max-width: non;
    height: auto;
    padding: 0 20px;
  }
`;
// [DivLeft]
const LeftWrap = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  margin-right: 80px;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    margin-right: 5%;
    width: 39%;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
`;
// Title
const DivTitle = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  padding: 113px 0 198px;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    padding: 80px 0 20px;
  }
`;
const TitleText = styled.h2`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  font-size: 120px;
  line-height: 1.39;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 80px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: -0.4;
  }
`;
// BGFLive
const DivBGFLive = styled.div`
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
const ABGFLive = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 480px;
  height: auto;
  // ★내부 설정★
  border-radius: 120px;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width: 100%;
  }
`;
const ImgBGLive = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: auto;
  // ★내부 설정★
  // ★행동 설정★
`;
const TextBGLive = styled.h3`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  padding: 25px 0 23px;
  // ★내부 설정★
  font-size: 36px;
  line-height: 1.39;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const IconBGLive = styled.em`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 36px;
  height: 36px;
  margin: 5px 10px 0;
  // ★내부 설정★
  background: url("/images/main/story_ico2.png") center bottom no-repeat;
  background-size: contain;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    margin: 0 10px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const SubTextBGLive = styled.p`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  font-size: 20px;
  line-height: 1.6;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
// [DivRight]
const RightWrap = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width: 39%;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
`;
// GoinStory
const DivGoinStory = styled.div`
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
const AGoinStory = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 480px;
  height: auto;
  // ★내부 설정★
  border-radius: 120px;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width: 100%;
  }
`;
const ImgGoinStory = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: auto;
  // ★내부 설정★
  // ★행동 설정★
`;
const TextGoinStory = styled.h3`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  padding: 25px 0 23px;
  // ★내부 설정★
  font-size: 36px;
  line-height: 1.39;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const IconGoinStory = styled.em`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 36px;
  height: 36px;
  margin: 5px 10px 0;
  // ★내부 설정★
  background: url("/images/main/story_ico1.png") center bottom no-repeat;
  background-size: contain;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    margin: 0 10px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const SubTextGoinStory = styled.p`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  font-size: 20px;
  line-height: 1.6;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
// Instagram
const DivInstagram = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  padding-top: 129px;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    padding-top: 0px;
    align-items: center;
  }
`;
const AInstagram = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 480px;
  height: auto;
  // ★내부 설정★
  border-radius: 120px;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    width: 100%;
    border-radius: 0;
  }
  @media only screen and (max-width: 767px) {
    width: 335px;
    border-radius: 12px;
  }
`;
const PictureInstagram = styled.picture`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const ImgInstagram = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: auto;
  // ★내부 설정★
  // ★행동 설정★
`;
const TextInstagram = styled.h3`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  padding: 25px 0 23px;
  // ★내부 설정★
  font-size: 36px;
  line-height: 1.39;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const IconInstagram = styled.em`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 36px;
  height: 36px;
  margin: 5px 10px 0;
  // ★내부 설정★
  background: url("/images/main/story_ico3.png") center bottom no-repeat;
  background-size: contain;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    margin: 0 10px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const SubTextInstagram = styled.p`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  font-size: 20px;
  line-height: 1.6;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.5;
    padding-top: 18px;
  }
`;

function SectionStory(props) {
  return (
    <Wrapper>
      <InnerWrap>
        <LeftWrap>
          <DivTitle>
            <TitleText>스토리</TitleText>
          </DivTitle>
          <DivBGFLive>
            <ABGFLive href="https://www.bgflive.com" target="_blank">
              <ImgBGLive
                src="/images/newMain/462EF97C95034F11A7125E0441E16755.png"
                alt="abg_live"
              />
            </ABGFLive>
            <TextBGLive>
              BGF Live
              <IconBGLive />
            </TextBGLive>
            <SubTextBGLive>
              BGF Live에서
              <br />
              CU 최신 소식을 알아보세요
            </SubTextBGLive>
          </DivBGFLive>
        </LeftWrap>
        <RightWrap>
          <DivGoinStory>
            <AGoinStory href="">
              <ImgGoinStory
                src="/images/newMain/pc_story_02_220228_1613.png"
                alt="going_story"
              />
            </AGoinStory>
            <TextGoinStory>
              성공스토리
              <IconGoinStory />
            </TextGoinStory>
            <SubTextGoinStory>
              넓어진 공간만큼 고객의 발길을 사로잡다.
              <br />
              서초법원로점 박준형 점주님입니다.
            </SubTextGoinStory>
          </DivGoinStory>
          <DivInstagram>
            <AInstagram
              href="https://www.instagram.com/p/CjSMuDSvmcS/"
              target="_blank"
            >
              <PictureInstagram>
                <source
                  media="(max-width:767px)"
                  srcSet={
                    "/images/newMain/AD0F8C79CFF34848B5321BF2059541F3.png"
                  }
                />
                <source
                  media="(min-width:768px)"
                  srcSet={
                    "/images/newMain/8757440DCA59494994836411304DB597.png"
                  }
                />
                <ImgInstagram
                  src="/images/newMain/8757440DCA59494994836411304DB597.png"
                  alt="instagram"
                />
              </PictureInstagram>
            </AInstagram>
            <TextInstagram>
              Instagram
              <IconInstagram />
            </TextInstagram>
            <SubTextInstagram>T1 탑티어 시리즈 출 to the 시✨</SubTextInstagram>
          </DivInstagram>
        </RightWrap>
      </InnerWrap>
    </Wrapper>
  );
}

export default SectionStory;
