import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useWords } from "./WordsContext";
import StockOrderBox from "components/Box/StockOrderBox";

const SideBarWrap = styled.div<{ isOpen: boolean; isTop: boolean; isTransitionToggle: boolean; isDictionary: boolean }>`
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
    right: 0;
    top: ${({ isOpen, isTop, isTransitionToggle, isDictionary }) => (isOpen ? (isTop ? "87%" : isTransitionToggle && !isDictionary ? "30%" : "60%") : "100%")};
    border-radius: 16px;
    width: 100%;
    height: 100%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Top = styled.div<{ isTransitionToggle: boolean; isDictionary: boolean }>`
  width: 100%;
  height: 52px;
  border-radius: 16px 0px 0px 0px;
  background: #708ffe;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    border-radius: 16px 16px 0px 0px;
    display: flex;
    justify-content: center;
    height: ${({ isTransitionToggle, isDictionary }) => (isTransitionToggle && !isDictionary ? "45px" : "81px")};
  }
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
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CloseBtn = styled.button`
  cursor: pointer;
  border: none;
  text-align: right;
  margin-left: auto;
  background: transparent;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ToggleBtn = styled.button`
  width: 60px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 2.5px;
  margin-bottom: 13px;
  border: none;
  background: #fff;
  cursor: pointer;
  @media (min-width: 768.1px) {
    display: none;
  }
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

const SelectButton = styled.img<{ isTop: boolean; isTransition: boolean; isDictionary: boolean }>`
  width: 52px;
  height: 52px;
  top: ${({ isTop, isTransition, isDictionary }) => (!isTop ? (!isDictionary ? "20%" : "53%") : "80%")};
  left: 85%;
  position: fixed;
  z-index: 30;
  transition: top 0.5s ease;
`;

interface DictionarySideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
}

const DictionarySideBar: React.FC<DictionarySideBarProps> = ({ isOpen, setIsOpen, onClose }) => {
  const { words } = useWords();
  const outside = useRef<HTMLDivElement>(null);
  const [isTop, setIsTop] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDictionary, setIsDictionary] = useState(true);

  // 모바일 버전인지 감지하는 코드
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 종목별 페이지인지 감지하는 코드
  const isStockPage = location.pathname.includes("/industry/") && !location.pathname.includes("/industry/details");
  const isTransitionToggle = isStockPage && isMobile && isOpen;

  const handleClickButton = () => {
    setIsDictionary((prevState) => !prevState);
    setIsTop(false);
  };

  return (
    <>
      {isTransitionToggle && (
        <SelectButton
          isTop={isTop}
          isTransition={isTransitionToggle}
          isDictionary={isDictionary}
          onClick={handleClickButton}
          src={
            isDictionary
              ? `${process.env.PUBLIC_URL}/assets/Dictionary/transaction_button.png`
              : `${process.env.PUBLIC_URL}/assets/Dictionary/dictionary_button.png`
          }
        ></SelectButton>
      )}
      <SideBarWrap ref={outside} isOpen={isOpen} isTop={isTop} isTransitionToggle={isTransitionToggle} isDictionary={isDictionary}>
        <Top
          isTransitionToggle={isTransitionToggle}
          isDictionary={isDictionary}
          onClick={() => {
            setIsTop((prevState) => !prevState);
          }}
        >
          <Div>
            {!isTransitionToggle && <ToggleBtn />}
            <Title>
              {isTransitionToggle && !isDictionary ? (
                <span>거래하기</span>
              ) : (
                <>
                  <Img src={`${process.env.PUBLIC_URL}/assets/Dictionary/eyes.png`} alt="dictionary" />
                  <span>이 단어, 무슨 뜻이지?</span>
                </>
              )}
            </Title>
          </Div>
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
          {isTransitionToggle && !isDictionary ? (
            <StockOrderBox isMobile={isMobile} />
          ) : (
            <>
              {words.map((item, index) => (
                <Words key={index}>
                  <Num>{index + 1}</Num>
                  <WordAndDescription>
                    <strong>{item.word} :</strong>
                    <Description>{item.description}</Description>
                  </WordAndDescription>
                </Words>
              ))}
            </>
          )}
        </Scrollbar>
      </SideBarWrap>
    </>
  );
};

export default DictionarySideBar;
