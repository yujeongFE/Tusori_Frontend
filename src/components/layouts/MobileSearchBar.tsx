import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import sectors from "json/sector.json";

const SearchBarContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    width: 90%;
    height: 34px;
    flex-shrink: 0;
    border-radius: 30px;
    border: 2px solid #e5eafd;
  }
`;

const Input = styled.input`
  margin: 0 18px;
  width: 78%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 15px;
  border-radius: 30px;
  margin-right: 0px;
  cursor: pointer;
`;

const Img = styled.img``;

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
  top: 110px;
  left: 9.5%;
`;

const SuggestionItem = styled.li`
  padding: 7px 18px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
  @media (max-width: 270px) {
    font-size: 11px;
  }
`;

const MobileSearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [sector, setSector] = useState<string>("");
  const navigate = useNavigate();
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  // 검색어 리스트 방향키로 조정
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 40) {
      event.preventDefault();
      setSuggestionIndex((prevIndex) => Math.min(prevIndex + 1, suggestions.length - 1));
    } else if (event.keyCode === 38) {
      event.preventDefault();
      setSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.keyCode === 13) {
      event.preventDefault();
      handleSuggestionClick(suggestions[suggestionIndex]);
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
            <SuggestionItem
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ backgroundColor: index === suggestionIndex ? "#eee" : "transparent" }}
            >
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
      <SearchButton type="button" onClick={handleSearch}>
        <Img src={`${process.env.PUBLIC_URL}/assets/Header/search_icon.png`} />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default MobileSearchBar;
