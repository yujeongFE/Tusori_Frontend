import React, { useEffect } from "react";
import SideMenu from "components/Dictionary/DictionaryMenu/SideMenu";
import DictMenu from "components/Dictionary/DictionaryMenu/DictMenu";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import { SideMenuContainer, Container, Content, ContentPadding, Title } from "../Style";
import { SearchBoxContainer, SearchBox, Input, SearchButton } from "./Style";

const Index: React.FC = () => {
  const { setWords } = useWords();
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
