import React from "react";
import { createGlobalStyle } from "styled-components";
import releaseHead from "./components/releaseHead";

const GlobalStyle = createGlobalStyle`
  body{
    background : #222E38;
    width: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <releaseHead></releaseHead>
    </>
  );
}

export default App;
