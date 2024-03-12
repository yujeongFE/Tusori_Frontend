import React, { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 13vw;
  min-width: 100px;
  margin-top: 4.5vh;
`;

const SidebarItem = styled.div`
  position: relative;
`;

const SidebarLink = styled.a`
  width: 11.14vw;
  min-width: 100px;

  text-decoration: none;
  color: #333;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 2vh 0;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const MopDivider = styled.div`
  width: 11.14vw;
  min-width: 100px;

  border-top: 2px solid #aeaeae;
  color: #aeaeae;
`;

const Divider = styled.div`
  width: 11.14vw;
  min-width: 100px;

  border-top: 1px solid #aeaeae;
  flex-shrink: 0;
  position: absolute;
`;

const StyledIndicator = styled.div<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? "#2A2A2A" : "#aeaeae")};

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

interface IndustrySidebarProps {
  onItemSelected: (selectedItem: string | null) => void;
}

const IndustrySidebar: React.FC<IndustrySidebarProps> = ({ onItemSelected }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onItemSelected(item); // 선택된 카테고리를 전달하기 위한 콜백 함수 작성
  };

  return (
    <SidebarContainer>
      <MopDivider />
      {[
        "음식료품",
        "섬유, 의복",
        "종이, 목재",
        "화학",
        "의약품",
        "비금속광물",
        "철강 및 금속",
        "기계",
        "전기, 전자",
        "의료정밀",
        "운수장비",
        "유통업",
        "전기가스업",
        "건설업",
        "통신업",
        "금융업",
        "서비스업",
      ].map((item, index) => (
        <SidebarItem key={index}>
          <Divider />
          <SidebarLink onClick={() => handleItemClick(item)}>
            <StyledIndicator selected={selectedItem === item}>{item}</StyledIndicator>
            <StyledIndicator selected={selectedItem === item}>{">"}</StyledIndicator>
          </SidebarLink>
        </SidebarItem>
      ))}
      <MopDivider />
    </SidebarContainer>
  );
};

export default IndustrySidebar;
