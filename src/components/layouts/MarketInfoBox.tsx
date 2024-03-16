import React from "react";
import styled from "styled-components";
import data from "../../json/MarketData.json";
import rising from "../../assets/rising_arrow.svg";
import downward from "../../assets/downward_arrow.svg";

const MarketInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.5vw;
  height: 15.6vh;
  min-width: 140px;
  min-height: 170px;
  flex-shrink: 0;
  padding-bottom: 10px;
  border-radius: 8px 8px 0px 0px;
  background: linear-gradient(to bottom, #4c4c4c 38px, #ffffff 38px);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);

  /* Title Style */
  .title {
    color: #fff;
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 9.5px;
    margin-left: 1vw;
    margin-bottom: 3.4vh;
  }

  @media (max-width: 767px) {
    /* 작은 화면일 때 스타일링 */
  }
`;

// 현재 수치 값
const CurrentIndex = styled.div`
  color: var(--Main-Font, #2a2a2a);
  text-align: center;
  font-family: Pretendard-Bold;
  font-size: 36px;
  font-style: normal;
  line-height: normal;
`;

// 변경된 수치 값
const ChangeIndex = styled.div`
  color: #f00;
  font-family: Pretendard-Medium;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  margin-top: 9.5px;
`;

// 변경된 퍼센트 값
const ChangePercent = styled.span`
  margin-left: 1.5vw;
`;

// 상하 변경 방향을 나타내는 화살표 및 변경된 수치 값 컴포넌트
const Arrow: React.FC<{ value: string; percent: string }> = ({ value, percent }) => {
  const isPositive = parseFloat(value) >= 0;
  const arrowImage = isPositive ? rising : downward;
  const changeColor = isPositive ? "#f00" : "#0075FF";

  return (
    <ChangeIndex style={{ color: changeColor }}>
      <img src={arrowImage} alt={isPositive ? "Rising" : "Downward"} style={{ marginRight: "5px" }} />
      {value} <ChangePercent>{percent}</ChangePercent>
    </ChangeIndex>
  );
};

interface MarketInfoProps {
  title: string;
  index: string;
  change: string;
  percent: string;
  style?: React.CSSProperties;
}

// 상자에 담긴 모든 정보들을 표시하는 컴포넌트
const MarketInfo: React.FunctionComponent<MarketInfoProps> = ({ title, index, change, percent, style }) => {
  return (
    <MarketInfoBox style={style}>
      <div className="title">{title}</div>
      <CurrentIndex>{index}</CurrentIndex>
      <ChangeIndex>
        <Arrow value={change} percent={percent} />
      </ChangeIndex>
    </MarketInfoBox>
  );
};

// 최종적인 박스 UI를 나타내는 컴포넌트
const MarketInfoBoxContainer: React.FC = () => {
  const titles = ["코스피", "코스닥", "코스피200", "코스피150", "KRX300"];
  const boxes = titles.map((title, index) => (
    <MarketInfo
      key={index}
      title={title}
      index={data.indices[index]}
      change={data.change[index]}
      percent={data.percent[index]}
      style={{ marginLeft: index === 0 ? "0vw" : "1.3vw" }}
    />
  ));

  return <div style={{ display: "flex", marginTop: "36px", width: "73vw" }}>{boxes}</div>;
};

export default MarketInfoBoxContainer;
