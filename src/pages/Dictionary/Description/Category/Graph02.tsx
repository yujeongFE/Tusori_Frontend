import ToggleBox from "components/Dictionary/ToggleBox";
import React, { useState } from "react";
import { Title, Line, Container, ButtonWrapper, Button, DescriptBox, Word, Text } from "./Style";

const Graph01: React.FC = () => {
  const [description, setDescription] = useState<{ word: string; text: string } | null>(null);
  const [selectedBtn, setSelectedBtn] = useState<string | null>(null);
  const handleClick = (word: string, text: string) => {
    setDescription({ word, text });
    setSelectedBtn(word);
  };

  return (
    <Container>
      <Title>단기 이동평균선과 장기 이동평균선의 교차점</Title>
      <Line />
      <ButtonWrapper>
        <Button
          selected={selectedBtn === "단기 이동평균선"}
          onClick={() =>
            handleClick(
              "단기 이동평균선",
              "짧은 기간 동안의 주식 가격의 평균을 나타내는 지표로 보통 10일, 20일, 50일의 기간이 사용됩니다.\n짧은 기간 동안의 주식 가격 움직임을 반영하므로 주로 단기적인 추세를 확인하는 데에 이용됩니다.",
            )
          }
        >
          단기 이동평균선
        </Button>
        <Button
          selected={selectedBtn === "장기 이동평균선"}
          onClick={() =>
            handleClick(
              "장기 이동평균선",
              "긴 기간 동안의 주식 가격의 평균을 나타내는 지표로 보통 100일, 200일의 기간이 사용됩니다.\n장기적인 추세를 확인하는 데에 사용됩니다. ",
            )
          }
        >
          장기 이동평균선
        </Button>
      </ButtonWrapper>

      <DescriptBox>
        <Word>{description ? description.word : ""}</Word>
        <Text>{description ? description.text : ""}</Text>
      </DescriptBox>
      <Line />
      <ToggleBox content="두 이동평균선이 서로 만나는 지점의 교차점은 주식 시작에서의 추세 전환을 나타내는 중요한 신호로 간주됩니다. " />
    </Container>
  );
};

export default Graph01;
