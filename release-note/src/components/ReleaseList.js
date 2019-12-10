import React, { useState } from "react";
import styled from "styled-components";
import ReleaseItem from "./ReleaseItem";

const PlatformInputGroup = styled.div`
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

const ReleaseListBlock = styled.div`
  position: relative;
  &:before {
    content: "";
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    );
    width: 3px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc((75px / 2) + 25px);
    z-index: -1;
  }
`;

const releases = {
  Web: [
    {
      version: "2.5.1",
      date: "2019-11-25",
      release: true,
      issues: [
        {
          type: "NEW",
          list: [
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: require("../asset/logo.png") },
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: require("../asset/logo.png") }
          ]
        },
        {
          type: "UPDATE",
          list: [
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: "" },
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: "" }
          ]
        }
      ]
    },
    {
      version: "2.5.0",
      date: "2019-11-24",
      release: false,
      issues: [
        {
          type: "NEW",
          list: [
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: "../asset/logo.png" },
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: "../asset/logo.png" }
          ]
        },
        {
          type: "UPDATE",
          list: [
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: "" },
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: "" }
          ]
        }
      ]
    }
  ],
  Unity: [
    {
      version: "1.8.2",
      date: "2018-10-01",
      release: true,
      issues: [
        {
          type: "NEW",
          list: [
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: require("../asset/logo.png") },
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: require("../asset/logo.png") }
          ]
        },
        {
          type: "UPDATE",
          list: [
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: "" },
            { text: "어쩌고 저쩌고, ㅎㅎㅎ" },
            { text: "저쩌고 저쩌꼬 22", image: "" }
          ]
        }
      ]
    }
  ]
};

function ReleaseList() {
  const [platformType, setPlatformType] = useState("Web");
  return (
    <>
      <PlatformInputGroup>
        <input
          type="radio"
          name="platforms"
          id="Web"
          defaultChecked
          onChange={() => setPlatformType("Web")}
        />
        <label htmlFor="Web">Web</label>
        <input type="radio" name="platforms" id="Unity" onChange={() => setPlatformType("Unity")} />
        <label htmlFor="Unity">Unity</label>
      </PlatformInputGroup>
      <ReleaseListBlock>
        {releases[platformType].map((release, index) => (
          <ReleaseItem
            key={index}
            version={release.version}
            date={release.date}
            issues={release.issues}
            release={release.release}
          ></ReleaseItem>
        ))}
      </ReleaseListBlock>
    </>
  );
}

export default ReleaseList;
