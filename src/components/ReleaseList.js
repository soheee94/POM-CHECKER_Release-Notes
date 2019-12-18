import React, { useState } from "react";
import styled from "styled-components";
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

const releaseData = {
  Web: [
    {
      version: "2.5.1",
      date: "2019-11-25",
      release: true,
      changeLogs: [
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
    },
    {
      version: "2.5.0",
      date: "2019-11-24",
      release: false,
      changeLogs: [
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
    },
    {
      version: "2.5.0",
      date: "2019-11-24",
      release: false,
      changeLogs: [
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
      changeLogs: [
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
    },
    {
      version: "2.5.0",
      date: "2019-11-24",
      release: false,
      changeLogs: [
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
    },
    {
      version: "2.5.0",
      date: "2019-11-24",
      release: false,
      changeLogs: [
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
    },
    {
      version: "2.5.0",
      date: "2019-11-24",
      release: false,
      changeLogs: [
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
    },
    {
      version: "2.5.0",
      date: "2019-11-24",
      release: false,
      changeLogs: [
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
    },
    {
      version: "2.5.0",
      date: "2019-11-24",
      release: false,
      changeLogs: [
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
    },
    {
      version: "2.5.0",
      date: "2019-11-24",
      release: false,
      changeLogs: [
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
  Unity: []
};

function ReleaseList() {
  const [platformType, setPlatformType] = useState("Web");
  const [state, setState] = useState({
    items: releaseData[platformType].filter((item, index) => index < 5),
    hasMore: releaseData[platformType].length === 0 ? false : true,
    itemLength: 5
  });

  const onChange = e => {
    setPlatformType(e.target.value);
    setState({
      items: releaseData[e.target.value].filter((item, index) => index < 5),
      hasMore: releaseData[e.target.value].length === 0 ? false : true,
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
      {state.items.length !== 0 ? (
        <ReleaseListBlock>
          <InfiniteScroll
            dataLength={state.items.length}
            next={fetchMoreData}
            hasMore={state.hasMore}
            loader={<p style={{ textAlign: "center" }}>데이터를 불러오는 중</p>}
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
      ) : (
        <p style={{ textAlign: "center" }}>데이터가 존재 하지 않습니다.</p>
      )}
    </>
  );
}

export default ReleaseList;
