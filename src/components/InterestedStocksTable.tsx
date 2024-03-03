import React from "react";
import styled from "styled-components";

type TableProps = {
  headers: string[];
  data: any[][];
};

type CellProps = {
  isFirstColumn: boolean;
  isPositive?: boolean;
  isNegative?: boolean;
};

const MyPageTable = ({ headers, data }: TableProps) => (
  <TableContainer>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <Th key={index} isFirstColumn={index === 0}>
            {header}
          </Th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Td
              key={cellIndex}
              isFirstColumn={cellIndex === 0}
              isPositive={typeof cell === "string" && (cell.startsWith("+") || cell.startsWith("▲"))}
              isNegative={typeof cell === "string" && (cell.startsWith("-") || cell.startsWith("▼"))}
            >
              {cellIndex === 0 ? (
                <FirstColumnContent>
                  <StarIcon src={`${process.env.PUBLIC_URL}/assets/star.svg`} alt="Star" />
                  {cell}
                </FirstColumnContent>
              ) : (
                cell
              )}
            </Td>
          ))}
        </tr>
      ))}
    </tbody>
  </TableContainer>
);

const TableContainer = styled.table`
  width: 80%;
  margin-bottom: 70px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
`;

const Th = styled.th<CellProps>`
  padding: 15px 20px;
  border-bottom: 1px solid #e3e3e3;
  font-size: 18px;
  text-align: ${({ isFirstColumn }) => (isFirstColumn ? "left" : "right")};
`;

const Td = styled.td<CellProps>`
  padding: 10px 20px;
  font-size: 18px;
  text-align: ${({ isFirstColumn }) => (isFirstColumn ? "left" : "right")};
  color: ${({ isFirstColumn, children }) =>
    !isFirstColumn && typeof children === "string" && (children.startsWith("+") || children.startsWith("▲"))
      ? "#F00"
      : !isFirstColumn && typeof children === "string" && (children.startsWith("-") || children.startsWith("▼"))
        ? "#0075FF"
        : "inherit"};
`;

const FirstColumnContent = styled.div`
  display: flex;
  align-items: center;
`;

const StarIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export default MyPageTable;
