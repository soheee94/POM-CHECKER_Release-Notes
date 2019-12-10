import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  padding: 20px;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  .version {
    background: #eb5244;
    border-radius: 5px;
    color: white;
    width: 75px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-weight: 500;
    margin-right: 20px;
  }
  .date {
    font-size: 16px;
    letter-spacing: 0.08em;
    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

const ItemIssues = styled.div`
  margin-left: 95px;
  ul {
    margin: 0 0 40px 0;
    padding: 0;
    span {
      background: #495f70;
      border-radius: 3px;
      width: 75px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      margin-right: 15px;
      font-size: 10px;
      display: inline-block;
      letter-spacing: 0.15em;
    }

    li {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
    }
  }
`;

function ReleaseItem({ version, date, issues, release }) {
  return (
    <ItemContainer>
      <ItemHeader>
        <span className="version">{version}</span>
        <div className="date">{date}</div>
      </ItemHeader>
      <ItemIssues>
        {issues.map((issue, index) => (
          <ul key={index}>
            <span> {issue.type}</span>
            {issue.list.map((item, index) => (
              <li key={index}>
                {index + 1}. {item.text}
                {item.image && <img src={item.image} alt="상세 이미지" />}
              </li>
            ))}
          </ul>
        ))}
      </ItemIssues>
    </ItemContainer>
  );
}

export default ReleaseItem;
