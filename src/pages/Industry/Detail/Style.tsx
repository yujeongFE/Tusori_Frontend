import styled from "styled-components";

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 13.5vw;
  @media (max-width: 768px) {
    padding: 0 12vw;
    padding-bottom: 8.7vh;
  }
`;

export const Message = styled.div`
  color: #5076ff;
  padding-left: 15vw;
  padding-top: 5.27vh;
  font-family: Pretendard-Medium;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 1550px) {
    padding-left: 16vw;
  }
  @media (max-width: 1100px) {
    padding-left: 17vw;
  }
  @media (max-width: 768px) {
    width: auto;
    padding-left: 0vw;
    text-align: center;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`;

export const TableContainer = styled.div`
  width: auto;
  margin-top: 30px;
`;
