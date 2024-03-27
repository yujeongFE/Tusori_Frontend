import styled from "styled-components";

//버튼 전체
export const ButtonsContainer = styled.div`
  border-top: 2px solid #e3e3e3;
  border-bottom: 2px solid #e3e3e3;
  padding: 40px 0 16px 0;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 24px;
    border-top: none;
  }
`;

//버튼 + 화살표
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 16px 24px 0;

  @media (max-width: 964px) {
    margin: 0 5px 16px 0;
  }
  @media (max-width: 768px) {
    margin: 0 0 16px 0;
  }
`;

export const Br = styled.br`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button<{ selected: boolean }>`
  width: 190px;
  height: 100px;
  font-family: Pretendard-Medium;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  color: #2a2a2a;
  font-size: 20px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: background-color 0.3s;
  line-height: 150%;
  flex-shrink: 0;
  margin-right: 16px;
  &:hover {
    background-color: #eff2ff;
  }
  &:focus {
    background-color: #708ffe;
    color: #fff;
  }
  @media (max-width: 964px) {
    width: 17vw;
    height: 80px;
    font-size: 16px;
  }
  @media (max-width: 829px) {
    width: 16vw;
    height: 80px;
    font-size: 15px;
  }
  @media (max-width: 787px) {
    width: 15vw;
    height: 80px;
    font-size: 15px;
  }
  @media (max-width: 768px) {
    width: 34vw;
    height: 45px;
    font-size: 15px;
    text-align: left;
    padding-left: 2vw;
  }
  @media (max-width: 532px) {
    width: 33vw;
    height: 38px;
    font-size: 12px;
  }
  @media (max-width: 400px) {
    font-size: 10px;
    padding-left: 1vw;
  }
  @media (max-width: 320px) {
    width: 31vw;
    height: 35px;
    font-size: 9px;
  }
`;

export const Span = styled.span`
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 532px) {
    font-size: 12px;
  }
  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const Img = styled.img`
  width: 28px;
  @media (max-width: 768px) {
    display: none;
  }
`;
