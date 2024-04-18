import React, { useState } from "react";
import ToggleBox from "components/Dictionary/ToggleBox";
import { Title, Line, Container, ButtonWrapper, Button, DescriptBox, Word, Text } from "./Style";

const StockIndex: React.FC = () => {
  const [description, setDescription] = useState<{ word: string; text: string } | null>(null);
  const [selectedBtn, setSelectedBtn] = useState<string | null>(null);
  const handleClick = (word: string, text: string) => {
    setDescription({ word, text });
    setSelectedBtn(word);
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
          selected={selectedBtn === "코스피 (KOSPI)"}
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
          selected={selectedBtn === "코스닥 (KOSDAQ)"}
          onClick={() =>
            handleClick(
              "코스닥 (KOSDAQ)",
              "코스닥은 기술 기업이나 중소기업 등 코스피에 비해 상장 규모가 작은 기업들을 중심으로하는 지수입니다. 주로 신생 기업이나 성장 가능성이 높은 기업들이 코스닥에 상장합니다. ",
            )
          }
        >
          코스닥
        </Button>
        <Button
          selected={selectedBtn === "코스피 200"}
          onClick={() => handleClick("코스피 200", "코스피 200은 코스피 시장에서 시가총액이 큰 200개의 기업들을 선정하여 구성된 지수입니다.")}
        >
          코스피 200
        </Button>
        <Button
          selected={selectedBtn === "코스닥 150"}
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
          selected={selectedBtn === "KRX 100"}
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
      <ToggleBox content="보통 코스피가 주요 대형 기업들의 시장을 나타내고, 코스닥은 신생 기업과 중소기업의 시장을 반영합니다. 따라서 일반적으로 경기가 좋을 때 코스피가 상승하며, 기술 기업이나 성장 기업에 대한 투자가 확대되면 코스닥도 함께 상승하는 경향이 있습니다. 또한 KRX300은 코스피와 코스닥을 함께 고려하여 시가총액이 큰 기업들을 중심으로 구성되어 한국 주식 시장 전반의 흐름을 파악하는 데 유용합니다." />
    </Container>
  );
};

export default StockIndex;
