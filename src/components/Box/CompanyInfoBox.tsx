import React from "react";
import styled from "styled-components";
import Scrollbar from "../ScrollBar";
import { CompanyContent } from "api/industry/IndividualStockInfo";

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

interface CompanyInfoBoxProps {
  company_content: CompanyContent;
}

const CompanyInfoBox: React.FC<CompanyInfoBoxProps> = ({ company_content }) => {
  return (
    <StockInfoContainer>
      <Title>기업소개</Title>
      <Description>
        <Scrollbar>
          <p>분야: {company_content?.Industry}</p>
          <p>상장일: {company_content?.ListingDate}</p>
          <p>결산월: {company_content?.SettleMonth}</p>
          <p>대표자명: {company_content?.Representative}</p>
          <p>
            홈페이지:{" "}
            {company_content?.HomePage && (
              <Hyperlink href={company_content.HomePage} target="_blank" rel="noopener noreferrer">
                {company_content.HomePage}
              </Hyperlink>
            )}
          </p>
        </Scrollbar>
      </Description>
    </StockInfoContainer>
  );
};

export default CompanyInfoBox;
