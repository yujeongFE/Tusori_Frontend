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
    flex-direction: column;
    gap: 1rem; 
  }
`;

export const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 41.1vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  background: #fff;
  margin-top: 3.5vh;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 1.3vw;
  justify-content: center;
`;
