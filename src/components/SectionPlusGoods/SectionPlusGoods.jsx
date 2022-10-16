import React, { useEffect, useState } from "react";
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
    order: 5;
    margin: 0 auto 78px;
  }
`;
const TitlePlusGoods = styled.div`
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
      width: 130px;
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
      width: 130px;
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
const DivPlusGoodss = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
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
  z-index: 5;
  // ★박스 크기 및 여백 설정★
  width: 30px;
  height: 17px;
  // ★내부 설정★
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const ImgSwiperPrev = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 14px;
  height: 14px;
  // ★내부 설정★
  // ★행동 설정★
`;
const BtnSwiperNext = styled.button`
  // ★레이아웃 설정★
  display: flex;
  z-index: 5;
  // ★박스 크기 및 여백 설정★
  width: 30px;
  height: 17px;
  // ★내부 설정★
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const ImgSwiperNext = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 14px;
  height: 14px;
  // ★내부 설정★
  // ★행동 설정★
`;
const SwiperModule = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;
const DivPagination = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  padding: 30px 0 0 0;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    padding: 2px 0 0 0;
  }
`;
// swiper-slides
const BgSwiperPlusGoods = styled.div`
  display: flex;
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
const ASwiperPlusGoods = styled.a`
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
  text-decoration: none;
  // ★행동 설정★
  @media only screen and (min-width: 1371px) {
    ${BgSwiperPlusGoods}:hover & {
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
const ImgSwiperPlusGoods = styled.img`
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
    ${BgSwiperPlusGoods}:hover & {
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
const DivPlusTagWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-90px, -150px);
  @media only screen and (max-width: 1370px) {
    top: 12px;
    left: 12px;
    transform: translate(0, 0);
  }
  @media only screen and (max-width: 767px) {
  }
`;
const DivPlusTag = styled.div`
  display: flex;
  width: 54px;
  height: 31px;
  background-color: #37d243;
  border-radius: 30px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1370px) {
    width: 40px;
    height: 23px;
    font-size: 12px;
    letter-spacing: -0.48px;
  }
  @media only screen and (max-width: 767px) {
  }
`;

function SectionPlusGoods(props) {
  const [swiperPlusGoods, setSwiperPlusGoods] = useState([
    {
      index: 0,
      href: "",
      src: "/images/product/8806371301614.jpg",
      alt: "검은콩우유300ml",
      name: "푸르밀)검은콩우유300ml",
      price: "1,650",
      tag: "plus",
    },
    {
      index: 1,
      href: "",
      src: "/images/product/8801123103454.jpg",
      alt: "가나쵸코우유300ml",
      name: " 푸르밀)가나쵸코우유300ml",
      price: "1,650",
      tag: "plus",
    },
    {
      index: 2,
      href: "",
      src: "/images/product/8801051009033.jpg",
      alt: "초극세모칫솔",
      name: "46cm)초극세모칫솔",
      price: "3,500",
      tag: "plus",
    },
    {
      index: 3,
      href: "",
      src: "/images/product/8806403146473.jpg",
      alt: "치석케어치약",
      name: "메디안)치석케어치약",
      price: "4,500",
      tag: "plus",
    },
    {
      index: 4,
      href: "",
      src: "/images/product/8801042443631.jpg",
      alt: "센서티브칫솔",
      name: "메디안)센서티브칫솔",
      price: "3,000",
      tag: "plus",
    },
    {
      index: 5,
      href: "",
      src: "/images/product/8801046057216.jpg",
      alt: "칫솔",
      name: "2080)칫솔",
      price: "2,800",
      tag: "plus",
    },
    {
      index: 6,
      href: "",
      src: "/images/product/8801046846087.jpg",
      alt: "치약",
      name: "2080)치약",
      price: "3,500",
      tag: "plus",
    },
    {
      index: 7,
      href: "",
      src: "/images/product/8801046860458.jpg",
      alt: "센서티브미세모",
      name: "2080)센서티브미세모",
      price: "3,200",
      tag: "plus",
    },
    {
      index: 8,
      href: "",
      src: "/images/product/8801051152845.jpg",
      alt: "퍼퓸샴푸",
      name: "엘라스틴)퍼퓸샴푸",
      price: "10,900",
      tag: "plus",
    },
    {
      index: 9,
      href: "",
      src: "/images/product/8801051064223.jpg",
      alt: "토탈7치약",
      name: "페리오)토탈7치약",
      price: "3,900",
      tag: "plus",
    },
    {
      index: 10,
      href: "",
      src: "/images/product/8801051010367.jpg",
      alt: "이지클리닉칫솔",
      name: "페리오)이지클리닉칫솔",
      price: "2,200",
      tag: "plus",
    },
    {
      index: 11,
      href: "",
      src: "/images/product/4902430741880.jpg",
      alt: "다우니370ml",
      name: "뉴페브리즈)다우니370ml",
      price: "8,900",
      tag: "plus",
    },
    {
      index: 12,
      href: "",
      src: "/images/product/4902430311625.jpg",
      alt: "핑크1L",
      name: "다우니)핑크1L",
      price: "12,600",
      tag: "plus",
    },
    {
      index: 13,
      href: "",
      src: "/images/product/8801166222587.jpg",
      alt: "오가닉롱라이너18입",
      name: "좋은)오가닉롱라이너18입",
      price: "4,300",
      tag: "plus",
    },
    {
      index: 14,
      href: "",
      src: "/images/product/3014260844622.jpg",
      alt: "후레쉬칫솔",
      name: "오랄비)후레쉬칫솔",
      price: "2,000",
      tag: "plus",
    },
    {
      index: 15,
      href: "",
      src: "/images/product/8801094363000.jpg",
      alt: "파워에이드캔240ml",
      name: "코카)파워에이드캔240ml",
      price: "1,200",
      tag: "plus",
    },
    {
      index: 16,
      href: "",
      src: "/images/product/8806107612052.jpg",
      alt: "레디큐캔120ml",
      name: "한독)레디큐캔120ml",
      price: "5,000",
      tag: "plus",
    },
    {
      index: 17,
      href: "",
      src: "/images/product/8806403068379.jpg",
      alt: "데미지샴푸",
      name: "미쟝센)데미지샴푸",
      price: "15,000",
      tag: "plus",
    },
    {
      index: 18,
      href: "",
      src: "/images/product/8806403068409.jpg",
      alt: "데미지린스",
      name: "미쟝센)데미지린스",
      price: "15,000",
      tag: "plus",
    },
    {
      index: 19,
      href: "",
      src: "/images/product/8809299230820.jpg",
      alt: "수퍼롱와이드10입",
      name: "바디)수퍼롱와이드10입",
      price: "8,700",
      tag: "plus",
    },
  ]);

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const settings_plus_goods = {
    spaceBetween: 0,
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    loopedSlides: 20,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    scrollbar: { draggable: true, el: null },
    navigation: {
      nextEl: ".swiper_button_next_plus_goods",
      prevEl: ".swiper_button_prev_plus_goods",
    },
    pagination: {
      el: ".swiper_pagination_plus_goods",
      clickable: true,
    },
  };

  return (
    <Wrapper>
      <TitlePlusGoods>
        <HTitle>+1 증정 상품</HTitle>
        <AViewMore>
          <DisappearViewMore>증정상품&nbsp;</DisappearViewMore>모두보기
          <ImgViewMore />
        </AViewMore>
      </TitlePlusGoods>
      <DivPlusGoodss>
        <SwiperContainer>
          <Swiper
            className="swiper_container_plus_goods"
            breakpoints={{
              768: {
                spaceBetween: 0,
                slidesPerView: 4,
                slidesPerGroup: 4,
                scrollbar: { draggable: true, el: null },
                navigation: {
                  nextEl: ".swiper_button_next_plus_goods",
                  prevEl: ".swiper_button_prev_plus_goods",
                },
                pagination: {
                  el: ".swiper_pagination_plus_goods",
                  clickable: true,
                },
                slidesOffsetBefore: 0,
              },
              1371: {
                spaceBetween: 20,
                slidesPerView: "auto",
                slidesPerGroup: 4,
                scrollbar: { draggable: true, el: null },
                navigation: {
                  nextEl: ".swiper_button_next_plus_goods",
                  prevEl: ".swiper_button_prev_plus_goods",
                },
                pagination: {
                  el: ".swiper_pagination_plus_goods",
                  clickable: true,
                },
                slidesOffsetBefore: 10,
              },
            }}
            {...settings_plus_goods}
          >
            {swiperPlusGoods.map((idx) => (
              <SwiperSlide className="swiper_slide_plus_goods" key={idx.index}>
                <BgSwiperPlusGoods>
                  <ASwiperPlusGoods href={idx.href}>
                    <DivGoodsWrap>
                      <ImgSwiperPlusGoods src={idx.src} alt={idx.alt} />
                      <DivTextGoods>
                        <DivGoodsName>{idx.name}</DivGoodsName>
                        <DivGoodsPrice>
                          <Strong>{idx.price}</Strong>
                          <PWon>원</PWon>
                        </DivGoodsPrice>
                      </DivTextGoods>
                    </DivGoodsWrap>
                    <DivPlusTagWrap>
                      {idx.tag === "plus" ? (
                        <DivPlusTag>1+1</DivPlusTag>
                      ) : (
                        <></>
                      )}
                    </DivPlusTagWrap>
                  </ASwiperPlusGoods>
                </BgSwiperPlusGoods>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </DivPlusGoodss>
      <SwiperModule>
        <BtnSwiperPrev className="swiper_button_prev_plus_goods">
          <ImgSwiperPrev
            src="/images/main/btn_cu_event_prev.png"
            alt="btn_cu_event_prev"
          />
        </BtnSwiperPrev>
        <DivPagination>
          <div className="swiper_pagination_plus_goods"></div>
        </DivPagination>
        <BtnSwiperNext className="swiper_button_next_plus_goods">
          <ImgSwiperNext
            src="/images/main/btn_cu_event_next.png"
            alt="btn_cu_event_prev"
          />
        </BtnSwiperNext>
      </SwiperModule>
    </Wrapper>
  );
}

export default SectionPlusGoods;
