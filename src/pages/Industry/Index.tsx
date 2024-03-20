import React, { useEffect } from "react";
import { FlexBox } from "./Style";
import IndustrySectorBox from "components/Box/IndustrySectorBox";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";

const Index = () => {
  const { setWords } = useWords();

  useEffect(() => {
    setWords([
      { word: "전일비", description: "전일 대비 현재 시세의 변동 폭" },
    ]);
  }, [setWords]);

  return (
    <FlexBox>
      <IndustrySectorBox></IndustrySectorBox>
    </FlexBox>
  );
};

export default Index;
