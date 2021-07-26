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
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  table: {
   
  },
  tableHeaderCell: {
    fontSize: 14,
    backgroundColor: "white",
    color: "#8B849A",
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
    position: "absolute",
    top: "15px"
  },
}));

const StyledTableCell = withStyles(() => ({
  body: {
    fontSize: 14,
    color: "#8B849A",
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
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
    actions: "",
  };
}

export default function BodyTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="detailBody">
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
                <StyledTableCell style={{ position: "relative" }}>
                  <Avatar
                    src="/images/edit.svg"
                    className={classes.avatar}
                    style={{left: "0px" }}
                  />
                  <Avatar
                    src="/images/remove.svg"
                    className={classes.avatar}
                    style={{left: "40px" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5]}
            component="div"
            style={{ marginTop: "20px" }}
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableFooter>
      </div>
    </div>
  );
}
