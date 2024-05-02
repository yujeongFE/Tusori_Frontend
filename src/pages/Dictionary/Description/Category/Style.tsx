import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

//맨 위에 있는 설명
export const Title = styled.div`
  font-size: 20px;
  font-family: Pretendard-Medium;
  @media (max-width: 550px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const Line = styled.div`
  width: 100%;
  margin: 56px 0 56px 0;
  border-top: 2px solid #e3e3e3;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    margin: 0 15px 10px 15px;
  }

  @media (max-width: 1378px) {
    & > * {
      margin: 0 5px 10px 5px;
    }
  }
`;

export const Button = styled.button<{ selected: boolean }>`
  color: #fff;
  font-size: 20px;
  padding: 10px 28px;
  font-family: Pretendard-Medium;
  border: none;
  border-radius: 40px;
  background: #d9d9d9;
  ${({ selected }) =>
    selected &&
    css`
      background: #708ffe;
    `}

  &:hover {
    cursor: pointer;
    background: #708ffe;
  }

  @media (max-width: 1378px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

export const DescriptBox = styled.div`
  width: 100%;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 57px;
`;

// DescriptBox의 단어
export const Word = styled.div`
  color: #2a2a2a;
  font-size: 28px;
  font-family: Pretendard-Medium;
  margin: 50px 0 21px 0;
  @media (max-width: 550px) {
    font-size: 25px;
  }
  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

// DescriptBox의 설명
export const Text = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 0 10% 0 10%;
  margin-bottom: 47px;
  white-space: pre-wrap;
  @media (max-width: 550px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;
