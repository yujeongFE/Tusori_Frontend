import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 97px;
  background-color: #eff2ff;
  border-radius: 4px;
  margin-bottom: 56px;
  position: relative;
  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;

const Searchbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 70%;
  height: 48px;
  background: #ffffff;
  flex-shrink: 0;
  border-radius: 40px;
  border: 2px solid var(--Main-Color, #708ffe);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.18);
`;

const Input = styled.input`
  margin-left: 24px;
  width: 80%;
  border: none;
  font-size: 18px;
  &::placeholder {
    color: #b0b0b0;
  }
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: url("${process.env.PUBLIC_URL}/assets/Dictionary/search_icon_grey.svg") no-repeat center center;
  background-size: cover;
  border: none;
  padding: 12px;
  margin-right: 24px;
  cursor: pointer;
`;

const SuggestionsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 65%;
  background: #ffffff;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 15;
  top: 79%;
  left: 17%;
`;

const SuggestionItem = styled.li`
  padding: 10px 24px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const SearchBox: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  const pagesToKeywords: { [key: string]: string[] } = {
    "/dict/words/지수": ["지수", "코스피", "코스닥", "코스피 200", "코스닥 150", "KRX 300"],
    "/dict/words/주식-차트-단어": ["주식 차트", "현재가", "전일비", "등락률", "거래량", "순매수호가잔량"],
    "/dict/words/주식-차트-그래프-01": [
      "주식 차트 그래프",
      "일봉",
      "주봉",
      "월봉",
      "시가",
      "고가",
      "저가",
      "종가",
      "이동 평균선",
      "거래량",
      "MACD",
      "RSI",
      "차트 패턴",
    ],
    "/dict/words/주식-차트-그래프-02": ["단기 이동평균선", "장기 이동평균선"],
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const allKeywords = Object.values(pagesToKeywords).flat();
    setSuggestions(value ? allKeywords.filter((kw) => kw.toLowerCase().includes(value.toLowerCase())) : []);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);

    // 키워드에 해당하는 페이지로 이동
    Object.entries(pagesToKeywords).forEach(([page, keywords]) => {
      if (keywords.includes(suggestion)) {
        navigate(page);
      }
    });
  };

  return (
    <SearchBoxContainer>
      <Searchbox>
        <Input type="text" placeholder="키워드를 입력해주세요" value={inputValue} onChange={handleInputChange} />
        <SearchButton onClick={() => handleSuggestionClick(inputValue)} />
      </Searchbox>
      {suggestions.length > 0 && (
        <SuggestionsList>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </SearchBoxContainer>
  );
};

export default SearchBox;
