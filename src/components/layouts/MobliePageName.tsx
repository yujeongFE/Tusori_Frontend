import React from "react";
import styled from "styled-components";

const PageName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-family: Pretendard-Bold;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
  @media (min-width: 768.1px) {
    display: none;
  }
`;

interface MobliePageNameProps {
  pageTitle: string;
}

const MobliePageName: React.FC<MobliePageNameProps> = ({ pageTitle }) => {
  return (
    <>
      <PageName>{pageTitle}</PageName>
    </>
  );
};

export default MobliePageName;
