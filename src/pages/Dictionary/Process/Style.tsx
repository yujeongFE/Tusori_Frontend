import styled from "styled-components";

export const Button = styled.button<{ selected: boolean }>`
  width: 220px;
  height: 100px;
  border: none;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? "#708FFE" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#2A2A2A")};
  margin-right: 16px;
  margin-bottom: 24px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: background-color 0.3s;

  //버튼 누르면 색상 변경
  &:focus {
    outline: none;
  }
`;
