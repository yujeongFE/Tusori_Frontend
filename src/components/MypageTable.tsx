import React from "react";
import styled from "styled-components";

type TableProps = {
  headers: string[];
  data: any[][];
};

type CellProps = {
  isFirstColumn: boolean;
  cellValue: any;
};

const MyPageTable = ({ headers, data }: TableProps) => (
  <TableContainer>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <Th key={index} isFirstColumn={index === 0} cellValue={header}>
            {header}
          </Th>
        ))}
      </tr>
    </thead>

    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Td key={cellIndex} isFirstColumn={cellIndex === 0} cellValue={cell}>
              {cell}
            </Td>
          ))}
        </tr>
      ))}
    </tbody>
  </TableContainer>
);

const TableContainer = styled.table`
  width: 80%;
  height: 304px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  margin-bottom: 70px;
`;

const Th = styled.th<CellProps>`
  padding: 15px 20px;
  border-bottom: 1px solid #e3e3e3;
  font-size: 18px;
  text-align: ${({ isFirstColumn }) => (isFirstColumn ? "left" : "right")};
`;

const Td = styled.td<CellProps>`
  padding: 0 20px;
  font-size: 18px;
  text-align: ${({ isFirstColumn }) => (isFirstColumn ? "left" : "right")};
  color: ${({ cellValue }) =>
    typeof cellValue === "string" && cellValue.startsWith("+") ? "#F00" : typeof cellValue === "string" && cellValue.startsWith("-") ? "#0075FF" : "inherit"};
`;

export default MyPageTable;
