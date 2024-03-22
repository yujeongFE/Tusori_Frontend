import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #2a2a2a;
  margin-bottom: 20px;
  text-align: left;
  width: 75%;
  @media (max-width: 768px) {
    margin-top: 44px;
  }
`;
export const LogsBtnContainer = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  margin-bottom: 20px;
`;

export const LogsBtn = styled.button<{ active: boolean }>`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "#2a2a2a" : "#B0B0B0")};
  font-size: 24px;
  outline: none;
`;

export const Bar = styled.div`
  width: 2px;
  height: 21px;
  background-color: #d9d9d9;
  margin: 0 15px;
`;
