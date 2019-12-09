import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ReleaseHead from "./components/ReleaseHead";
import ReleaseList from "./components/ReleaseList";

const GlobalStyle = createGlobalStyle`
  body{
    background : #222E38;
    width: 100%;
    font-family : 'Noto Sans KR', sans-serif !important;
  }
`;

const ReleaseContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 500px;
  width: 66%;
  padding: 100px 0;
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
