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

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9999;
  text-align: center; 
`;
