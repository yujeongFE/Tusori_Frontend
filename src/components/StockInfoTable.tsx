import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 1067px;
  margin: 20px auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeaderCell = styled.th`
  background-color: #f8f8f8;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

interface StockInfoTableProps {
  titles: string[];
  dataKeys: string[];
  data: { [key: string]: string }[];
}

const StockInfoTable: React.FC<StockInfoTableProps> = ({ titles, dataKeys, data }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {titles.map((key, index) => (
              <TableHeaderCell key={index}>{key}</TableHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {dataKeys.map((dataKey, cellIndex) => (
                <TableCell key={cellIndex}>{rowData[dataKey]}</TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default StockInfoTable;
