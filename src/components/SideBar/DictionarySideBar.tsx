import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const SideBarWrap = styled.div`
  z-index: 5;
  border-radius: 16px 0px 0px 16px;
  border-left: 1px solid #bccafb;
  background: #fff;
  height: 85%;
  width: 23%;
  right: -55%;
  top: 130px;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const Words = styled.div`
  padding: 30px 8px;
  border-bottom: 1px solid #E2E2E2;
  justify-content: center;
  color: #A1A1A1;
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
  color: #fff;
  font-size: 18px;
  font-family: Pretendard-Bold;
  margin-left: 10px;
`;

const CloseBtn = styled.button`
  cursor: pointer;
  border: none;
  text-align: right;
  margin-left: auto;
  background: transparent;
`;

function DictionarySideBar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutside);
    return () => {
      document.removeEventListener("mousedown", handlerOutside);
    };
  });

  const handlerOutside = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <SideBarWrap ref={outside} className={isOpen ? "open" : ""}>
      <Top>
        <img src={`${process.env.PUBLIC_URL}/assets/eyes.png`} style={{ width: "32px", marginLeft: "30px" }} alt="arrow" />
        <Title>이 단어, 무슨 뜻이지?</Title>
        <CloseBtn onClick={toggleSide}>
          <img src={`${process.env.PUBLIC_URL}/assets/closeBtn.svg`} alt="close" />
        </CloseBtn>
      </Top>

      <Words>종목코드</Words>
    </SideBarWrap>
  );
}

export default DictionarySideBar;
