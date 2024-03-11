import React from "react";
import styled, { css } from "styled-components";
import ScrollBar from "./ScrollBar";

interface TableProps {
  headers: string[];
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

const StyledThead = styled.thead``;

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
  max-width: 100%;
  word-wrap: break-word;
  //border: 1px solid #e3e3e3;
  width: 20%;
  ${alignStyle}
`;

const StyledTd = styled.td<{ isFirst: boolean; cellData: string | number }>`
  padding: 15px 25px;
  max-width: 100%;
  //border: 1px solid #e3e3e3;
  word-wrap: break-word;
  width: 20%;
  ${alignStyle}
  ${({ cellData }) => colorStyle(cellData)}
`;

const MypageTable: React.FC<TableProps> = ({ headers, data }: TableProps) => {
  return (
    <TableContainer>
      <TableHeader>
        <StyledTable>
          <StyledThead>
            <tr>
              {headers.map((header, index) => (
                <StyledTh key={index} isFirst={index === 0}>
                  {header}
                </StyledTh>
              ))}
            </tr>
          </StyledThead>
        </StyledTable>
      </TableHeader>
      <ScrollBar>
        <StyledTable>
          <tbody>
            {data.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                {rowData.map((cellData, cellIndex) => (
                  <StyledTd key={cellIndex} isFirst={cellIndex === 0} cellData={cellData}>
                    {cellData}
                  </StyledTd>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </ScrollBar>
    </TableContainer>
  );
};

export default MypageTable;
