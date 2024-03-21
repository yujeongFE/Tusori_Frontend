import React, { useState, useEffect } from "react";
import SideMenu from "components/Dictionary/DictionaryMenu/SideMenu";
import DictMenu from "components/Dictionary/DictionaryMenu/DictMenu";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
//import styled from "styled-components";
import ProcessContent from "../../../components/Dictionary/ProcessContent";
import { SideMenuContainer, Container, Content, ContentPadding, Title } from "../Style";
import { Button, ButtonsContainer, Br, ButtonContainer, Span, Img } from "./Style";

const Index: React.FC = () => {
  const [stepKey, setStepKey] = useState<string>();
  const { setWords } = useWords();

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setStepKey(name);
  };

  const [isInvestMode, setIsInvesteMode] = useState<boolean>(false);
  const handleModeChange = (checked: boolean) => {
    setIsInvesteMode(checked);
    if (checked) {
      setIsOpen(true);
    }
  };

  //주식용어설명 사이드바
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setWords([{ word: "", description: "" }]);
  }, [setWords]);

  return (
    <Container>
      <SideMenuContainer>
        <SideMenu />
      </SideMenuContainer>
      <Content>
        <DictMenu />

        <ContentPadding>
          <Title>주식 투자 과정</Title>
          <ButtonsContainer>
            <ButtonContainer>
              <Button onClick={handleClickButton} selected={stepKey === "one"} name="one">
                <Span>01</Span>
                <Br /> 계좌 개설하기
              </Button>
              <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
            </ButtonContainer>

            <ButtonContainer>
              <Button onClick={handleClickButton} selected={stepKey === "two"} name="two">
                <Span>02</Span>
                <Br /> 원하는 종목 찾기
              </Button>
              <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
            </ButtonContainer>

            <ButtonContainer>
              <Button onClick={handleClickButton} selected={stepKey === "three"} name="three">
                <Span>03</Span>
                <Br /> 분석하기
              </Button>
              <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
            </ButtonContainer>

            <ButtonContainer>
              <Button onClick={handleClickButton} selected={stepKey === "four"} name="four">
                <Span>04</Span>
                <Br /> 동일 업종 비교하기
              </Button>
              <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
            </ButtonContainer>

            <ButtonContainer>
              <Button onClick={handleClickButton} selected={stepKey === "five"} name="five">
                <Span>05</Span>
                <Br /> 매수하기
              </Button>
              <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
            </ButtonContainer>

            <ButtonContainer>
              <Button onClick={handleClickButton} selected={stepKey === "six"} name="six">
                <Span>06</Span>
                <Br /> 동향 및 뉴스 분석하기
              </Button>
              <Img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
            </ButtonContainer>

            <ButtonContainer>
              <Button onClick={handleClickButton} selected={stepKey === "seven"} name="seven">
                <Span>07</Span>
                <Br /> 매도하기
              </Button>
            </ButtonContainer>
          </ButtonsContainer>
          {stepKey && <ProcessContent stepKey={stepKey} />}
        </ContentPadding>
      </Content>
    </Container>
  );
};

export default Index;
