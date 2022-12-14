import React from 'react';
import styled from 'styled-components';
import './App.css';

import Main from './pages/Main';

const Wrapper = styled.div`
  // ★레이아웃 설정★
  display:flex;
  flex-direction: column;
  // ★박스 크기 및 여백 설정★
  width:100vw;
  height:100vh;
  // ★내부 설정★
  // ★행동 설정★
`;

function App() {
  return (
    <Wrapper>
      <Main/>
    </Wrapper>
  );
}

export default App;
