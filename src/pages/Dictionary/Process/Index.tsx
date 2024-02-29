import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
//import styled from "styled-components";
import ProcessContent from "../../../components/ProcessContent";
import { SidebarContainer, Container, Content, Title } from "../../Dictionary/Style";
import { Button } from "./Style";

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
        <Button onClick={handleClickButton} selected={stepKey === "one"} name="one">
          01
          <br />
          계좌 개설하기
        </Button>
        <Button onClick={handleClickButton} selected={stepKey === "two"} name="two">
          02
          <br />
          원하는 종목 찾기
        </Button>
        <Button onClick={handleClickButton} selected={stepKey === "three"} name="three">
          03
          <br />
          분석하기
        </Button>
        <Button onClick={handleClickButton} selected={stepKey === "four"} name="four">
          04
          <br />
          동일 업종 비교하기
        </Button>
        <Button onClick={handleClickButton} selected={stepKey === "five"} name="five">
          05
          <br />
          매수하기
        </Button>
        <Button onClick={handleClickButton} selected={stepKey === "six"} name="six">
          06
          <br />
          동향 및 뉴스 분석하기
        </Button>
        <Button onClick={handleClickButton} selected={stepKey === "seven"} name="seven">
          07
          <br />
          매도하기
        </Button>
        {stepKey && <ProcessContent stepKey={stepKey} />}
      </Content>
    </Container>
  );
};

export default Index;
