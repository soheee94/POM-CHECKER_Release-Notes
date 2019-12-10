import React, { useState } from "react";
import styled from "styled-components";
import ReleaseItem from "./ReleaseItem";

const PlatformButtonGroup = styled.div`
  padding: 20px;
  input {
    display: none;
    &:checked + label {
      color: #eb5244;
    }
  }
  label {
    margin-right: 30px;
    cursor: pointer;
  }
`;

const ReleaseListBlock = styled.div``;

function ReleaseList() {
  const [platformType, setPlatformType] = useState("Web");
  return (
    <>
      <PlatformButtonGroup>
        <input type="radio" name="platforms" id="Web" defaultChecked onChange={() => setPlatformType("Web")} />
        <label htmlFor="Web">Web</label>
        <input type="radio" name="platforms" id="Unity" onChange={() => setPlatformType("Unity")} />
        <label htmlFor="Unity">Unity</label>
      </PlatformButtonGroup>
      <ReleaseListBlock platformType={platformType}>
        <ReleaseItem></ReleaseItem>
        <ReleaseItem></ReleaseItem>
      </ReleaseListBlock>
    </>
  );
}

export default ReleaseList;
