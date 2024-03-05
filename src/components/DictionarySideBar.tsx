import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const SideBarWrap = styled.div`
  z-index: 5;
  border-radius: 16px 0px 0px 16px;
  border-left: 1px solid #bccafb;
  background: #fff;
  height: 100%;
  right: -55%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const Menu = styled.li`
  margin: 30px 8px;
`;

const CloseBtn = styled.button`
  cursor: pointer;
  border-radius: 16px 0px 0px 0px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
  position: absolute;
  border: none;
  width: 100%;
  text-align: right;
  background: #708ffe;
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
      <CloseBtn onClick={toggleSide}>
        <img src={`${process.env.PUBLIC_URL}/assets/closeBtn.svg`} alt="close" />
      </CloseBtn>
      <Menu>총 자산</Menu>
    </SideBarWrap>
  );
}

export default DictionarySideBar;
