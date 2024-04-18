import ToggleBox from "components/Dictionary/ToggleBox";
import React, { useState } from "react";
import styled from "styled-components";
import { Title, Line, Container, ButtonWrapper, Button, DescriptBox, Word, Text } from "./Style";

const Img = styled.img`
  width: 70%;
  height: auto;
  margin-bottom: 50px;
`;

const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  background-color: #f2f2f2;
  width: 90%;
  padding-right: 5%;
  border-radius: 30px;
  margin-bottom: 50px;
`;

const Li = styled.li`
  font-size: 19px;
  margin-bottom: 20px;
  list-style-type: none;
`;

const Span = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-position: under;
`;

const P = styled.p`
  font-size: 15px;
  margin-left: 40px;
  font-color: #727272;
`;

const Graph01: React.FC = () => {
  const [description, setDescription] = useState<{ word: string; text: string } | null>(null);
  const [selectedBtn, setSelectedBtn] = useState<string | null>(null);
  const handleClick = (word: string, text: string) => {
    setDescription({ word, text });
    setSelectedBtn(word);
  };

  return (
    <Container>
      <Img src={`${process.env.PUBLIC_URL}/assets/Dictionary/Words/stock_graph.png`} />
      <Title>
        위와 같은 주식 차트 그래프를 통해 가격의 움직임을 파악할 수 있습니다.
        <br />
        아래의 정보를 종합적으로 파악하여 주식 시장의 흐름을 이해하고 투자 결정을 내려야합니다.
      </Title>
      <Line />
      <ButtonWrapper>
        <Button
          selected={selectedBtn === "일봉/주봉/월봉"}
          onClick={() =>
            handleClick(
              "일봉/주봉/월봉",
              "일봉은 하루 동안의 가격 움직임을, 주봉은 일주일 동안의 가격 움직임을, 월봉은 한 달 동안의 가격 움직임을 보여줍니다.\n주식의 단기적인 흐름을 파악하는 데 이용됩니다.",
            )
          }
        >
          일봉/주봉/월봉
        </Button>
        <Button
          selected={selectedBtn === "시가/고가/저가"}
          onClick={() =>
            handleClick(
              "시가/고가/저가",
              "시가는 특정 기간 동안 가장 처음 거래된 가격을, 고가는 가장 높은 가격을, 저가는 가장 낮은 가격을 의미합니다. \n 해당 기간 동안 주식의 가격 흐름을 파악하는데 이용됩니다.",
            )
          }
        >
          시가/고가/저가
        </Button>
        <Button
          selected={selectedBtn === "종가"}
          onClick={() =>
            handleClick(
              "종가",
              "주식 거래 기간의 마지막 거래일에 주식이 마감한 가격을 의미합니다.\n해당 기간 동안의 주식 가격 움직임을 나타내는 중요한 지표 중 하나입니다.",
            )
          }
        >
          종가
        </Button>
      </ButtonWrapper>

      <DescriptBox>
        <Word>{description ? description.word : ""}</Word>
        <Text>{description ? description.text : ""}</Text>
      </DescriptBox>
      <Line />
      <ToggleBox content="주식 차트 그래프를 보면 주식 가격의 움직임뿐만 아니라 이동평균선, 거래량, MACD, RAI 등의 기술적 지표와 차트 패턴을 통해 트렌드와 투자 신호를 파악할 수 있습니다. 또한 차트 패턴의 분석을 통해 지지선과 저항선을 확인하여 향후 가격 움직임을 예측할 수 있습니다.">
        <MoreInfo>
          <ul>
            <Li>• 이동 평균선</Li>
            <ul>
              <Li>
                특정 기간 동안 주식 가격의 평균을 계산한 선으로, 주로 주가의 추세를 확인하는 데 사용됩니다. 이때,{" "}
                <Span>단기 이동평균선과 장기 이동 평균선의 교차점</Span>은 주가의 추세 전환을 나타낼 수 있습니다.
              </Li>
            </ul>
            <br />
            <Li> • 거래량</Li>
            <ul>
              <Li>
                특정 기간 동안 거래된 주식의 수량을 나타냅니다. 거래량이 증가하면 주가의 움직임이 강화될 가능성이 있고, 거래량이 감소하면 주가의 움직임이 약화될
                가능성이 있습니다.
              </Li>
            </ul>
            <br />
            <Li> • MACD (Movind Average Convergence Divergence)</Li>
            <ul>
              <Li>
                이동평균선의 변화를 분석하여 추세의 강도와 방향성을 파악하는 지표로, <Span>MACD 선과 시그널 선의 교차점 및 이동평균선과의 거리</Span>를 통해
                매수 및 매도 신호를 파악할 수 있습니다.
              </Li>
            </ul>
            <br />
            <Li> • RSI (Relative Strength Index)</Li>
            <ul>
              <Li>
                주식의 상대적 강도를 나타내는 지표로, <Span>과매수과 과매도 상태</Span>를 파악하는 데 사용됩니다.{" "}
              </Li>
              <Li>RSI 값이 70 이상이면 과매수 상태를, 30 이하이면 과매도 상태를 나타냅니다. </Li>
            </ul>
            <br />
            <Li>• 차트 패턴</Li>
            <ul>
              <Li>주식 차트에서 나타나는 특정한 형태의 패턴을 분석하여 향후 가격 움직임을 예측하는 데 사용됩니다. </Li>
              <Li>
                주요 차트 패턴으로는 <Span>상승 삼각형, 하락 삼각형, 이중 맨위, 이중 맨 아래</Span> 등이 있습니다.{" "}
              </Li>
            </ul>
          </ul>
          <P>* 밑줄 추가설명 → 주식 차트 그래프 02 </P>
        </MoreInfo>
      </ToggleBox>
    </Container>
  );
};

export default Graph01;
