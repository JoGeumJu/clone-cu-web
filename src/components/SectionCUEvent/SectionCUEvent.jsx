import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  width: 100%;
  height: auto;
  margin-bottom: 160px;
  // ★내부 설정★
  text-align: center;
  align-items: center;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    margin-bottom: 140px;
  }
  @media only screen and (max-width: 767px) {
    order: 3;
    margin-bottom: 78px;
    align-items: flex-start;
  }
`;
const DivCUEvents = styled.div`
  // ★레이아웃 설정★
  display: flex;
  position: relative;
  // ★박스 크기 및 여백 설정★
  margin: 0 auto;
  max-width: 725px;
  height: auto;
  // ★내부 설정★
  overflow: visible;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    max-width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 767px) {
    margin: 0;
    margin: 0 0 0 20px;
    width: 100%;
    overflow: hidden;
  }
`;
const SwiperContainer = styled.div`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: auto;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    max-width: 320px;
    overflow: visible;
  }
`;
const BtnSwiperPrev = styled.button`
  // ★레이아웃 설정★
  position: absolute;
  z-index: 5;
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
  z-index: 5;
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
const ASwiperEvent = styled.a`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 100%;
  // ★내부 설정★
  // ★행동 설정★
`;
const PictureSwiperEvent = styled.picture``;
const ImgSwiperEvent = styled.img`
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

function SectionCUEvent(props) {
  // 새로운 swiperEvent 추가는 여기서!!!
  const [swiperEvents, setSwiperEvents] = useState([
    {
      index: 0,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=830",
      src: `${"/images/newMain/9D0041FB3AE44A9B846E828792C97E00.png"}`,
      alt: "10월 행사 모아보기",
      src_mo: `${"/images/newMain/F15B69795E7F4F65B40DF946A2FD0476.png"}`,
    },
    {
      index: 1,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=831",
      src: `${"/images/newMain/E89A82A8B3A246E6B8AE85A31C62FEFE.png"}`,
      alt: "지금은 79(친구)타임",
      src_mo: `${"/images/newMain/E9DE3F1AC0784035B38987D4E7BCDAD5.png"}`,
    },
    {
      index: 2,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=832",
      src: `${"/images/newMain/D46F7D37DE06429B911326B4D31F912A.png"}`,
      alt: "베스트11Days 국가대표 1+1",
      src_mo: `${"/images/newMain/E87B4B44D19F4084AB4CDB09BAFEA2AB.png"}`,
    },
    {
      index: 3,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=833",
      src: `${"/images/newMain/BA66394DF9A4449EB57CD364468EDF66.png"}`,
      alt: "누구나 참여 가능한 키핑쿠폰 EVENT",
      src_mo: `${"/images/newMain/5A259FFBE8744CBD9510B59CF6641119.png"}`,
    },
    {
      index: 4,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=835",
      src: `${"/images/newMain/54E86F6306E74045A53EEAE6C0B69F57.png"}`,
      alt: "포켓CU 신규가입 이벤트",
      src_mo: `${"/images/newMain/EAD05FC7C53A4B3086B7E52A4F5E654D.png"}`,
    },
    {
      index: 5,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=836",
      src: `${"/images/newMain/046443794B974D6492CEE8D11ADBD959.png"}`,
      alt: "100% 당첨 출석룰렛",
      src_mo: `${"/images/newMain/976F0C8F0FCE454EABDFAEEF81AA513C.png"}`,
    },
    {
      index: 6,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=837",
      src: `${"/images/newMain/55F7EC2C21D14C85917B6919A42F4105.png"}`,
      alt: "단골점포 미션 최대 1,000p 추가 적립",
      src_mo: `${"/images/newMain/D547C2F198384697B9FF5B1BD527D38F.png"}`,
    },
    {
      index: 7,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=838",
      src: `${"/images/newMain/AFA7805C99A347BB87E0F02CC09DA2AA.png"}`,
      alt: "10월 간편한끼 6천원 할인",
      src_mo: `${"/images/newMain/700BFFA6921E4724857CFA4C39D9F6D9.png"}`,
    },
    {
      index: 8,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=839",
      src: `${"/images/newMain/F352B7359E6B4143A94858BD7CD9F957.png"}`,
      alt: "4천원 할인받고 편PICK하세요",
      src_mo: `${"/images/newMain/64EE6DB3A84143B1AEAA8E396A9A2A4B.png"}`,
    },
    {
      index: 9,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=840",
      src: `${"/images/newMain/AFE41117DCCA412198DAB15AE0AD7239.png"}`,
      alt: "대학생이라면? 매월 CU쿠폰이 쏟아져요",
      src_mo: `${"/images/newMain/606319B9EEEF472AB07C5399CF2A0C81.png"}`,
    },
    {
      index: 10,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=829",
      src: `${"/images/newMain/ECD75948058F4555A7AF737279721C52.png"}`,
      alt: "비닐봉투 사용금지 안내",
      src_mo: `${"/images/newMain/E7ADC74CB72B46F3904EAC55EFE64B4B.png"}`,
    }, // 마지막 swiperEvent
  ]);

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const settings_cu_event = {
    spaceBetween: 10,
    sliderperview: 3,
    loop: true,
    loopedSlides: 3,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    scrollbar: { draggable: true, el: null },
    navigation: {
      nextEl: ".swiper_button_next_cu_event",
      prevEl: ".swiper_button_prev_cu_event",
    },
    pagination: {
      el: ".swiper_pagination_cu_event",
      clickable: true,
    },
  };

  return (
    <Wrapper>
      <DivCUEvents>
        <SwiperContainer>
          <Swiper className="swiper_container_cu_event" {...settings_cu_event}>
            {swiperEvents.map((idx) => (
              <SwiperSlide className="swiper_slide_cu_event" key={idx.index}>
                <ASwiperEvent href={idx.href}>
                  <PictureSwiperEvent>
                    <source media="(min-width:768px)" srcSet={idx.src} />
                    <source media="(max-width:767px)" srcSet={idx.src_mo} />
                    <ImgSwiperEvent src={idx.src} alt={idx.alt} />
                  </PictureSwiperEvent>
                </ASwiperEvent>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
        <BtnSwiperPrev className="swiper_button_prev_cu_event">
          <ImgSwiperPrev
            src="/images/main/btn_cu_event_prev.png"
            alt="btn_cu_event_prev"
          />
        </BtnSwiperPrev>
        <BtnSwiperNext className="swiper_button_next_cu_event">
          <ImgSwiperNext
            src="/images/main/btn_cu_event_next.png"
            alt="btn_cu_event_prev"
          />
        </BtnSwiperNext>
      </DivCUEvents>
      <DivPagination>
        <div className="swiper_pagination_cu_event"></div>
      </DivPagination>
    </Wrapper>
  );
}

export default SectionCUEvent;
