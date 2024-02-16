import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    width: 278px;
    height: 34px;
    flex-shrink: 0;
    margin-top: 79px;
    margin-bottom: 7px;
    margin-left: 22px;
    border-radius: 30px;
    border: 2px solid #E5EAFD;
`;

const Input = styled.input`
    margin: 0 18px;
    width: 200px;
    background: rgba(255, 255, 255, 0.80);
    border: none;
    font-size: 13px;
    color: #ABB4DA;
    &::placeholder {
        color: #ABB4DA;
    }
    &:focus {
        outline: none;
        border: none;
    }
`;

const SearchButton = styled.button`
    background: rgba(255, 255, 255, 0.80) url('${process.env.PUBLIC_URL}/assets/search_icon.png') no-repeat center center;
    background-size: cover;
    border: none;
    padding: 12px;
    cursor: pointer;
`;


const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Input type="text" placeholder="종목 검색하기" />
      <SearchButton type="submit"></SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
