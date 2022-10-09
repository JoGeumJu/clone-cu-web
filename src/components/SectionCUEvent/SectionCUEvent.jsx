import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Wrapper = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  margin-bottom: 160px;
  // ★내부 설정★
  align-items: center;
  justify-content: center;
  // ★행동 설정★
`;
const DivCUEvents = styled.div`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  max-width: 725px;
  // ★내부 설정★
  // ★행동 설정★
`;
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
`;

function Header(props) {
  // 새로운 swiperEvent 추가는 여기서!!!
  const [swiperEvents, setSwiperEvents] = useState([
    {
      index: 0,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=830",
      src: `${
        process.env.PUBLIC_URL +
        "/images/newMain/9D0041FB3AE44A9B846E828792C97E00.png"
      }`,
      alt: "10월 행사 모아보기",
      src_mo: `${
        process.env.PUBLIC_URL +
        "/images/newMain/F15B69795E7F4F65B40DF946A2FD0476.png"
      }`,
    },
    {
      index: 1,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=831",
      src: `${
        process.env.PUBLIC_URL +
        "/images/newMain/E89A82A8B3A246E6B8AE85A31C62FEFE.png"
      }`,
      alt: "지금은 79(친구)타임",
      src_mo: `${
        process.env.PUBLIC_URL +
        "/images/newMain/E9DE3F1AC0784035B38987D4E7BCDAD5.png"
      }`,
    },
    {
      index: 2,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=832",
      src: `${
        process.env.PUBLIC_URL +
        "/images/newMain/D46F7D37DE06429B911326B4D31F912A.png"
      }`,
      alt: "베스트11Days 국가대표 1+1",
      src_mo: `${
        process.env.PUBLIC_URL +
        "/images/newMain/E87B4B44D19F4084AB4CDB09BAFEA2AB.png"
      }`,
    },
    {
      index: 3,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=833",
      src: `${
        process.env.PUBLIC_URL +
        "/images/newMain/BA66394DF9A4449EB57CD364468EDF66.png"
      }`,
      alt: "누구나 참여 가능한 키핑쿠폰 EVENT",
      src_mo: `${
        process.env.PUBLIC_URL +
        "/images/newMain/5A259FFBE8744CBD9510B59CF6641119.png"
      }`,
    },
    {
      index: 4,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=835",
      src: `${
        process.env.PUBLIC_URL +
        "/images/newMain/54E86F6306E74045A53EEAE6C0B69F57.png"
      }`,
      alt: "포켓CU 신규가입 이벤트",
      src_mo: `${
        process.env.PUBLIC_URL +
        "/images/newMain/EAD05FC7C53A4B3086B7E52A4F5E654D.png"
      }`,
    },
    {
      index: 5,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=836",
      src: `${
        process.env.PUBLIC_URL +
        "/images/newMain/046443794B974D6492CEE8D11ADBD959.png"
      }`,
      alt: "100% 당첨 출석룰렛",
      src_mo: `${
        process.env.PUBLIC_URL +
        "/images/newMain/976F0C8F0FCE454EABDFAEEF81AA513C.png"
      }`,
    },
    {
      index: 6,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=837",
      src: `${
        process.env.PUBLIC_URL +
        "/images/newMain/55F7EC2C21D14C85917B6919A42F4105.png"
      }`,
      alt: "단골점포 미션 최대 1,000p 추가 적립",
      src_mo: `${
        process.env.PUBLIC_URL +
        "/images/newMain/D547C2F198384697B9FF5B1BD527D38F.png"
      }`,
    },
    {
      index: 7,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=838",
      src: `${
        process.env.PUBLIC_URL +
        "/images/newMain/AFA7805C99A347BB87E0F02CC09DA2AA.png"
      }`,
      alt: "10월 간편한끼 6천원 할인",
      src_mo: `${
        process.env.PUBLIC_URL +
        "/images/newMain/700BFFA6921E4724857CFA4C39D9F6D9.png"
      }`,
    },
    {
      index: 8,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=839",
      src: `${
        process.env.PUBLIC_URL +
        "/images/newMain/F352B7359E6B4143A94858BD7CD9F957.png"
      }`,
      alt: "4천원 할인받고 편PICK하세요",
      src_mo: `${
        process.env.PUBLIC_URL +
        "/images/newMain/64EE6DB3A84143B1AEAA8E396A9A2A4B.png"
      }`,
    },
    {
      index: 9,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=840",
      src: `${
        process.env.PUBLIC_URL +
        "/images/newMain/AFE41117DCCA412198DAB15AE0AD7239.png"
      }`,
      alt: "대학생이라면? 매월 CU쿠폰이 쏟아져요",
      src_mo: `${
        process.env.PUBLIC_URL +
        "/images/newMain/606319B9EEEF472AB07C5399CF2A0C81.png"
      }`,
    },
    {
      index: 10,
      href: "https://cu.bgfretail.com/brand_info/news_view.do?category=brand_info&depth2=5&idx=829",
      src: `${
        process.env.PUBLIC_URL +
        "/images/newMain/ECD75948058F4555A7AF737279721C52.png"
      }`,
      alt: "비닐봉투 사용금지 안내",
      src_mo: `${
        process.env.PUBLIC_URL +
        "/images/newMain/E7ADC74CB72B46F3904EAC55EFE64B4B.png"
      }`,
    }, // 마지막 swiperEvent
  ]);

  SwiperCore.use([Navigation, Pagination]);

  return (
    <Wrapper>
      <DivCUEvents>
        <Swiper className="swiper_wrapper"
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          sliderPerview={"auto"}
          loop={true}
          scrollbar={{ draggable: true }}
          navigation={true}
          pagination={true}
          breakpoints={{ 768: {} }}
          on={{
            init: function () {},
          }}
        >
          {swiperEvents.map((idx) => (
            <SwiperSlide className="swiper_slide" key={idx.index} id={idx.index}>
              <ASwiperEvent href={idx.href}>
                <PictureSwiperEvent>
                  <source media="(min-width:768px)" srcSet={idx.src_mo} />
                  <source media="(max-width:767px)" srcSet={idx.src} />
                  <ImgSwiperEvent src={idx.src} alt={idx.alt} />
                </PictureSwiperEvent>
              </ASwiperEvent>
            </SwiperSlide>
          ))}
        </Swiper>
      </DivCUEvents>
    </Wrapper>
  );
}

export default Header;
