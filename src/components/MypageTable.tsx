import React from "react";
import styled, { css } from "styled-components";
import ScrollBar from "./ScrollBar";

interface TableProps {
  headers: string[];
  data: (string | number)[][];
}

const TableContainer = styled.div`
  width: 83%;
  margin: auto;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  margin-bottom: 70px;
  font-size: 17px;
`;

const TableHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
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

const StyledTh = styled.th<{ isFirst: boolean }>`
  padding: 20px 25px;
  position: sticky;
  top: 0;
  z-index: 10;
  word-wrap: break-word;
  white-space: nowrap;
  width: ${({ isFirst }) => (isFirst ? "14%" : "calc(86% / (headers.length - 1))")}; // headers.length는 헤더의 총 열 수를 나타냅니다.
  ${alignStyle}
`;

const StyledTd = styled.td<{ isFirst: boolean; cellData: string | number }>`
  padding: 15px 25px;
  word-wrap: break-word;
  white-space: nowrap;
  ${alignStyle}
  ${({ cellData }) => colorStyle(cellData)}
  width: ${({ isFirst }) => (isFirst ? "14%" : "calc(86% / (headers.length - 1))")}; // headers.length는 헤더의 총 열 수를 나타냅니다.
`;

const MypageTable: React.FC<TableProps> = ({ headers, data }: TableProps) => {
  return (
    <TableContainer>
      <TableHeader>
        <StyledTable>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <StyledTh key={index} isFirst={index === 0}>
                  {header}
                </StyledTh>
              ))}
            </tr>
          </thead>
        </StyledTable>
      </TableHeader>

      <StyledTable>
        <tbody>
          <ScrollBar>
            {data.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                
                {rowData.map((cellData, cellIndex) => (
                  <StyledTd key={cellIndex} isFirst={cellIndex === 0} cellData={cellData}>
                    {cellData}
                  </StyledTd>
                ))}
              </tr>
            ))}
          </ScrollBar>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default MypageTable;
