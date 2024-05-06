import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import sectors from "json/sector.json";

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
  const [sector, setSector] = useState<string>("");
  const navigate = useNavigate();
  const suggestionsRef = useRef<HTMLUListElement>(null);

  // 외부클릭 감지
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 리스트 외부 클릭을 처리
  const handleClickOutside = (e: MouseEvent) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)) {
      setSuggestions([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/\s+/g, "");
    setInputValue(value);
    search(value);
  };

  const search = (value: string) => {
    const matchingNames: string[] = [];
    const matchingSectors: string[] = [];
    for (const [sector, names] of Object.entries(sectors)) {
      if (Array.isArray(names)) {
        names.forEach((name) => {
          if (name.toLowerCase().replace(/\s+/g, "").startsWith(value)) {
            matchingNames.push(name);
            matchingSectors.push(sector);
          }
        });
      }
    }
    setSuggestions(matchingNames);
    if (matchingSectors.length > 0) {
      setSector(matchingSectors[0]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    navigate(`/industry/${suggestion}`, { state: { sector: sector, name: suggestion } });
    setSuggestions([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    navigate(`/industry/${inputValue}`, { state: { sector: sector, name: inputValue } });
    setSuggestions([]);
  };

  return (
    <SearchBarContainer>
      <Input type="text" placeholder="종목 검색하기" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      {suggestions.length > 0 && (
        <SuggestionsList ref={suggestionsRef}>
          {" "}
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
