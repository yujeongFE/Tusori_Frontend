import React, { useRef } from "react";
import styled from "styled-components";
import { useWords } from "./WordsContext";

const SideBarWrap = styled.div<{ isOpen: boolean }>`
  z-index: 20;
  border-radius: 16px 0px 0px 16px;
  border-left: 1px solid #bccafb;
  background: #fff;
  height: 87%;
  width: 20%;
  right: ${({ isOpen }) => (isOpen ? "0" : "-55%")};
  top: 130px;
  position: fixed;
  transition: 0.5s ease;

  @media (max-width: 970px) {
    top: 125px;
    width: 23%;
  }
  @media (max-width: 768px) {
    top: 70px;
    width: 25%;
  }
`;

const Words = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 30px 8px;
  border-bottom: 1px solid #e2e2e2;
  color: #a1a1a1;
  font-size: 14px;
`;

const WordAndDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.span`
  flex-grow: 1;
`;

const Num = styled.div`
  color: #708ffe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard-Bold;
  font-size: 17px;
  border-radius: 50%;
  background-color: #f0f4ff;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  flex-shrink: 0;
`;

const Top = styled.div`
  width: 100%;
  height: 52px;
  border-radius: 16px 0px 0px 0px;
  background: #708ffe;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  color: #fff;
  font-size: 18px;
  font-family: Pretendard-Bold;
  margin-left: 10px;
  align-items: center;
`;

const Img = styled.img`
  width: 32px;
  margin-right: 10px;
`;

const CloseBtn = styled.button`
  cursor: pointer;
  border: none;
  text-align: right;
  margin-left: auto;
  background: transparent;
`;

const Scrollbar = styled.div`
  max-height: 90%;
  overflow-y: auto;
  overflow-x: hidden;

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

interface DictionarySideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
}

const DictionarySideBar: React.FC<DictionarySideBarProps> = ({ isOpen, setIsOpen, onClose }) => {
  const { words } = useWords();
  const outside = useRef<HTMLDivElement>(null);

  return (
    <SideBarWrap ref={outside} isOpen={isOpen}>
      <Top>
        <Title>
          <Img src={`${process.env.PUBLIC_URL}/assets/Dictionary/eyes.png`} alt="dictionary" />이 단어, 무슨 뜻이지?
        </Title>
        <CloseBtn
          onClick={() => {
            onClose();
            setIsOpen(false);
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/assets/Dictionary/closeBtn.svg`} alt="close" />
        </CloseBtn>
      </Top>
      <Scrollbar>
        {words.map((item, index) => (
          <Words key={index}>
            <Num>{index + 1}</Num>
            <WordAndDescription>
              <strong>{item.word} :</strong>
              <Description>{item.description}</Description>
            </WordAndDescription>
          </Words>
        ))}
      </Scrollbar>
    </SideBarWrap>
  );
};

export default DictionarySideBar;
