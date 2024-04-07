import ToggleBox from "components/Dictionary/ToggleBox";
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

const Graph01: React.FC = () => {
  const [description, setDescription] = useState<{ word: string; text: string } | null>(null);
  const handleClick = (word: string, text: string) => {
    setDescription({ word, text });
  };

  return (
    <Container>
      <Title>단기 이동평균선과 장기 이동평균선의 교차점</Title>
      <Line />
      <ButtonWrapper>
        <Button
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
