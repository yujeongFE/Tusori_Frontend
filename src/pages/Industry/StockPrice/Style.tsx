import styled from "styled-components";

export const FlexBox = styled.div`
  padding: 0 13.5vw;
  margin-bottom: 20vh;
  @media (max-width: 768px) {
    padding: 0 12vw;
    margin-bottom: 10vh;
  }
`;
export const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.35vw;
`;

export const Table = styled.div`
  margin-top: 4vh;
  @media (max-width: 768px) {
    margin-top: 2.44vw;
  }
`;
