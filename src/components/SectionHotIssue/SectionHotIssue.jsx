import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { HiChevronRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";
import "./AHover.css";

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
    order: 4;
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
  @media only screen and (max-width: 1370px) {
    width: 100%;
    max-width: 1370px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: none;
    height: 29px;
    margin-bottom: 15px;
  }
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
  cursor: default;
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    top: 0;
    left: 20px;
    transform: translateX(0%);
    line-height: 1.2;
    font-size: 20px;
    letter-spacing: -0.4px;
  }
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
  @media only screen and (min-width: 1371px) {
    &:after {
      display: flex;
      position: absolute;
      border-bottom: 1px solid #999;
      content: "";
      left: 0;
      bottom: -1px;
      width: 150px;
      transform: scaleX(0);
      transform-origin: left bottom;
      animation: toleft 0.4s ease 0s normal 1 none;
    }
  }
  @media only screen and (min-width: 1371px) {
    &:hover:after {
      display: flex;
      position: absolute;
      border-bottom: 1px solid #999;
      content: "";
      left: 0;
      bottom: -1px;
      width: 150px;
      transform: scaleX(1);
      transform-origin: left bottom;
      animation: toright 0.4s ease 0s normal 1 none;
    }
  }
  @media only screen and (max-width: 767px) {
    right: 14px;
    padding-right: 0;
    font-size: 13px;
    letter-spacing: -0.52px;
  }
`;
const DisappearViewMore = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
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
  @media only screen and (min-width: 1371px) {
    ${AViewMore}:hover & {
      animation: swipe 1s ease 0s normal infinite none;
    }
  }
  @media only screen and (max-width: 767px) {
    width: 21px;
    height: 21px;
    margin-right: 0px;
  }
`;
const DivHotIssues = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  align-items: center;
  padding: 0;
  margin: 0 auto;
  overflow: visible;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 1370px) {
    width: 100%;
    max-width: 1370px;
  }
  @media only screen and (max-width: 767px) {
    padding: 0 12px;
  }
`;
const SwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 1220px;
  height: 100%;
  margin: 0 auto;
  overflow: visible;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 1370px) {
    width: 100%;
    max-width: 1370px;
  }
`;
const BtnSwiperPrev = styled.button`
  // ★레이아웃 설정★
  display: flex;
  position: absolute;
  z-index: 5;
  // ★박스 크기 및 여백 설정★
  width: 24px;
  height: 24px;
  // ★내부 설정★
  top: 50%;
  left: 0%;
  transform: translate(0, -50%);
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    left: 20px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const ImgSwiperPrev = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 24px;
  height: 24px;
  // ★내부 설정★
  // ★행동 설정★
`;
const BtnSwiperNext = styled.button`
  // ★레이아웃 설정★
  display: flex;
  position: absolute;
  z-index: 5;
  // ★박스 크기 및 여백 설정★
  width: 24px;
  height: 24px;
  // ★내부 설정★
  top: 50%;
  right: 0%;
  transform: translate(0, -50%);
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    right: 20px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const ImgSwiperNext = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 24px;
  height: 24px;
  // ★내부 설정★
  // ★행동 설정★
`;
const DivPagination = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  margin: 0 auto;
  padding: 30px 0 0 0;
  max-width: 1320px;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    padding: 2px 0 0 0;
  }
`;
// swiper-slides
const BgSwiperHotIssue = styled.div`
  display: flex;
  position: relative;
  width: 224px;
  height: 340px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media only screen and (min-width: 1371px) {
    &:hover {
      background: linear-gradient(45deg, #50e2c4, #895eee);
      padding: 7px;
    }
  }
  @media only screen and (max-width: 1370px) {
    width: 100%;
    height: 100%;
    max-width: none;
    border-radius: 12px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;
const ASwiperHotIssue = styled.a`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: 100%;
  padding: 22px 8px 0;
  // ★내부 설정★
  background-color: #fff;
  border: 1px solid #dddddd;
  overflow: hidden;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    ${BgSwiperHotIssue}:hover & {
      padding: 14px 1px 0;
    }
  }
  @media only screen and (max-width: 1370px) {
    padding: 16px 10px 0px;
    border-radius: 12px;
  }
  @media only screen and (max-width: 767px) {
    padding: 16px 10px 0px;
  }
`;
const DivGoodsWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: position;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  cursor: pointer;
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
  @media only screen and (min-width: 1371px) {
    ${BgSwiperHotIssue}:hover & {
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 1370px) {
    width: 141px;
  }
  @media only screen and (max-width: 767px) {
    max-width: 141px;
  }
`;
const DivTextGoods = styled.div`
  width: 100%;
  padding: 0 9px;
  margin-top: 13px;
  justify-content: center;
  @media only screen and (max-width: 1370px) {
    margin-top: 10px;
  }
`;
const DivGoodsName = styled.div`
  display: flex;
  width: 100%;
  height: 41px;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.11;
  letter-spacing: -0.72px;
  color: #222;
  vertical-align: center;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1370px) {
    align-items: flex-start;
    width: 100%;
    max-height: 37px;
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.6px;
  }
`;
const DivGoodsPrice = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 29px;
  @media only screen and (max-width: 1370px) {
    margin-top: 4px;
    height: 22px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const Strong = styled.p`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.48px;
  color: #000;
  @media only screen and (max-width: 1370px) {
    font-size: 18px;
    letter-spacing: -0.36px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const PWon = styled.p`
  display: flex;
  font-size: 20px;
  color: #222;
  font-style: normal;
  padding-left: 2px;
  @media only screen and (max-width: 1370px) {
    height: 18px;
    font-size: 14px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const DivNewTagWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(140%, -220%);
  @media only screen and (max-width: 1370px) {
    width: 31px;
    height: 31px;
    top: 12px;
    right: 10px;
    transform: translate(0, 0);
  }
  @media only screen and (max-width: 767px) {
  }
`;
const ImgNewTag = styled.img`
  @media only screen and (max-width: 1370px) {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 767px) {
  }
`;

function SectionHotIssue(props) {
  const [swiperHotIssues, setSwiperHotIssues] = useState([
    {
      index: 0,
      href: "",
      src: `${"/images/product/8809802266223.jpg"}`,
      alt: "듀록목살찹스테이크",
      name: "도)듀록목살찹스테이크",
      price: "6,900",
      tag: "new",
    },
    {
      index: 1,
      href: "",
      src: `${"/images/product/8801117695002.jpg"}`,
      alt: "꼬북칩초코160g",
      name: "오리온)꼬북칩초코160g",
      price: "3,400",
      tag: "new",
    },
    {
      index: 2,
      href: "",
      src: `${"/images/product/8809533200343.jpg"}`,
      alt: "훈제오리쌈세트",
      name: "이금기)훈제오리쌈세트",
      price: "11,900",
      tag: "new",
    },
    {
      index: 3,
      href: "",
      src: `${"/images/product/8809367692581.jpg"}`,
      alt: "깨부수면컵",
      name: "정육면체)깨부수면컵",
      price: "4,500",
      tag: "new",
    },
    {
      index: 4,
      href: "",
      src: `${"/images/product/8809860730261.jpg"}`,
      alt: "짱구는카레대왕",
      name: "짱구)짱구는카레대왕",
      price: "4,900",
      tag: "new",
    },
    {
      index: 5,
      href: "",
      src: `${"/images/product/8801771025191.jpg"}`,
      alt: "이금기삼겹구이정식",
      name: "도)이금기삼겹구이정식",
      price: "5,500",
      tag: "new",
    },
    {
      index: 6,
      href: "",
      src: `${"/images/product/8809196616857.jpg"}`,
      alt: "불고기된장한상차림",
      name: "도)불고기된장한상차림",
      price: "4,900",
      tag: "none",
    },
    {
      index: 7,
      href: "",
      src: `${"/images/product/8809802265851.jpg"}`,
      alt: "야키토리묵닭곰탕",
      name: "푸드)야키토리묵닭곰탕",
      price: "5,900",
      tag: "none",
    },
    {
      index: 8,
      href: "",
      src: `${"/images/product/8801062863785.jpg"}`,
      alt: "케로로쿠루치즈케익",
      name: "롯데)케로로쿠루치즈케익",
      price: "1,500",
      tag: "new",
    },
    {
      index: 9,
      href: "",
      src: `${"/images/product/8801045242156.jpg"}`,
      alt: "뿌셔뿌셔달고나맛",
      name: "오뚜기)뿌셔뿌셔달고나맛",
      price: "1,200",
      tag: "new",
    },
  ]);

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const settings_hot_issue = {
    spaceBetween: 0,
    slidesPerView: 2,
    slidesPerGroup: 1,
    loop: true,
    loopedSlides: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
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
            modules={[Navigation, Pagination, Autoplay]}
            className="swiper_container_hot_issue"
            slidesPerView={2}
            slidesPerGroup={1}
            spaceBetween={0}
            loop={true}
            loopedslide={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true, el: null }}
            navigation={{
              nextEl: ".swiper_button_next_hot_issue",
              prevEl: ".swiper_button_prev_hot_issue",
            }}
            pagination={{
              el: ".swiper_pagination_hot_issue",
              clickable: true,
            }}
            breakpoints={{
              768: {
                spaceBetween: 0,
                slidesPerView: 4,
                slidesPerGroup: 2,
                slidesOffsetBefore:10,
                scrollbar: { draggable: true, el: null },
                navigation: {
                  nextEl: ".swiper_button_next_hot_issue",
                  prevEl: ".swiper_button_prev_hot_issue",
                },
                pagination: {
                  el: ".swiper_pagination_hot_issue",
                  clickable: true,
                },
              },
              1371: {
                spaceBetween: 10,
                slidesPerView: 5,
                slidesPerGroup: 5,
                scrollbar: { draggable: true, el: null },
                navigation: {
                  nextEl: ".swiper_button_next_hot_issue",
                  prevEl: ".swiper_button_prev_hot_issue",
                },
                pagination: {
                  el: ".swiper_pagination_hot_issue",
                  clickable: true,
                },
              },
            }}
            // {...settings_hot_issue}
          >
            {swiperHotIssues.map((idx) => (
              <SwiperSlide className="swiper_slide_hot_issue" key={idx.index}>
                <BgSwiperHotIssue>
                  <ASwiperHotIssue href={idx.href}>
                    <DivGoodsWrap>
                      <ImgSwiperHotIssue src={idx.src} alt={idx.alt} />
                      <DivTextGoods>
                        <DivGoodsName>{idx.name}</DivGoodsName>
                        <DivGoodsPrice>
                          <Strong>{idx.price}</Strong>
                          <PWon>원</PWon>
                        </DivGoodsPrice>
                      </DivTextGoods>
                    </DivGoodsWrap>
                    <DivNewTagWrap>
                      {idx.tag === "new" ? (
                        <ImgNewTag src="/images/icon/tag_new.png" />
                      ) : (
                        <></>
                      )}
                    </DivNewTagWrap>
                  </ASwiperHotIssue>
                </BgSwiperHotIssue>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
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
      </DivHotIssues>
      <DivPagination>
        <div className="swiper_pagination_hot_issue"></div>
      </DivPagination>
    </Wrapper>
  );
}

export default SectionHotIssue;
