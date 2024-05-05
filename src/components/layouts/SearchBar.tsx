import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 278px;
  height: 34px;
  flex-shrink: 0;
  margin-top: 79px;
  margin-bottom: 7px;
  margin-left: 1%;
  border-radius: 30px;
  border: 2px solid #e5eafd;

  @media (max-width: 1132px) {
    width: 60%;
  }
  @media (max-width: 854px) {
    width: 55%;
    height: 30px;
  }
  @media (max-width: 816px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Input = styled.input`
  margin: 0 18px;
  width: 80%;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 13px;
  color: #abb4da;
  &::placeholder {
    color: #abb4da;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

const SearchButton = styled.button`
  background: rgba(255, 255, 255, 0.8) url("${process.env.PUBLIC_URL}/assets/Header/search_icon.png") no-repeat center center;
  background-size: cover;
  border: none;
  padding: 12px;
  border-radius: 30px;
  margin-right: 10px;
  cursor: pointer;
`;

const SuggestionsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: auto;
  background: rgba(255, 255, 255);
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  top: 120px;
`;
const SuggestionItem = styled.li`
  padding: 7px 18px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null); // Store timer ID

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerId = setTimeout(() => {
      search();
    }, 500);

    setTimerId(newTimerId);
  };

  const sector = "1차 비철금속 제조업";

  const search = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/fastapi/sic/${encodeURIComponent(sector)}`);
      const searchData: { Name: string }[] = response.data;

      // 입력한 검색어와 Name에 있는 값들 중 동일한 값이 있는지 확인
      const matchingNames = searchData.filter((item) => item.Name.includes(inputValue)).map((item) => item.Name);

      console.log("Matching Names:", matchingNames);
      setSuggestions(matchingNames);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);

    navigate(`/industry/${suggestion}`, { state: { sector: sector, name: suggestion } });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    navigate(`/industry/${inputValue}`, { state: { sector: sector, name: inputValue } });
  };

  return (
    <SearchBarContainer>
      <Input type="text" placeholder="종목 검색하기" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      {suggestions.length > 0 && (
        <SuggestionsList>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
      <SearchButton type="button" onClick={handleSearch}></SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
