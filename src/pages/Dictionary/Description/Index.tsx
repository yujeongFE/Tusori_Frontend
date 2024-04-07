import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import StockIndex from "./Category/StockIndex";
import Chart from "./Category/Chart";
import Graph01 from "./Category/Graph01";
import Graph02 from "./Category/Graph02";

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
        return <Graph01 />;
      case "주식-차트-그래프-02":
        return <Graph02 />;
      default:
        return <p>내용이 없습니다.</p>;
    }
  };

  return <div>{category ? renderContent(category) : <p>No category selected</p>}</div>;
};

export default Index;
