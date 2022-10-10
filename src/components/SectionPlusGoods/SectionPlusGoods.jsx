import React, { useState } from "react";
import styled from "styled-components";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";

const Wrapper = styled.section`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  position: relative;
  // ★박스 크기 및 여백 설정★
  margin: 0 auto 160px;
  width: 100%;
  height: auto;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    margin: 0 auto 160px;
  }
  @media only screen and (max-width: 767px) {
    margin: 0 auto 78px;
  }
`;
const TitleHotIssue = styled.div`
  // ★레이아웃 설정★
  display: flex;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  max-width: 1280px;
  height: 57px;
  margin: 0 auto 48px;
  // ★내부 설정★
  // ★행동 설정★
`;
const HTitle = styled.h2`
  // ★레이아웃 설정★
  display: flex;
  position: absolute;
  // ★박스 크기 및 여백 설정★
  width: auto;
  height: auto;
  // ★내부 설정★
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.96px;
  // ★행동 설정★
`;
const AViewMore = styled.a`
  // ★레이아웃 설정★
  display: flex;
  position: absolute;
  z-index: 10;
  // ★박스 크기 및 여백 설정★
  padding-right: 40px;
  // ★내부 설정★
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 18px;
  line-height: 1;
  font-weight: 600;
  letter-spacing: -0.72px;
  cursor: pointer;
  // ★행동 설정★
  &:hover {
  }
`;
const ImgViewMore = styled(HiChevronRight)`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  margin-top: 1.4px;
  margin-right: 6px;
  // ★내부 설정★
  width: 25px;
  height: 25px;
  color: #999;
  // ★행동 설정★
`;
const DivHotIssues = styled.div`
  // ★레이아웃 설정★
  display: flex;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  max-width: 1280px;
  height: 57px;
  margin: 0 auto;
  // ★내부 설정★
  // ★행동 설정★
`;
const SwiperContainer = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const BtnSwiperPrev = styled.button`
  // ★레이아웃 설정★
  position: absolute;
  z-index: 120;
  // ★박스 크기 및 여백 설정★
  width: 60px;
  height: 60px;
  // ★내부 설정★
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translate(-10px, -50%);
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    display: inline-flex;
    z-index: 120;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const ImgSwiperPrev = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  margin-top: 2px;
  margin-right: 1px;
  width: 24px;
  // ★내부 설정★
  // ★행동 설정★
`;
const BtnSwiperNext = styled.button`
  // ★레이아웃 설정★
  position: absolute;
  z-index: 120;
  // ★박스 크기 및 여백 설정★
  width: 60px;
  height: 60px;
  // ★내부 설정★
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translate(675px, -50%);
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    display: inline-flex;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const ImgSwiperNext = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  margin-top: 2px;
  margin-left: 1px;
  width: 24px;
  // ★내부 설정★
  // ★행동 설정★
`;
const DivPagination = styled.div`
  display: block;
  position: relative;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  padding-top: 30px;
  max-width: 1320px;
  height: auto;
  @media only screen and (max-width: 767px) {
    max-width: 750px;
    margin: 0 auto;
    padding: 0;
    padding-top: 2px;
    font-size: 16px;
  }
`;
// swiper-slides
const ASwiperHotIssue = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 100%;
  // ★내부 설정★
  // ★행동 설정★
`;
const PictureSwiperHotIssue = styled.picture`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  // ★내부 설정★
  // ★행동 설정★
`;
const ImgSwiperHotIssue = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 100%;
  // ★내부 설정★
  border-radius: 16px;
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    border-radius: 14px;
  }
`;

function SectionPlusGoods(props) {
  const [swiperPlusGoods, setSwiperPlusGoods] = useState([
    {
      index: 0,
      href: "",
      src: `${"/images/product/8806371301614.png"}`,
      alt: "검은콩우유300ml",
      name: "푸르밀)검은콩우유300ml",
      price: "1,650"

    },
    {
      index: 1,
      href: "",
      src: `${"/images/product/8801123103454.png"}`,
      alt: "가나쵸코우유300ml",
      name: " 푸르밀)가나쵸코우유300ml",
      price: "1,650"
    },
    {
      index: 2,
      href: "",
      src: `${"/images/product/8801051009033.png"}`,
      alt: "초극세모칫솔",
      name: "46cm)초극세모칫솔",
      price: "3,500"
    },
    {
      index: 3,
      href: "",
      src: `${"/images/product/8806403146473.png"}`,
      alt: "치석케어치약",
      name: "메디안)치석케어치약",
      price: "4,500"
    },
    {
      index: 4,
      href: "",
      src: `${"/images/product/8801042443631.png"}`,
      alt: "센서티브칫솔",
      name: "메디안)센서티브칫솔",
      price: "3,000"
    },
    {
      index: 5,
      href: "",
      src: `${"/images/product/8801046057216.png"}`,
      alt: "칫솔",
      name: "2080)칫솔",
      price: "2,800"
    },
    {
      index: 6,
      href: "",
      src: `${"/images/product/8801046846087.png"}`,
      alt: "치약",
      name: "2080)치약",
      price: "3,500"
    },
    {
      index: 7,
      href: "",
      src: `${"/images/product/8801046860458.png"}`,
      alt: "센서티브미세모",
      name: "2080)센서티브미세모",
      price: "3,200"
    },
    {
      index: 8,
      href: "",
      src: `${"/images/product/8801051152845.png"}`,
      alt: "퍼퓸샴푸",
      name: "엘라스틴)퍼퓸샴푸",
      price: "10,900"
    },
    {
      index: 9,
      href: "",
      src: `${"/images/product/8801051064223.png"}`,
      alt: "토탈7치약",
      name: "페리오)토탈7치약",
      price: "3,900"
    },
    {
        index: 10,
        href: "",
        src: `${"/images/product/8801051010367.png"}`,
        alt: "이지클리닉칫솔",
        name: "페리오)이지클리닉칫솔",
        price: "2,200"
  
      },
      {
        index: 11,
        href: "",
        src: `${"/images/product/4902430741880.png"}`,
        alt: "다우니370ml",
        name: "뉴페브리즈)다우니370ml",
        price: "8,900"
      },
      {
        index: 12,
        href: "",
        src: `${"/images/product/4902430311625.png"}`,
        alt: "핑크1L",
        name: "다우니)핑크1L",
        price: "12,600"
      },
      {
        index: 13,
        href: "",
        src: `${"/images/product/8801166222587.png"}`,
        alt: "오가닉롱라이너18입",
        name: "좋은)오가닉롱라이너18입",
        price: "4,300"
      },
      {
        index: 14,
        href: "",
        src: `${"/images/product/3014260844622.png"}`,
        alt: "후레쉬칫솔",
        name: "오랄비)후레쉬칫솔",
        price: "2,000"
      },
      {
        index: 15,
        href: "",
        src: `${"/images/product/8801094363000.png"}`,
        alt: "파워에이드캔240ml",
        name: "코카)파워에이드캔240ml",
        price: "1,200"
      },
      {
        index: 16,
        href: "",
        src: `${"/images/product/8806107612052.png"}`,
        alt: "레디큐캔120ml",
        name: "한독)레디큐캔120ml",
        price: "5,000"
      },
      {
        index: 17,
        href: "",
        src: `${"/images/product/8806403068379.png"}`,
        alt: "데미지샴푸",
        name: "미쟝센)데미지샴푸",
        price: "15,000"
      },
      {
        index: 18,
        href: "",
        src: `${"/images/product/8806403068409.png"}`,
        alt: "데미지린스",
        name: "미쟝센)데미지린스",
        price: "15,000"
      },
      {
        index: 19,
        href: "",
        src: `${"/images/product/8809299230820.png"}`,
        alt: "수퍼롱와이드10입",
        name: "바디)수퍼롱와이드10입",
        price: "8,700"
      },
  ]);

  return (
    <Wrapper>
      <TitleHotIssue>
        <HTitle>핫이슈</HTitle>
        <AViewMore>
          핫이슈 상품 모두보기
          <ImgViewMore />
        </AViewMore>
      </TitleHotIssue>
      <DivHotIssues>
        <SwiperContainer></SwiperContainer>
      </DivHotIssues>
    </Wrapper>
  );
}

export default SectionPlusGoods;
