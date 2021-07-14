import React, { Component } from "react";
import { withStyles, makeStyles, } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({

    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));

const StyledTableCell = withStyles((theme) => ({
  head: {},
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    body: {
      fontSize: 14,
    },
  },
}))(TableRow);



let USERS = [],
  LEAVE = ["Annual Leave", "Sick Leave"],
  REASON = ["Personal", "Headache"],
  STATUS = ["Pending", "Approved", "Rejected"];

for (let i = 0; i < 20; i++) {
  USERS[i] = {
    leaveName: LEAVE[Math.floor(Math.random() * LEAVE.length)],
    from: "5/6/2021",
    to: "5/7/2021",
    leaveType: "First Half",
    days: "1",
    verifiedBy: "Daniel Brown",
    status: STATUS[Math.floor(Math.random() * STATUS.length)],
    reason: REASON[Math.floor(Math.random() * LEAVE.length)],
    actions: "edit",
  };
}

export default function BodyTable() {
  const classes = useStyles();
  console.log(USERS);
  return (
    <div className="detailBody">
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.tableHeaderCell}>Leave&nbsp;Name</StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>From</StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>To</StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>Leave&nbsp;Type</StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>Days</StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>Verified&nbsp;By</StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>Status</StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>Reason</StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {USERS.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.leaveName}
                </StyledTableCell>
                <StyledTableCell>{row.from}</StyledTableCell>
                <StyledTableCell>{row.to}</StyledTableCell>
                <StyledTableCell>{row.leaveType}</StyledTableCell>
                <StyledTableCell>{row.days}</StyledTableCell>
                <StyledTableCell>{row.verifiedBy}</StyledTableCell>
                <StyledTableCell>
                <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'Approved' && 'green') ||
                        (row.status === 'Pending' && 'blue') ||
                        (row.status === 'Rejected' && 'red'))
                    }}
                  >
                    {row.status} </Typography>
                    </StyledTableCell>
                <StyledTableCell>{row.reason}</StyledTableCell>
                <StyledTableCell>{row.actions}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
