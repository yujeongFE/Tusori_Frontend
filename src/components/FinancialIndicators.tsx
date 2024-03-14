import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 33vw;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  gap: 1.6vw;
  margin-top: 6.2vh;
`;

const Box = styled.div`
  width: 15.7vw;
  height: 13vh;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.14vw;
`;

const Title = styled.span`
  color: #575757;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2vh;
  align-items: left;
`;

const Subtitle = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
`;

const FinancialIndicators: React.FC = () => {
  return (
    <Container>
      <Box>
        <Title>시가총액</Title>
        <Subtitle>448조 ,307억</Subtitle>
      </Box>
      <Box>
        <Title>PBR(배)</Title>
        <Subtitle>1.44배</Subtitle>
      </Box>
      <Box>
        <Title>ROE(%)</Title>
        <Subtitle>3.24%</Subtitle>
      </Box>
      <Box>
        <Title>PER(배)</Title>
        <Subtitle>15.79배</Subtitle>
      </Box>
      <Box>
        <Title>외인보중 비율(%)</Title>
        <Subtitle>76,000</Subtitle>
      </Box>
      <Box>
        <Title>동일업종PER</Title>
        <Subtitle>30.06배</Subtitle>
      </Box>
      <Box>
        <Title>거래량</Title>
        <Subtitle>75,900</Subtitle>
      </Box>
      <Box>
        <Title>종가</Title>
        <Subtitle>76,000</Subtitle>
      </Box>
    </Container>
  );
};

export default FinancialIndicators;
