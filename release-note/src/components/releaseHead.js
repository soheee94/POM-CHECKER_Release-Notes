import React from "react";
import logo from "../asset/logo.png";
import styled from "styled-components";

const ReleaseHeadBlock = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  img {
    width: 130px;
  }
  p {
    color: white;
    font-size: 32px;
    line-height: 32px;
    margin-top: 15px;
    margin-bottom: 20px;
    letter-spacing: 0.08em;
    font-weight: 300;
  }
`;

function ReleaseHead() {
  return (
    <ReleaseHeadBlock>
      <img src={logo} />
      <p>Release notes</p>
    </ReleaseHeadBlock>
  );
}

export default ReleaseHead;
