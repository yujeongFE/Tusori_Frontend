import React from "react";
import styled, { css } from "styled-components";
import ScrollBar from "../ScrollBar";

interface TableProps {
  data: (string | number | JSX.Element)[][];
}

const TableContainer = styled.div`
  width: 75%;
  margin: auto;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  margin-bottom: 70px;
  font-size: 17px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  //table-layout: fixed;
`;

const alignStyle = css<{ isSecond?: boolean }>`
  text-align: ${({ isSecond }) => (isSecond ? "left" : "right")};
`;

const colorStyle = (data: string | number) => {
  if (typeof data === "string") {
    if (data.startsWith("+") || data.startsWith("▲")) {
      return "color: #FF0000;";
    } else if (data.startsWith("-") || data.startsWith("▼")) {
      return "color: #0075FF;";
    }
  }
  return "";
};

const StyledTd = styled.td<{ isFirst: boolean; isSecond?: boolean; cellData: string | number | JSX.Element }>`
  padding: 15px 25px;
  max-width: 100%;
  //border: 1px solid #e3e3e3;
  white-space: nowrap;
  word-wrap: break-word;
  width: ${({ isFirst, isSecond }) => (isFirst ? "1.5%" : isSecond ? "30%" : "25%")};
  ${alignStyle}
  ${({ cellData }) => (typeof cellData === "string" || typeof cellData === "number" ? colorStyle(cellData) : "")}
`;

const StickyRow = styled.tr`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
  font-weight: bold;
  border-bottom: 1px solid #e3e3e3;
  overflow: hidden;
`;

const MypageTable: React.FC<TableProps> = ({ data }: TableProps) => {
  return (
    <TableContainer>
      <ScrollBar>
        <StyledTable>
          <tbody>
            {data.map((rowData, rowIndex) =>
              rowIndex === 0 ? (
                <StickyRow key={rowIndex}>
                  {rowData.map((cellData, cellIndex) => (
                    <StyledTd key={cellIndex} isFirst={cellIndex === 0} isSecond={cellIndex === 1} cellData={cellData}>
                      {cellIndex === 0 ? <img src={"/assets/Industry/filledStar.svg"} /> : cellData}
                    </StyledTd>
                  ))}
                </StickyRow>
              ) : (
                <tr key={rowIndex}>
                  {rowData.map((cellData, cellIndex) => (
                    <StyledTd key={cellIndex} isFirst={cellIndex === 0} isSecond={cellIndex === 1} cellData={cellData}>
                      {cellIndex === 0 ? <img src={"/assets/Industry/filledStar.svg"} /> : cellData}
                    </StyledTd>
                  ))}
                </tr>
              ),
            )}
          </tbody>
        </StyledTable>
      </ScrollBar>
    </TableContainer>
  );
};

export default MypageTable;
