import React from "react";
import SideBar from "../../../components/SideBar";
import { SidebarContainer, Container, Content, Title } from "../../Dictionary/Style";

const Index = () => {
  return (
    <Container>
      <SidebarContainer>
        <SideBar />
      </SidebarContainer>
      <Content>
        <Title>주식 용어 설명</Title>
      </Content>
    </Container>
  );
};

export default Index;
