import styled from "styled-components";

export const FlexBox = styled.div`
  padding: 0 13.5vw;
  padding-bottom: 15.8vh;

  @media (max-width: 768px) {
    padding: 0 12vw;
    padding-bottom: 8.7vh;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.14vw;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
