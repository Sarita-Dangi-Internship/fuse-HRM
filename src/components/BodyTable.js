import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
  table: {
    minWidth: 1006,
  },
  tableHeaderCell: {
    fontSize: 14,
    backgroundColor: "white",
    color: "#8B849A",
  },
  avatar: {
    backgroundColor: "red",
    color: "black",
  },

  status: {
    fontSize: 14,
    color: "white",
    borderRadius: 6,
    padding: "3px 10px",
  },
  avatar: {
    height: "25px",
    width: "25px",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {},
  body: {
    fontSize: 14,
    color: "#8B849A",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#E5EAF1",
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

for (let i = 0; i < 14; i++) {
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const classes = useStyles();
  console.log(USERS);
  return (
    <div className="detailBody" style={{display:'flex'}}>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.tableHeaderCell}>
                Leave&nbsp;Name
              </StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>
                From
              </StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>
                To
              </StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>
                Leave&nbsp;Type
              </StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>
                Days
              </StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>
                Verified&nbsp;By
              </StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>
                Status
              </StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>
                Reason
              </StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {USERS.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row) => (
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
                        (row.status === "Approved" && "#5A9E00") ||
                        (row.status === "Pending" && "#2882E8") ||
                        (row.status === "Rejected" && "#C1451E"),
                      textAlign: "center",
                    }}
                  >
                    {row.status}{" "}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>{row.reason}</StyledTableCell>
                <StyledTableCell style={{position:'relative',}}>
                  
                    <Avatar
                      src="edit.svg"
                      className={classes.avatar}
                      style={{ position: 'absolute', top: '15px', left: '0px' }}
                    />
                    <Avatar
                      src="remove.svg"
                      className={classes.avatar}
                      style={{ position: 'absolute', top: '15px', left: '40px' }}
                    />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={USERS.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
