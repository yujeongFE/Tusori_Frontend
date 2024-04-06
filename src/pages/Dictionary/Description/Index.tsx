import React, { useEffect } from "react";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import { Title } from "../Style";

const Index: React.FC = () => {
  const { setWords } = useWords();
  useEffect(() => {
    setWords([{ word: "", description: "" }]);
  }, [setWords]);

  return (
    <>
      <Title>주식 용어 상세 설명</Title>
    </>
  );
};

export default Index;
