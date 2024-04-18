import React, { useState } from "react";
import ToggleBox from "components/Dictionary/ToggleBox";
import { Title, Line, Container, ButtonWrapper, Button, DescriptBox, Word, Text } from "./Style";

const Chart: React.FC = () => {
  const [description, setDescription] = useState<{ word: string; text: string } | null>(null);
  const [selectedBtn, setSelectedBtn] = useState<string | null>(null);
  const handleClick = (word: string, text: string) => {
    setDescription({ word, text });
    setSelectedBtn(word);
  };

  return (
    <Container>
      <Title>
        다음 값들은 일반적으로 주식 시세 차트에서 확인할 수 있는 정보로
        <br />
        이를 통해 투자자는 해당 주식의 현재 상황과 주식 시장의 흐름을 파악할 수 있습니다.
      </Title>
      <Line />
      <ButtonWrapper>
        <Button
          selected={selectedBtn === "현재가"}
          onClick={() => handleClick("현재가", "현재 해당 주식이 거래되는 가격으로, 이 값은 주식의 현재 가치를 나타냅니다.")}
        >
          현재가
        </Button>
        <Button
          selected={selectedBtn === "전일비"}
          onClick={() =>
            handleClick(
              "전일비",
              "현재가와 전일 종가 간의 차이를 의미합니다.\n양수일 경우 전일 대비 상승한 가격을, 음수일 경우 전일 대비 하락한 가격을 나타냅니다.",
            )
          }
        >
          전일비
        </Button>
        <Button
          selected={selectedBtn === "등락률"}
          onClick={() =>
            handleClick(
              "등락률",
              "(전일비/전일 종가)*100\n\n 주식의 등락 비율을 백분율로 표시한 값으로 전일 대비 주식 가격의 상승 또는 하락 정도를 보여줍니다.",
            )
          }
        >
          등락률
        </Button>
        <Button
          selected={selectedBtn === "거래량"}
          onClick={() =>
            handleClick(
              "거래량",
              "특정 기간 동안 거래된 주식의 수를 의미합니다.\n거래량은 주식 시장의 활발성을 나타내며, 많은 거래량은 주식 가격의 변동성이 높을 수 있음을 시사합니다.",
            )
          }
        >
          거래량
        </Button>
        <Button
          selected={selectedBtn === "순매수호가잔량"}
          onClick={() =>
            handleClick(
              "순매수호가잔량",
              "(현재 주식의 매수 호가) - (매도 호가)\n\n주식 시장에서 매수자들이 구매하고자 하는 주식의 수량을 의미하며, 매도자들이 판매하고자 하는 주식의 수량과 대조되는 값입니다.\n이 값이 양수인 경우, 현재 시장에서는 매수 주문이 매도 주문보다 많이 들어온 상태로 이는 매수자들이 더 많은 관심을 보이고 있음을 나타냅니다. 반대로 음수이니 경우 매도 주문이 매수 주문보다 많이 들어온 상태입니다.",
            )
          }
        >
          순매수호가잔량
        </Button>
      </ButtonWrapper>

      <DescriptBox>
        <Word>{description ? description.word : ""}</Word>
        <Text>{description ? description.text : ""}</Text>
      </DescriptBox>

      <Line />
      <ToggleBox content="위 값들과 더불어 시세 차트에서 거래량 그래프를 통해 주식의 거래 활동을 시각적으로 파악할 수 있습니다." />
    </Container>
  );
};

export default Chart;
