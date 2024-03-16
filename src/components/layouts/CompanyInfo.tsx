import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const StockInfoContainer = styled.div`
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  width: 100%;
  height: 44.9vh;
  padding: 0 1.66vw;
  display: flex;
  flex-direction: column;
  margin-top: 1.77vh;
`;

const Title = styled.h2`
  color: #000;
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 11.9vh;
  border: 0.4px solid #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 10.8vw;
  height: 6.4vh;
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  flex-shrink: 0;
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
  overflow: auto;
`;

const CompanyInfo: React.FC = () => {
  return (
    <StockInfoContainer>
      <Title>기업소개</Title>
      <LogoContainer>
        <Logo src={logo}></Logo>
      </LogoContainer>
      <Description>
        <p>삼성전자는 대한민국의 반도체, 전자제품, 디스플레이와 통신장비, 전자 부품들을 설계, 제조하는 종합 반도체 기업으로 한국의 수원에 본사를 두고 있다.</p>
        삼성전자는 대한민국의 반도체, 전자제품, 디스플레이와 통신장비, 전자 부품들을 만든다.
      </Description>
    </StockInfoContainer>
  );
};

export default CompanyInfo;
