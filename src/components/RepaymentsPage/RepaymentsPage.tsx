import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "./RepaymentsPage.module.scss";

interface Repayment {
  _id: string;
  amount: number;
  transactionsIncluded: number;
  recipient: string;
}

const headCells = [
  {
    id: "amount",
    label: "Amount (USD)",
  },
  {
    id: "transactions included",
    label: "Transactions Included",
  },
  {
    id: "recipient",
    label: "Recipient",
  },
];

const EnhancedTableToolbar = () => {
  return (
    <Toolbar>
      <Typography
        sx={{
          flex: "1 1 100%",
          fontSize: 22,
          fontFamily: "AirbnbCereal-Bold",
        }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Products
      </Typography>
    </Toolbar>
  );
};

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sx={{ fontFamily: "AirbnbCereal-Medium" }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const RepaymentsPage = () => {
  const [transactions, setTransactions] = useState<Repayment[]>([]);

  // make GET request to fetch transactions
  useEffect(() => {
    setTransactions([
      {
        _id: "1",
        amount: 15,
        transactionsIncluded: 10,
        recipient: "fizz",
      },
      {
        _id: "2",
        amount: 15,
        transactionsIncluded: 10,
        recipient: "user",
      },
      {
        _id: "3",
        amount: 15,
        transactionsIncluded: 10,
        recipient: "user",
      },
      {
        _id: "4",
        amount: 15,
        transactionsIncluded: 10,
        recipient: "user",
      },
    ]);
  }, []);

  return (
    <div className={styles.page}>
      <h1> Repayments </h1>

      <div className={styles.table}>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <TableContainer>
              <EnhancedTableToolbar />

              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <EnhancedTableHead />

                <TableBody>
                  {transactions.map((repayment, index) => {
                    return (
                      <TableRow
                        hover
                        key={index}
                        sx={{
                          "&.MuiTableRow-hover:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                          },

                          "&.Mui-selected": {
                            backgroundColor: "rgba(0, 0, 0, 0.10)",
                          },

                          "&.Mui-selected:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.15)",
                          },
                        }}
                      >
                        <TableCell sx={{ fontFamily: "AirbnbCereal" }}>
                          {"$" + repayment.amount}
                        </TableCell>

                        <TableCell sx={{ fontFamily: "AirbnbCereal" }}>
                          {repayment.transactionsIncluded}
                        </TableCell>

                        <TableCell sx={{ fontFamily: "AirbnbCereal" }}>
                          {repayment.recipient}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default RepaymentsPage;
