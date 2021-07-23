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
  TablePagination,
  TableFooter,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  table: {},
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
    top: "15px",
  },

  actions: {
    fontSize: "12px",
    borderRadius: "6px",
    padding: "4px",
    color: "white",
    textAlign: "center",
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

let USERS = [];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    employeeName: "John Smith",
    department:"Design",
    designation:"Designer",
    joinDate:"5/4/2021",
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
                Employee&nbsp;Name
              </StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>
                Department
              </StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>
                Designation
              </StyledTableCell>
              <StyledTableCell className={classes.tableHeaderCell}>
                Join&nbsp;Date
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
                  {row.employeeName}
                </StyledTableCell>
                <StyledTableCell>{row.department}</StyledTableCell>
                <StyledTableCell>{row.designation}</StyledTableCell>
                <StyledTableCell>{row.joinDate}</StyledTableCell>
                <StyledTableCell style={{ position: "relative" }}>
                  <Avatar
                    src="edit.svg"
                    className={classes.avatar}
                    style={{left: "0px" }}
                  />
                  <Avatar
                    src="remove.svg"
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
