import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 278px;
  height: 34px;
  flex-shrink: 0;
  margin-top: 79px;
  margin-bottom: 7px;
  margin-left: 3%;
  border-radius: 30px;
  border: 2px solid #e5eafd;

  @media (max-width: 1132px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const ToggleButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    padding: 16px 0 14px 5px;
    cursor: pointer;
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

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (): void => {
    navigate(`/industry/${searchTerm}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <ToggleButton>
        <img src={`${process.env.PUBLIC_URL}/assets/Header/header_search.svg`} alt="search" />
      </ToggleButton>
      <SearchBarContainer>
        <Input
          type="text"
          placeholder="종목 검색하기"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 입력값 변경 시 상태 업데이트
          onKeyPress={handleKeyPress} // Enter 키 입력 처리
        />
        <SearchButton type="button" onClick={handleSearch}></SearchButton> {/* 검색 버튼 클릭 이벤트 처리 */}
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
