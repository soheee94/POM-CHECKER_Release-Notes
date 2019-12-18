import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  padding: 25px;
  .badge {
    flex: 0 0 75px;
    border-radius: 5px;
    color: white;
    width: 75px;
    height: 30px;
    line-height: 30px;
    display: block;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.08em;
  }
  .release-badge {
    background: #d59545;
    margin-bottom: 10px;
    font-size: 12px;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  .version-badge {
    background: #eb5244;

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

const ItemChangeLogs = styled.div`
  margin-left: 0px;
  div {
    display: flex;
    @media only screen and (min-width: 768px) {
      display: block;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-left: 95px;
  }

  .change-badge {
    background: #495f70;
    height: 25px;
    line-height: 25px;
    margin-right: 20px;
    font-size: 10px;
    letter-spacing: 0.15em;
    margin-bottom: 20px;
    border-radius: 3px;
    font-weight: normal;
  }
  ul {
    margin: 0 0 40px 0;
    padding: 0;
    list-style-type: none;

    li {
      margin-bottom: 20px;

      p {
        margin-top: 0;
        font-size: 16px;
      }
      span {
        display: block;
        margin-bottom: 5px;
      }

      img {
        display: block;
        margin-top: 10px;
      }
    }
  }
`;

function ReleaseItem({ version, date, changeLogs, release }) {
  return (
    <ItemContainer>
      {release && <span className="release-badge badge">RELEASE</span>}
      <ItemHeader>
        <span className="version-badge badge">{version}</span>
        <div className="date">{date}</div>
      </ItemHeader>
      <ItemChangeLogs>
        {changeLogs.map((log, index) => (
          <div key={index}>
            <span className="badge change-badge"> {log.type}</span>
            <ul>
              {log.list.map((item, index) => (
                <li key={index}>
                  <p>
                    {index + 1}. {item.title}
                  </p>
                  {item.description &&
                    item.description.split("\n").map((line, index) => {
                      return <span key={index}>{line}</span>;
                    })}
                  {item.image && <img src={item.image} alt="상세 이미지" />}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ItemChangeLogs>
    </ItemContainer>
  );
}

export default React.memo(ReleaseItem);
