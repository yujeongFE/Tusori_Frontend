import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: Pretendard-Medium;
`;

const Line = styled.div`
  width: 100%;
  margin: 56px 0 56px 0;
  border-top: 2px solid #e3e3e3;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    margin: 0 15px 10px 15px;
  }

  @media (max-width: 1378px) {
    & > * {
      margin: 0 5px 10px 5px;
    }
  }
`;

const Button = styled.button`
  color: #fff;
  font-size: 20px;
  padding: 10px 28px;
  font-family: Pretendard-Medium;
  border: none;
  border-radius: 40px;
  background: #d9d9d9;

  &:hover {
    cursor: pointer;
    background: #708ffe;
  }

  @media (max-width: 1378px) {
    font-size: 18px;
  }
`;

const DescriptBox = styled.div`
  width: 100%;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 57px;
`;

const Word = styled.div`
  color: #2a2a2a;
  font-size: 28px;
  font-family: Pretendard-Medium;
  margin: 50px 0 21px 0;
`;

const Text = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 0 10% 0 10%;
  margin-bottom: 47px;
  white-space: pre-wrap;
`;

const StockIndex: React.FC = () => {
  const [description, setDescription] = useState<{ word: string; text: string } | null>(null);
  const handleClick = (word: string, text: string) => {
    setDescription({ word, text });
  };

  return (
    <Container>
      <Title>
        다음은 한국 주식 시장에서 사용되는 다양한 지수들입니다.
        <br />
        각각의 지수들은 특정한 주식 시장의 동향을 나타내며, 서로 다른 종목들의 가격 움직임을 종합적으로 표현합니다.
      </Title>
      <Line />
      <ButtonWrapper>
        <Button
          onClick={() =>
            handleClick(
              "코스피 (KOSPI)",
              "코스피는 한국 증권거래소에 상장된 대표적인 기업들의 가격 변동을 추적하는 지수로 한국의 대형 기업들을 대상으로 합니다.\n종합주가지수로서 한국 주식 시장의 일반적인 동향을 보여줍니다.",
            )
          }
        >
          코스피
        </Button>
        <Button
          onClick={() =>
            handleClick(
              "코스닥 (KOSDAQ)",
              "코스닥은 기술 기업이나 중소기업 등 코스피에 비해 상장 규모가 작은 기업들을 중심으로하는 지수입니다. 주로 신생 기업이나 성장 가능성이 높은 기업들이 코스닥에 상장합니다. ",
            )
          }
        >
          코스닥
        </Button>
        <Button onClick={() => handleClick("코스피 200", "코스피 200은 코스피 시장에서 시가총액이 큰 200개의 기업들을 선정하여 구성된 지수입니다.")}>
          코스피 200
        </Button>
        <Button
          onClick={() =>
            handleClick(
              "코스닥 150",
              "코스피 200과 유사하게 코스피 150은 코스닥 시장에서 상장된 기업들 중 시가총액이 큰 상위 150개 기업을 선정하여 구성된 지수입니다.",
            )
          }
        >
          코스닥 150
        </Button>
        <Button
          onClick={() =>
            handleClick(
              "KRX 300",
              "KRX300은 한국 증권거래소에 상장된 모든 기업들 중 상위 300개 기업을 선택하여 구성된 지수입니다. 이는 코스피와 코스닥을 모두 포함하여, 한국 주식 시장 전반의 상황을 반영합니다.",
            )
          }
        >
          KRX 300
        </Button>
      </ButtonWrapper>

      <DescriptBox>
        <Word>{description ? description.word : ""}</Word>
        <Text>{description ? description.text : ""}</Text>
      </DescriptBox>

      <Line />
    </Container>
  );
};

export default StockIndex;
