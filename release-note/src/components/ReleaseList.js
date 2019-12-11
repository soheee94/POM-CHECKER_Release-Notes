import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ReleaseItem from "./ReleaseItem";
import InfiniteScroll from "react-infinite-scroll-component";

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

async function getReleaseData() {
  const response = await axios.get(`http://pomchecker.com/release-note/data.json`);
  return response.json();
}

const releaseData = getReleaseData();
console.log(releaseData);

function ReleaseList() {
  const [platformType, setPlatformType] = useState("Web");
  const [state, setState] = useState({
    items: releaseData[platformType].filter((item, index) => index < 5),
    hasMore: true,
    itemLength: 5
  });

  const onChange = e => {
    setPlatformType(e.target.value);
    setState({
      items: releaseData[e.target.value].filter((item, index) => index < 5),
      hasMore: true,
      itemLength: 5
    });
  };

  const fetchMoreData = () => {
    if (state.items.length >= releaseData[platformType].length) {
      setState({ ...state, hasMore: false });
      return;
    }
    setTimeout(() => {
      const addItemLength = state.itemLength + 5;
      setState({
        ...state,
        items: state.items.concat(
          releaseData[platformType].filter(
            (item, index) => index < addItemLength && index >= state.itemLength
          )
        ),
        itemLength: addItemLength
      });
    }, 1500);
  };

  return (
    <>
      <PlatformInputGroup>
        <input
          type="radio"
          name="platforms"
          value="Web"
          id="Web"
          checked={platformType === "Web"}
          onChange={onChange}
        />
        <label htmlFor="Web">Web</label>
        <input
          type="radio"
          name="platforms"
          value="Unity"
          id="Unity"
          checked={platformType === "Unity"}
          onChange={onChange}
        />
        <label htmlFor="Unity">Unity</label>
      </PlatformInputGroup>
      <ReleaseListBlock>
        <InfiniteScroll
          dataLength={state.items.length}
          next={fetchMoreData}
          hasMore={state.hasMore}
          loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        >
          {state.items.map((release, index) => (
            <ReleaseItem
              key={index}
              version={release.version}
              date={release.date}
              changeLogs={release.changeLogs}
              release={release.release}
            ></ReleaseItem>
          ))}
        </InfiniteScroll>
      </ReleaseListBlock>
    </>
  );
}

export default ReleaseList;
