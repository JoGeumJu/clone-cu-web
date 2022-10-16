import React, { useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";

const Wrapper = styled.section`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: auto;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    order: 11;
  }
`;
const DivCUStores = styled.div`
  // ★레이아웃 설정★
  display: flex;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: 1420px;
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    height: auto;
  }
`;
const DivPagination = styled.div`
  // ★레이아웃 설정★
  display: flex;
  position: absolute;
  z-index: 6;
  // ★박스 크기 및 여백 설정★
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  // ★내부 설정★
  // ★행동 설정★
  @media only screen and (max-width: 767px) {
    bottom: 20px;
  }
`;
// swiper-slides
const ASwiperCUStore = styled.a`
  // ★레이아웃 설정★
  display: flex;
  position: relative;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  // ★내부 설정★
  // ★행동 설정★
`;
const TitleSwiperCUStore = styled.h3`
  // ★레이아웃 설정★
  display: flex;
  position: absolute;
  z-index: 5;
  // ★박스 크기 및 여백 설정★
  padding: 10px 15px;
  // ★내부 설정★
  top: 772px;
  left: 80px;
  background: rgba(0, 0, 0, 0.4);
  font-size: 64px;
  color: #fff;
  line-height: 1.38;
  align-items: flex-start;
  // ★행동 설정★
  @media only screen and (max-width: 1370px) {
    top: 54.36%;
    font-size: 52px;
  }
  @media only screen and (max-width: 767px) {
    top: 157px;
    left: 20px;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.96px;
  }
`;
const PictureSwiperCUStore = styled.picture``;
const ImgSwiperCUStore = styled.img`
  // ★레이아웃 설정★
  // ★박스 크기 및 여백 설정★
  width: 100%;
  height: 100%;
  // ★내부 설정★
  object-fit: cover;
  // ★행동 설정★
`;

function SectionCUStore(props) {
  // 새로운 swiperCUStore 추가는 여기서!!!
  const [swiperCUStores, setSwiperCUStores] = useState([
    {
      index: 0,
      src: `${"/images/main/cu_storebg_202207_03.png"}`,
      src_mo: `${"/images/main/cu_storebg_202207_03_mo.png"}`,
      alt: "cu_store_01",
    },
    {
      index: 1,
      src: `${"/images/main/cu_storebg_202203_01.jpg"}`,
      src_mo: `${"/images/main/cu_storebg_202203_01_mo.jpg"}`,
      alt: "cu_store_02",
    },
    {
      index: 2,
      src: `${"/images/main/cu_storebg_202203_02.jpg"}`,
      src_mo: `${"/images/main/cu_storebg_202203_02_mo.jpg"}`,
      alt: "cu_store_03",
    },
    {
      index: 3,
      src: `${"/images/main/cu_storebg_202203_03.jpg"}`,
      src_mo: `${"/images/main/cu_storebg_202203_03_mo.jpg"}`,
      alt: "cu_store_04",
    },
  ]);

  SwiperCore.use([Pagination, Autoplay]);
  const settings_cu_store = {
    spaceBetween: 0,
    sliderperview: 1,
    loop: true,
    loopedSlides: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    scrollbar: { draggable: true, el: null },
    pagination: {
      el: ".swiper_pagination_cu_store",
      clickable: true,
    },
  };

  return (
    <Wrapper>
      <DivCUStores>
        <Swiper className="swiper_container_cu_store" {...settings_cu_store}>
          {swiperCUStores.map((idx) => (
            <SwiperSlide className="swiper_slide_cu_store" key={idx.index}>
              <ASwiperCUStore>
                <PictureSwiperCUStore>
                  <source media="(min-width:768px)" srcSet={idx.src} />
                  <source media="(max-width:767px)" srcSet={idx.src_mo} />
                  <ImgSwiperCUStore src={idx.src} />
                </PictureSwiperCUStore>
                <TitleSwiperCUStore>
                  고객과 사회에 좋은 친구,
                  <br />
                  BGF리테일의 편의점 브랜드
                  <br />
                  CU입니다.
                </TitleSwiperCUStore>
              </ASwiperCUStore>
            </SwiperSlide>
          ))}
          <DivPagination>
            <div className="swiper_pagination_cu_store"></div>
          </DivPagination>
        </Swiper>
      </DivCUStores>
    </Wrapper>
  );
}

export default SectionCUStore;
