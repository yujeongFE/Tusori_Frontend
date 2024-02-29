import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
//import styled from "styled-components";
import ProcessContent from "../../../components/ProcessContent";
import { SidebarContainer, Container, Content, Title } from "../../Dictionary/Style";

interface ContentItem {
  number: string;
  content: string;
}

const Index: React.FC = () => {
  const [numberKey, setNumberKey] = useState<string>();

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setNumberKey(name);
  };

  return (
    <Container>
      <SidebarContainer>
        <SideBar />
      </SidebarContainer>
      <Content>
        <Title>주식 투자 과정</Title>
        <button onClick={handleClickButton} name="one">
          Page 1
        </button>
        <button onClick={handleClickButton} name="two">
          Page 2
        </button>
        <button onClick={handleClickButton} name="three">
          Page 3
        </button>
        <button onClick={handleClickButton} name="four">
          Page 4
        </button>
        <button onClick={handleClickButton} name="five">
          Page 5
        </button>
        <button onClick={handleClickButton} name="six">
          Page 6
        </button>
        <button onClick={handleClickButton} name="seven">
          Page 7
        </button>
        {numberKey && <ProcessContent numberKey={numberKey} />}
      </Content>
    </Container>
  );
};

export default Index;
