import React, { useState } from "react";
import styled from "styled-components";

import Banner from "../pages/Banner";
import TogglePc from "../components/TogglePc/TogglePc";
import ToggleMo from "../components/ToggleMo/ToggleMo";
import Header from "../components/Header/Header";
import SectionCUStory from "../components/SectionCUStory/SectionCUStory";
import SectionCUEvent from "../components/SectionCUEvent/SectionCUEvent";
import SectionHotIssue from "../components/SectionHotIssue/SectionHotIssue";
import SectionCUApp from "../components/SectionCUApp/SectionCUApp";
import SectionPlusGoods from "../components/SectionPlusGoods/SectionPlusGoods";
import SectionNowNeed from "../components/SectionNowNeed/SectionNowNeed";
import SectionInfoBanner from "../components/SectionInfoBanner/SectionInfoBanner";
import SectionSearchCU from "../components/SectionSearchCU/SectionSearchCU";
import SectionStory from "../components/SectionStory/SectionStory";
import SectionCUStore from "../components/SectionCUStore/SectionCUStore";

const Wrapper = styled.div`
  // ★레이아웃 설정★
  display: flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  width: 100%;
  // ★내부 설정★
  // ★행동 설정★
`;

function Main(props) {
  // ToggleMenu Click Event
  const [isToggle, setIsToggle] = useState(false);
  const getIsToggle = (isToggle) => {
    setIsToggle(isToggle);
  };

  return (
    <Wrapper id="wrap" className="main">
      {/* FixedBanner 활성화·비활성화 가능 */}
      <Banner />
      <Header getIsToggle={getIsToggle} style={{ zIndex: "130" }} />
      <SectionCUStory />
      <SectionCUEvent style={{ zIndex: "100" }} />
      <SectionHotIssue style={{ zIndex: "100" }} />
      <SectionCUApp />
      <SectionPlusGoods style={{ zIndex: "100" }} />
      <SectionNowNeed />
      <SectionInfoBanner />
      <SectionSearchCU />
      <SectionStory />
      <SectionCUStore />
      {/* Toggle Popup Page */}
      <TogglePc isToggle={isToggle} getIsToggle={getIsToggle} />
      <ToggleMo isToggle={isToggle} getIsToggle={getIsToggle} />
    </Wrapper>
  );
}

export default Main;
