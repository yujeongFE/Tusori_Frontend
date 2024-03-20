import React from "react";
import SideMenu from "components/DictionaryMenu/SideMenu";
import DictMenu from "components/DictionaryMenu/DictMenu";
import { SideMenuContainer, Container, Content, ContentPadding, Title } from "../Style";
import { SearchBoxContainer, SearchBox, Input, SearchButton } from "./Style";

const Index: React.FC = () => {
  return (
    <Container>
      <SideMenuContainer>
        <SideMenu />
      </SideMenuContainer>
      <Content>
        <DictMenu />
        <ContentPadding>
          <Title>주식 용어 설명</Title>
          <SearchBoxContainer>
            <SearchBox>
              <Input type="text" placeholder="키워드를 입력해주세요" />
              <SearchButton type="submit"></SearchButton>
            </SearchBox>
          </SearchBoxContainer>
          
        </ContentPadding>
      </Content>
    </Container>
  );
};

export default Index;
