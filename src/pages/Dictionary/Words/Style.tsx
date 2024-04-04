import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 97px;
  background-color: #eff2ff;
  border-radius: 4px;
  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;

export const SearchBox = styled.div`
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

export const Input = styled.input`
  margin-left: 24px;
  width: 80%;
  border: none;
  font-size: 18px;
  &::placeholder {
    color: #b0b0b0;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

export const SearchButton = styled.button`
  background: url("${process.env.PUBLIC_URL}/assets/Dictionary/search_icon_grey.svg") no-repeat center center;
  background-size: cover;
  border: none;
  padding: 12px;
  margin-right: 24px;
  cursor: pointer;
`;
