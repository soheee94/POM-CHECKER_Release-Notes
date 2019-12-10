import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ReleaseHead from "./components/ReleaseHead";
import ReleaseList from "./components/ReleaseList";

const GlobalStyle = createGlobalStyle`
  body{
    background : #222E38;
    width: 100%;
    font-family : 'Noto Sans KR', sans-serif !important;
    color : rgba(255, 255, 255, 0.5);
    font-size : 14px;
  }
`;

const ReleaseContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 500px;
  padding: 80px 0;

  @media only screen and (min-width: 768px) {
    width: 66%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ReleaseContainer>
        <ReleaseHead></ReleaseHead>
        <ReleaseList></ReleaseList>
      </ReleaseContainer>
    </>
  );
}

export default App;
