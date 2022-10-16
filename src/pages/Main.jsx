import React from "react";
import styled from "styled-components";

import FixedBanner from "../components/FixedBanner/FixedBanner";
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
  return (
    <Wrapper id="wrap" className="main">
      {/* FixedBanner 활성화·비활성화 가능 */}
      <FixedBanner />
      {/* FixedBanner 유무 시 scroll 옵션 설정 */}
      <Header style={{ zIndex: "130" }} />
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
    </Wrapper>
  );
}

export default Main;
