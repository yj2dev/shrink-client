import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, change, week, month, year) {
  return { name, change, week, month, year };
}

const rows = [
  createData('허니버터아몬드', "변동 없음", 1234, 1234, 1234),
  createData('옛날국수 소면', "변동 있음", 1234, 1234, 1234),
  createData('백설 소면', "변동 있음", 1234, 1234, 1234),
  createData('비비고 왕교자', "변동 없음", 1234, 1234, 1234),
  createData('생야채돼지고기물만두', "변동 있음", 1234, 1234, 1234),
];

const makeStyle=(status)=>{
  if(status === '변동 없음')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === '변동 있음')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
}
export default function CustomizedTables() {
  return (
    <div className="Table1">
        <h1>주간 상품정보</h1>
            <TableContainer component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell sx={{ minWidth: 100 }}>상품 (100g 당 가격)</StyledTableCell>
                    <StyledTableCell sx={{ minWidth: 50 }}align="center">최근 가격 변동 사항</StyledTableCell>
                    <StyledTableCell align="right">이번 주</StyledTableCell>
                    <StyledTableCell align="right">1달 전</StyledTableCell>
                    <StyledTableCell align="right">1년 전</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <span className="status" style={makeStyle(row.change)}>{row.change}</span>
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.week}</StyledTableCell>
                    <StyledTableCell align="right">{row.month}</StyledTableCell>
                    <StyledTableCell align="right">{row.year}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    </div>
  );
}