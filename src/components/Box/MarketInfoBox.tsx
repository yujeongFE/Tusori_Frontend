import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
  @media (max-width: 768px) {
    height: 10.36vh;
    min-height: 111px;
    margin-top: 2.6vh;

    .slick-slide {
      margin-right: 5px;
    }

    .slick-slide:first-child {
      margin-right: 5px;
    }

    .slick-slide:last-child {
      margin-right: -10px;
    }
  }
`;

const MarketInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.5vw;
  height: 15.7vh;
  min-height: 170px;
  flex-shrink: 0;
  border-radius: 8px 8px 0px 0px;
  background: linear-gradient(to bottom, #4c4c4c 38px, #ffffff 38px);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  @media (max-width: 768px) {
    height: 10.36vh;
    min-height: 111px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #4c4c4c 29px, #ffffff 29px);
  }
`;

const Title = styled.div`
  color: #fff;
  font-family: Pretendard-Medium;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 9.5px;
  margin-left: 1vw;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    color: #fff;
    font-family: Pretendard-Bold;
    font-size: 14px;
    font-style: bold;
    font-weight: 800;
    line-height: normal;
    margin-top: 7px;
  }
`;

const CurrentIndex = styled.div`
  color: var(--Main-Font, #2a2a2a);
  text-align: center;
  font-family: Pretendard-Bold;
  font-size: 36px;
  font-style: normal;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1150px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 18px;
  }
`;

const ChangeIndex = styled.div`
  color: #f00;
  font-family: Pretendard-Medium;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1150px) {
    font-size: 18px;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 1.2vh;
  }
`;

const ChangePercent = styled.span`
  margin-left: 1.5vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: 4.26vw;
  }
`;

const ArrowImg = styled.img`
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
    margin-right: 1vw;
  }
`;

const Arrow: React.FC<{ value: string; percent: string }> = ({ value, percent }) => {
  const isPositive = parseFloat(value) >= 0;
  const arrowImage = isPositive ? `${process.env.PUBLIC_URL}/assets/Home/rising_arrow.svg` : `${process.env.PUBLIC_URL}/assets/Home/downward_arrow.svg`;
  const changeColor = isPositive ? "#f00" : "#0075FF";

  return (
    <ChangeIndex style={{ color: changeColor }}>
      {value !== "" && <ArrowImg src={arrowImage} alt={isPositive ? "Rising" : "Downward"} />}
      {value} {percent !== "" && <ChangePercent>{percent}%</ChangePercent>}
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

const MarketInfo: React.FC<MarketInfoProps> = ({ title, index, change, percent, style }) => {
  return (
    <MarketInfoBox style={style}>
      <Title>{title}</Title>
      <div style={{ margin: "auto" }}>
        <CurrentIndex>{index}</CurrentIndex>
        <ChangeIndex>
          <Arrow value={change} percent={percent} />
        </ChangeIndex>
      </div>
    </MarketInfoBox>
  );
};

interface MarketData {
  kospi?: { Close: number; Comp: number; Change: number };
  kosdaq?: { Close: number; Comp: number; Change: number };
  usdkrw_data?: { close_price: number; percentage_change: number; price_change: number };
}

const MarketInfoBoxContainer: React.FC<{ marketData: MarketData }> = ({ marketData }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태 추가
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    row: 1,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (marketData.kospi !== undefined && marketData.kosdaq !== undefined && marketData.usdkrw_data !== undefined) {
      setIsLoading(false);
    }
  }, [marketData]);

  const renderMarketBoxes = () => {
    if (isLoading) {
      // 데이터 로딩 중일 때
      const marketInfos = [
        { title: "코스피", index: "로딩 중..." },
        { title: "코스닥", index: "로딩 중..." },
        { title: "환율", index: "로딩 중..." },
      ];

      return (
        <Container>
          {isMobile ? (
            <Slider {...settings}>
              {marketInfos.map((info, index) => (
                <MarketInfo key={index} title={info.title} index={info.index} change="" percent="" style={{ marginRight: "1.3vw" }} />
              ))}
            </Slider>
          ) : (
            <div style={{ display: "flex" }}>
              {marketInfos.map((info, index) => (
                <MarketInfo key={index} title={info.title} index={info.index} change="" percent="" style={{ marginRight: "1.3vw" }} />
              ))}
            </div>
          )}
        </Container>
      );
    }

    const titles = ["코스피", "코스닥", "환율"];
    return titles.map((title, index) => {
      let indexData;
      let exchangeRate;

      switch (title) {
        case "코스피":
          indexData = marketData.kospi;
          break;
        case "코스닥":
          indexData = marketData.kosdaq;
          break;
        case "환율":
          exchangeRate = marketData.usdkrw_data;
          break;
        default:
          throw new Error("Title error");
      }

      const closeValue = title === "환율" ? exchangeRate?.close_price.toFixed(2) : indexData?.Close.toFixed(2);
      const changeValue = title === "환율" ? exchangeRate?.price_change.toFixed(2) : indexData?.Comp.toFixed(2);
      const percentValue = title === "환율" ? exchangeRate?.percentage_change.toFixed(2) : (indexData?.Change ?? 0 * 100).toFixed(2);

      return closeValue && changeValue && percentValue ? (
        <MarketInfo key={index} title={title} index={closeValue} change={changeValue} percent={percentValue} style={{ marginRight: "1.3vw" }} />
      ) : null;
    });
  };

  if (isMobile) {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      row: 1,
    };

    return <>{renderMarketBoxes()}</>;
  } else {
    return (
      <Container>
        <div style={{ display: "flex", marginTop: "36px" }}>{renderMarketBoxes()}</div>
      </Container>
    );
  }
};

export default MarketInfoBoxContainer;
