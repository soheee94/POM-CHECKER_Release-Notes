import React, { useState } from "react";
import styled, { css } from "styled-components";
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
    font-size: 14px;
  }
`;

function ReleaseList() {
  const [platformType, setPlatformType] = useState("Web");
  return (
    <>
      <PlatformButtonGroup platformType={platformType}>
        <input type="radio" name="platforms" id="Web" defaultChecked onChange={() => setPlatformType("Web")} />
        <label htmlFor="Web">Web</label>
        <input type="radio" name="platforms" id="Unity" onChange={() => setPlatformType("Unity")} />
        <label htmlFor="Unity">Unity</label>
      </PlatformButtonGroup>
      <div>
        <ReleaseItem></ReleaseItem>
        <ReleaseItem></ReleaseItem>
      </div>
    </>
  );
}

export default ReleaseList;
