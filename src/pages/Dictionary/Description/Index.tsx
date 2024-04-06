import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import StockIndex from "./StockIndex";
import Chart from "./Chart";

const Index: React.FC = () => {
  const { setWords } = useWords();
  const { category } = useParams<{ category: string }>();

  useEffect(() => {
    setWords([{ word: "", description: "" }]);
  }, [setWords]);

  const renderContent = (category: string) => {
    switch (category) {
      case "지수":
        return <StockIndex />;
      case "주식-차트-단어":
        return <Chart />;
      case "주식-차트-그래프-01":
        return <p>주식 차트 그래프</p>;
      case "주식-차트-그래프-02":
        return <p>주식 차트 그래프2</p>;
      default:
        return <p>내용이 없습니다.</p>;
    }
  };

  return <div>{category ? renderContent(category) : <p>No category selected</p>}</div>;
};

export default Index;
