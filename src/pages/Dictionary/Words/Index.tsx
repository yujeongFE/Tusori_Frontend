import React from "react";
import SideBar from "../../../components/SideBar";
import { SidebarContainer, Container, Content, Title } from "../Style";
import { SearchBoxContainer, SearchBox, Input, SearchButton } from "./Style";

const Index: React.FC = () => {
  return (
    <Container>
      <SidebarContainer>
        <SideBar />
      </SidebarContainer>
      <Content>
        <Title>주식 용어 설명</Title>
        <SearchBoxContainer>
          <SearchBox>
            <Input type="text" placeholder="키워드를 입력해주세요" />
            <SearchButton type="submit"></SearchButton>
          </SearchBox>
        </SearchBoxContainer>
      </Content>
    </Container>
  );
};

export default Index;
