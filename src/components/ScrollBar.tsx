import styled from "styled-components";

const Scrollbar = styled.div`
  max-height: 304px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #e9e9e9;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbcbcb;
    border-radius: 20px;
  }
`;

export default Scrollbar;
