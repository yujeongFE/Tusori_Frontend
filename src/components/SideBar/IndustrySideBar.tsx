import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 13vw;
  min-width: 100px;
  margin-top: 4.5vh;

  @media (max-width: 768px) {
    width: auto;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid var(--Main-Color, #708ffe);
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
    align-items: center;
  }
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
  @media (max-width: 768px) {
    width: auto;

    &:hover {
      background-color: #fff;
    }
  }
`;

const MopDivider = styled.div`
  width: 11.14vw;
  min-width: 100px;

  border-top: 2px solid #aeaeae;
  color: #aeaeae;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Divider = styled.div`
  width: 11.14vw;
  min-width: 100px;

  border-top: 1px solid #aeaeae;
  flex-shrink: 0;
  position: absolute;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledIndicator = styled.div<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? "#2A2A2A" : "#aeaeae")};
  font-family: Pretendard-Medium;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    width: 100%
    background: ${({ selected }) => (selected ? "#eff2ff" : "#fff")};
    color: ${({ selected }) => (selected ? "#708ffe" : "#2a2a2a")};
    text-align: center;
    font-family: Pretendard-Medium;
    font-size: 16px;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface IndustrySidebarProps {
  onItemSelected: (selectedItem: string | null) => void;
  initialItem: string | null;
  data: string[] | null;
}

const IndustrySidebar: React.FC<IndustrySidebarProps> = ({ onItemSelected, initialItem, data }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  useEffect(() => {
    setSelectedItem(initialItem);
  }, [initialItem]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleItemClick = (item: string | null) => {
    setSelectedItem(selectedItem === item ? null : item);
    onItemSelected(selectedItem === item ? null : item);
    isMobile && setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <SidebarContainer onClick={isMobile ? toggleDropdown : undefined}>
        <MopDivider />
        {isMobile && (
          <SidebarItem>
            <SidebarLink>{!dropdownVisible && <StyledIndicator selected={selectedItem !== null}>{selectedItem}</StyledIndicator>}</SidebarLink>
          </SidebarItem>
        )}
        {isMobile && dropdownVisible && (
          <DropdownContainer>
            {data?.map((item, index) => (
              <SidebarItem key={index}>
                <Divider />
                <SidebarLink onClick={() => handleItemClick(item)}>
                  <StyledIndicator selected={selectedItem === item}>{item}</StyledIndicator>
                  {selectedItem === item && <StyledIndicator selected={selectedItem === item}>{">"}</StyledIndicator>}
                </SidebarLink>
              </SidebarItem>
            ))}
          </DropdownContainer>
        )}
        {!isMobile && (
          <>
            {data?.map((item, index) => (
              <SidebarItem key={index}>
                <Divider />
                <SidebarLink onClick={() => handleItemClick(item)}>
                  <StyledIndicator selected={selectedItem === item}>{item}</StyledIndicator>
                  {selectedItem === item && <StyledIndicator selected={selectedItem === item}>{">"}</StyledIndicator>}
                </SidebarLink>
              </SidebarItem>
            ))}
          </>
        )}
        <MopDivider />
      </SidebarContainer>
    </>
  );
};

export default IndustrySidebar;
