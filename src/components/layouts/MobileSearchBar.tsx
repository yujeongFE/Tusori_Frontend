import React, { useState } from "react";
import styled from "styled-components";

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

const MobileSearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (): void => {
    window.location.href = `/industry/${searchTerm}`;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchBarContainer>
      <Input type="text" placeholder="종목 검색하기" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress} />
      <SearchButton type="button" onClick={handleSearch}>
        <Img src={`${process.env.PUBLIC_URL}/assets/Header/search_icon.png`} />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default MobileSearchBar;
