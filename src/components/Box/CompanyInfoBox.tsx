import React from "react";
import styled from "styled-components";
import Scrollbar from "../ScrollBar";

const StockInfoContainer = styled.div`
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  width: 17.4vw;
  height: 44.9vh;
  padding: 0 2vw;
  display: flex;
  flex-direction: column;
  margin-top: 1.77vh;

  @media (max-width: 768px) {
    width: 95%;
    height: auto;
    margin-top: 0px;
  }
`;

const Title = styled.h2`
  color: #000;
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    margin-top: 1.7vh;
    font-size: 14px;
  }
`;

const Description = styled.span`
  color: #000;
  font-family: Pretendard-Light;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.48px;
  margin-top: 5vh;
  @media (max-width: 768px) {
    margin-top: 0px;
    font-size: 12px;
    margin-bottom: 1.7vh;
  }
`;

const Hyperlink = styled.a`
  color: #007bff;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

const CompanyInfoBox: React.FC = () => {
  return (
    <StockInfoContainer>
      <Title>기업소개</Title>
      <Description>
        <Scrollbar>
          <p>분야: 제철 철강</p>
          <p>상장일: 2024.05.09</p>
          <p>결산월: 12월</p>
          <p>대표자명: 한종희, 경계현,</p>
          <p>
            홈페이지:{" "}
            <Hyperlink href={"https://www.samsung.com/sec/"} target="_blank" rel="noopener noreferrer">
              {"https://www.samsung.com/sec/"}
            </Hyperlink>
          </p>
        </Scrollbar>
      </Description>
    </StockInfoContainer>
  );
};

export default CompanyInfoBox;
