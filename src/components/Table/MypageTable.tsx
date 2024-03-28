import React from "react";
import styled, { css } from "styled-components";
import ScrollBar from "../ScrollBar";

interface TableProps {
  data: (string | number)[][];
}

const TableContainer = styled.div`
  width: 75%;
  margin: auto;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  margin-bottom: 70px;
  font-size: 17px;
  overflow-x: auto;
  overflow-y: auto; /* 스크롤바를 TableContainer에 적용하기 위해 추가 */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const alignStyle = css<{ isFirst: boolean }>`
  text-align: ${({ isFirst }) => (isFirst ? "left" : "right")};
`;

const colorStyle = (data: string | number) => {
  if (typeof data === "string") {
    if (data.startsWith("+")) {
      return "color: #FF0000;";
    } else if (data.startsWith("-")) {
      return "color: #0075FF;";
    }
  }
  return "";
};

const StyledTd = styled.td<{ isFirst: boolean; cellData: string | number }>`
  padding: 15px 25px;
  white-space: nowrap;
  word-wrap: break-word;
  box-sizing: border-box;
  width: ${({ isFirst }) => (isFirst ? "20%" : "calc(80% / (COLUMN_COUNT - 1))")};
  ${alignStyle}
  ${({ cellData }) => colorStyle(cellData)}
`;

const StickyRow = styled.tr`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
  font-weight: bold;
  border-bottom: 1px solid #e3e3e3;
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
                  {" "}
                  {rowData.map((cellData, cellIndex) => (
                    <StyledTd key={cellIndex} isFirst={cellIndex === 0} cellData={cellData}>
                      {cellData}
                    </StyledTd>
                  ))}
                </StickyRow>
              ) : (
                <tr key={rowIndex}>
                  {rowData.map((cellData, cellIndex) => (
                    <StyledTd key={cellIndex} isFirst={cellIndex === 0} cellData={cellData}>
                      {cellData}
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
