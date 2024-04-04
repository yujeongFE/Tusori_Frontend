import React from "react";
import styled from "styled-components";
import rise from "../../assets/rising_arrow.svg";
import downward from "../../assets/downward_arrow.svg";

const TableContainer = styled.div`
  width: 55.5vw;
  margin: 0px auto;
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
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
interface TableCellProps {
  value: string;
  isChangeCell: boolean;
}

const TableCellContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TableCell = styled.td<TableCellProps>`
  padding: 10px;
  border: 1px solid #ddd;
  color: ${({ value, isChangeCell }) => (isChangeCell && parseFloat(value) > 0 ? "red" : isChangeCell && parseFloat(value) < 0 ? "blue" : "inherit")};
`;

const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px;
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
                <TableCell key={cellIndex} value={rowData[dataKey]} isChangeCell={dataKey === "priceChange" || dataKey === "percentChange"}>
                  <TableCellContainer>
                    {dataKey === "priceChange" && parseFloat(rowData[dataKey]) > 0 && <ArrowIcon src={rise} alt="rising_arrow" />}
                    {dataKey === "priceChange" && parseFloat(rowData[dataKey]) < 0 && <ArrowIcon src={downward} alt="down_arrow" />}
                    {rowData[dataKey]}
                  </TableCellContainer>
                </TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default StockInfoTable;
