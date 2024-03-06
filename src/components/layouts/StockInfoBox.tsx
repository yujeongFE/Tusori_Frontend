import React, { useState } from "react";
import styled from "styled-components";

interface StockInfoBoxProps {
  title?: string;
  category?: string[];
}

// CSS 변수 정의
const containerPadding = "0 1vw";
const borderRadius = "8px";
const transitionEffect = "background 0.3s ease, border-radius 0.3s ease";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35.8vw;
  height: 35.7vh;
  min-width: 365px;
  min-height: 365px;
  flex-shrink: 0;
  border-radius: ${borderRadius};
  border: 1px solid #e3e3e3;
  background: #fff;
  margin-top: 3.7vh;
  transition: ${transitionEffect};

  .title {
    color: var(--Main-Font, #2a2a2a);
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
    margin-left: 2.2vw;
    margin-top: 3.33vh;
  }

  img {
    width: 20px;
    height: 20px;
    margin-top: 3.36vh;
  }
`;

const BoxContainer = styled.div<{ selectedButton: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4.3vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1vw;
  margin-top: 2.9vh;
  margin-right: 1.87vw;
`;

const Button = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  width: 4.5vw;
  height: 3vh;
  min-width: 87px;
  min-height: 33px;
  padding: 6px 20px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: none;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  background: ${({ selected }) => (selected ? "#708FFE" : "#D9D9D9")};
  border-radius: 40px;
`;

const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin-left: 2.3vw;
  margin-right: 2.3vw;
  padding: ${containerPadding};
`;

const TableHeader = styled.thead`
  color: #000;
`;

const HorizontalLine = styled.hr`
  border: 1px solid #e3e3e3;
  margin: 1.48vh 0;
`;

const TableBody = styled.tbody`
  color: #000;
`;

const TableRow = styled.tr`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TableCell = styled.td<{ color?: string }>`
  flex: 1;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  width: "auto";
  margin-left: "0";
  color: ${({ color }) => color || "#000"};
`;

const ScrollableTable = styled.div`
  overflow-y: auto;
  max-height: calc(35.7vh);
  height: calc(35.7vh);
`;

const StockInfoBox: React.FC<StockInfoBoxProps> = ({ title, category = [] }) => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <Container>
      <BoxContainer selectedButton={selectedButton}>
        {title && (
          <div className="title">
            {title}
            {" >"}
          </div>
        )}
        <ButtonContainer>
          {category.map((item, index) => (
            <Button key={index} selected={index === selectedButton} onClick={() => handleButtonClick(index)}>
              {item}
            </Button>
          ))}
        </ButtonContainer>
      </BoxContainer>
      <ScrollableTable>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell style={{ flex: "0.5" }}>순위</TableCell>
              <TableCell style={{ flex: "1.5" }}>종목명</TableCell>
              <TableCell>현재가</TableCell>
              <TableCell>전일비</TableCell>
              <TableCell>등락률</TableCell>
              <TableCell>거래량</TableCell>
            </TableRow>
          </TableHeader>
          <HorizontalLine />
          <TableBody>{/* 더미 데이터를 넣을 부분 */}</TableBody>
        </Table>
      </ScrollableTable>
    </Container>
  );
};

export default StockInfoBox;
