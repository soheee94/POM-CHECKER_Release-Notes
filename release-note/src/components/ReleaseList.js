import React, { useState } from "react";
import styled, { css } from "styled-components";
import ReleaseItem from "./ReleaseItem";

const PlatformButtonGroup = styled.div`
  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    color: white;
    font-family: "Noto Sans KR", sans-serif !important;
    &:hover {
      color: #eb5244;
    }

    ${props =>
      props.platformType === props.type ||
      css`
        color: #eb5244;
      `}
  }
`;

function ReleaseList() {
  const [platformType, setPlatformType] = useState("");
  console.log(platformType);
  return (
    <>
      <PlatformButtonGroup>
        <button type="Web" platformType={platformType} onClick={() => setPlatformType("Web")}>
          Web
        </button>
        <button type="Unity" platformType={platformType} onClick={() => setPlatformType("Unity")}>
          Unity
        </button>
      </PlatformButtonGroup>
      <div>
        <ReleaseItem></ReleaseItem>
        <ReleaseItem></ReleaseItem>
      </div>
    </>
  );
}

export default ReleaseList;
