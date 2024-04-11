import React from "react";
import styled from "styled-components";

const AlarmBoxContainer = styled.div`
  width: 20%;
  height: 370px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 130px;
  z-index: 10;
  padding: 20px;
  @media (max-width: 900px) {
    width: 200px;
    height: 350px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Pretendard-Bold;
  margin-bottom: 10px;
`;

const AlarmContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const AlarmBox: React.FC = () => {
  return (
    <AlarmBoxContainer>
      <Title>알림</Title>
      <AlarmContainer>새로운 알림이 없습니다.</AlarmContainer>
    </AlarmBoxContainer>
  );
};

export default AlarmBox;
