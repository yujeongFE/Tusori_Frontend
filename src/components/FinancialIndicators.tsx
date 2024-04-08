import React from "react";
import styled from "styled-components";
import NumberBtn from "components/Dictionary/NumberBtn";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";

const Container = styled.div`
  width: 38vw;
  height: 60vh;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  gap: 1.6vh;
  margin-top: 6.2vh;
`;

const Box = styled.div`
  width: 15.7vw;
  height: 14vh;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.14vw;
`;

const Title = styled.span`
  color: #575757;
  font-family: Pretendard-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2vh;
  align-items: left;
`;

const Subtitle = styled.span`
  color: #000;
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
`;

const FinancialIndicators: React.FC = () => {
  const { isOpen } = useWords();

  return (
    <Container>
      <Box>
        <Title>{isOpen ? <NumberBtn number={11} /> : null}시가총액</Title>
        <Subtitle>448조 ,307억</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={12} /> : null}PBR(배)</Title>
        <Subtitle>1.44배</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={13} /> : null}ROE(%)</Title>
        <Subtitle>3.24%</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={14} /> : null}PER(배)</Title>
        <Subtitle>15.79배</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={15} /> : null}외인보중 비율(%)</Title>
        <Subtitle>76,000</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={16} /> : null}동일업종PER</Title>
        <Subtitle>30.06배</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={17} /> : null}거래량</Title>
        <Subtitle>75,900</Subtitle>
      </Box>
      <Box>
        <Title>{isOpen ? <NumberBtn number={18} /> : null}종가</Title>
        <Subtitle>76,000</Subtitle>
      </Box>
    </Container>
  );
};

export default FinancialIndicators;
