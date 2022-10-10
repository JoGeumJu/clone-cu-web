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
  justify-content: center;
  align-items: center;
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
  flex-direction: column;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  max-width: 1280px;
  height: 57px;
  margin-bottom: 48px;
  // ★내부 설정★
  // ★행동 설정★
`;
const HTitle = styled.h2`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
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
const DisappearViewMore = styled.div``;
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
  display: flex;
  width: 100%;
  max-width: 1280px;
  align-items: center;
  padding: 0;
  margin: 0 auto;
`;
const SwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1220px;
  height: 100%;
  margin: 0 auto;
  overflow: visible;
`;
const BtnSwiperPrev = styled.button`
  display: none;
`;
const ImgSwiperPrev = styled.img``;
const BtnSwiperNext = styled.button`
  display: none;
`;
const ImgSwiperNext = styled.img``;
const DivPagination = styled.div``;
// swiper-slides
const ASwiperHotIssue = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 224px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #dddddd;
  overflow: hidden;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
`;
const DivGoodsWrap = styled.div`
  display: flex;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 22px 8px 0;
  cursor: pointer;
`;
const AGoodsWrap = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding:22px 8px 0;
`;
const ImgSwiperHotIssue = styled.img`
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  max-width: 200px;
  object-position: center;
  vertical-align: top;
`;
const DivTextGoods = styled.div`
  padding: 0 9px;
  margin-top: 13px;
`;
const DivGoodsName = styled.div`
  display:flex;
  width: 100%;
  height: 41px;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.11;
  letter-spacing: -0.72px;
  color: #000;
  vertical-align:center;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const DivGoodsPrice = styled.div`
  display: flex;
  position:relative;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  height: 29px;
`;
const Strong = styled.p`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.48px;
  color: #222;
`;
const PWon = styled.p`
display:flex;
  font-size: 20px;
  font-style: normal;
  padding-left: 2px;
`;
const DivNewTagWrap = styled.div`
  position: absolute;
`;
const ImgNewTag = styled.img``;

function SectionHotIssue(props) {
  const [swiperHotIssues, setSwiperHotIssues] = useState([
    {
      index: 0,
      href: "",
      src: `${"/images/product/8809802266223.jpg"}`,
      alt: "듀록목살찹스테이크",
      name: "도)듀록목살찹스테이크",
      price: "6,900",
    },
    {
      index: 1,
      href: "",
      src: `${"/images/product/8809533200343.jpg"}`,
      alt: "꼬북칩초코160g",
      name: "오리온)꼬북칩초코160g",
      price: "3,400",
    },
    {
      index: 2,
      href: "",
      src: `${"/images/product/8801117695002.jpg"}`,
      alt: "훈제오리쌈세트",
      name: "이금기)훈제오리쌈세트",
      price: "11,900",
    },
    {
      index: 3,
      href: "",
      src: `${"/images/product/8809367692581.jpg"}`,
      alt: "깨부수면컵",
      name: "정육면체)깨부수면컵",
      price: "4,500",
    },
    {
      index: 4,
      href: "",
      src: `${"/images/product/8809860730261.jpg"}`,
      alt: "짱구는카레대왕",
      name: "짱구)짱구는카레대왕",
      price: "4,900",
    },
    {
      index: 5,
      href: "",
      src: `${"/images/product/8801771025191.jpg"}`,
      alt: "이금기삼겹구이정식",
      name: "도)이금기삼겹구이정식",
      price: "5,500",
    },
    {
      index: 6,
      href: "",
      src: `${"/images/product/8809196616857.jpg"}`,
      alt: "불고기된장한상차림",
      name: "도)불고기된장한상차림",
      price: "4,900",
    },
    {
      index: 7,
      href: "",
      src: `${"/images/product/8809802265851.jpg"}`,
      alt: "야키토리묵닭곰탕",
      name: "푸드)야키토리묵닭곰탕",
      price: "5,900",
    },
    {
      index: 8,
      href: "",
      src: `${"/images/product/8801062863785.jpg"}`,
      alt: "케로로쿠루치즈케익",
      name: "롯데)케로로쿠루치즈케익",
      price: "1,500",
    },
    {
      index: 9,
      href: "",
      src: `${"/images/product/8801045242156.jpg"}`,
      alt: "뿌셔뿌셔달고나맛",
      name: "오뚜기)뿌셔뿌셔달고나맛",
      price: "1,200",
    },
  ]);

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const settings_hot_issue = {
    spaceBetween: 10,
    slidesPerView: 5,
    slidesPerGroup: 5,
    loop: true,
    loopedSlides: 5,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    scrollbar: { draggable: true, el: null },
    navigation: {
      nextEl: ".swiper_button_next_hot_issue",
      prevEl: ".swiper_button_prev_hot_issue",
    },
    pagination: {
      el: ".swiper_pagination_hot_issue",
      clickable: true,
    },
  };

  return (
    <Wrapper>
      <TitleHotIssue>
        <HTitle>핫이슈</HTitle>
        <AViewMore>
          <DisappearViewMore>핫이슈 상품&nbsp;</DisappearViewMore>모두보기
          <ImgViewMore />
        </AViewMore>
      </TitleHotIssue>
      <DivHotIssues>
        <SwiperContainer>
          <Swiper
            className="swiper_container_hot_issue"
            {...settings_hot_issue}
          >
            {swiperHotIssues.map((idx) => (
              <SwiperSlide className="swiper_slide_hot_issue" key={idx.index}>
                <ASwiperHotIssue href={idx.href}>
                  <DivGoodsWrap>
                    <AGoodsWrap>
                      <ImgSwiperHotIssue src={idx.src} alt={idx.alt} />
                      <DivTextGoods>
                        <DivGoodsName>{idx.name}</DivGoodsName>
                        <DivGoodsPrice>
                          <Strong>{idx.price}</Strong>
                          <PWon>원</PWon>
                        </DivGoodsPrice>
                      </DivTextGoods>
                    </AGoodsWrap>
                  </DivGoodsWrap>
                  <DivNewTagWrap>
                    <ImgNewTag src="/images/icon/tag_new.png" />
                  </DivNewTagWrap>
                </ASwiperHotIssue>
              </SwiperSlide>
            ))}
          </Swiper>
          <BtnSwiperPrev className="swiper_button_prev_hot_issue">
            <ImgSwiperPrev
              src="/images/main/btn_cu_event_prev.png"
              alt="btn_cu_event_prev"
            />
          </BtnSwiperPrev>
          <BtnSwiperNext className="swiper_button_next_hot_issue">
            <ImgSwiperNext
              src="/images/main/btn_cu_event_next.png"
              alt="btn_cu_event_prev"
            />
          </BtnSwiperNext>
          <DivPagination>
            <div className="swiper_pagination_hot_issue"></div>
          </DivPagination>
        </SwiperContainer>
      </DivHotIssues>
    </Wrapper>
  );
}

export default SectionHotIssue;
