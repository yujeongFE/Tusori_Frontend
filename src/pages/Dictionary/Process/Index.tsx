import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
//import styled from "styled-components";
import ProcessContent from "../../../components/ProcessContent";
import { SidebarContainer, Container, Content, Title } from "../../Dictionary/Style";
import { Button, ButtonsContainer, ButtonContainer, Span, Img } from "./Style";

const Index: React.FC = () => {
  const [stepKey, setStepKey] = useState<string>();

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setStepKey(name);
  };

  return (
    <Container>
      <SidebarContainer>
        <SideBar />
      </SidebarContainer>
      <Content>
        <Title>주식 투자 과정</Title>
        <ButtonsContainer>
          <ButtonContainer>
            <Button onClick={handleClickButton} selected={stepKey === "one"} name="one">
              <Span>01</Span>
              <br />
              계좌 개설하기
            </Button>
            <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
          </ButtonContainer>

          <ButtonContainer>
            <Button onClick={handleClickButton} selected={stepKey === "two"} name="two">
              <Span>02</Span>
              <br />
              원하는 종목 찾기
            </Button>
            <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
          </ButtonContainer>

          <ButtonContainer>
            <Button onClick={handleClickButton} selected={stepKey === "three"} name="three">
              <Span>03</Span>
              <br />
              분석하기
            </Button>
            <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
          </ButtonContainer>

          <ButtonContainer>
            <Button onClick={handleClickButton} selected={stepKey === "four"} name="four" style={{ marginRight: "0px" }}>
              <Span>04</Span>
              <br />
              동일 업종 비교하기
            </Button>
            <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
          </ButtonContainer>

          <ButtonContainer>
            <Button onClick={handleClickButton} selected={stepKey === "five"} name="five">
              <Span>05</Span>
              <br />
              매수하기
            </Button>
            <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
          </ButtonContainer>

          <ButtonContainer>
            <Button onClick={handleClickButton} selected={stepKey === "six"} name="six">
              <Span>06</Span>
              <br />
              동향 및 뉴스 분석하기
            </Button>
            <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
          </ButtonContainer>

          <ButtonContainer>
            <Button onClick={handleClickButton} selected={stepKey === "seven"} name="seven">
              <Span>07</Span>
              <br />
              매도하기
            </Button>
          </ButtonContainer>
        </ButtonsContainer>
        {stepKey && <ProcessContent stepKey={stepKey} />}
      </Content>
    </Container>
  );
};

export default Index;
