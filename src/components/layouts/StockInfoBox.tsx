import React, { useState } from "react";
import styled from "styled-components";
import firstSampleData from "../../json/RealTimeStockData.json";

// Image
import downward from "../../assets/downward_arrow.svg";
import rise from "../../assets/rising_arrow.svg";

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

const TableCellName = styled(TableCell)`
  text-overflow: ellipsis; // 텍스트가 넘칠 경우 ...으로 표시
`;

const ScrollableTable = styled.div`
  overflow-y: auto;
  max-height: calc(35.7vh);
  height: calc(35.7vh);
`;

// 값에 따라 셀의 색상을 계산하는 함수
const calculateCellColor = (value: string) => {
  return parseFloat(value) < 0 ? "#0075FF" : "#F00";
};

// 테이블 셀을 렌더링 하는 함수
const renderTableCell = (
  value: string,
  type: "rank" | "name" | "currentPrice" | "priceChange" | "percentageChange" | "volume",
  style: React.CSSProperties = {},
) => {
  const cellColor = calculateCellColor(value);

  switch (type) {
    case "priceChange":
      return (
        <TableCell>
          {parseFloat(value) < 0 ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={downward} alt="downward_arrow" style={{ width: "16px", height: "16px", margin: "0px" }} />
              <span style={{ marginRight: "0.2vw", color: cellColor }}>{value}</span>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={rise} alt="rising_arrow" style={{ width: "16px", height: "16px", margin: "0px" }} />
              <span style={{ marginRight: "0.2vw", color: cellColor }}>{value}</span>
            </div>
          )}
        </TableCell>
      );

    case "percentageChange":
      return <TableCell style={{ color: cellColor }}>{value}</TableCell>;

    default:
      return <TableCell style={{ ...style }}>{value}</TableCell>;
  }
};

// category 값이 전달되지 않을 경우 테이블 위 버튼 생성 X
const StockInfoBox: React.FC<StockInfoBoxProps> = ({ title, category = [] }) => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  // 테이블에 따라 렌더링 되는 데이터를 달리함
  const data =
    title === "MY 보유 주식"
      ? [
          // 더미데이터 추가 필요
        ]
      : firstSampleData;

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
          <TableBody>
            {data.map((data, index) => (
              <TableRow key={index} style={{ marginBottom: "1.85vh" }}>
                {renderTableCell(data.rank, "rank", { flex: "0.5" })}
                {renderTableCell(data.name, "name", { flex: "1.5" })}
                {renderTableCell(data.currentPrice, "currentPrice")}
                {renderTableCell(data.priceChange, "priceChange")}
                {renderTableCell(data.percentageChange, "percentageChange")}
                {renderTableCell(data.volume, "volume")}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollableTable>
    </Container>
  );
};

export default StockInfoBox;
