import { useState, useEffect } from "react";
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
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "./TransactionsPage.module.scss";
import {
  addTransactionRequest,
  getTransactionsRequest,
  refundTransactionRequest,
} from "../../apis/fizz.api";
import { Transaction } from "../../models/transactions.model";

const headCells = [
  {
    id: "title",
    label: "Title",
  },
  {
    id: "type",
    label: "Type",
  },
  {
    id: "amount",
    label: "Amount (USD)",
  },
  {
    id: "repaid",
    numeric: false,
    label: "Repaid",
  },
  {
    id: "actions",
    label: "Actions",
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
            align={headCell.numeric ? "right" : "left"}
            sx={{ fontFamily: "AirbnbCereal-Medium" }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    getTransactionsRequest().then((res) => setTransactions(res.data.body));
  }, []);

  const onRefundTransactionClick = (transaction: Transaction) => {
    console.log("Refunding transaction with id:", transaction._id);
    refundTransactionRequest(transaction._id, { issuedRefund: true }).then(() =>
      addTransactionRequest(
        transaction.title,
        "refund",
        transaction.amount
      ).then(() => window.location.reload())
    );
  };

  return (
    <div className={styles.page}>
      <h1> Transactions</h1>

      <div className={styles.table}>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <TableContainer>
              <EnhancedTableToolbar />

              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <EnhancedTableHead />

                <TableBody>
                  {transactions.map((transaction, index) => {
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
                          {transaction.title}
                        </TableCell>

                        <TableCell sx={{ fontFamily: "AirbnbCereal" }}>
                          {transaction.type}
                        </TableCell>

                        <TableCell sx={{ fontFamily: "AirbnbCereal" }}>
                          {"$" + transaction.amount}
                        </TableCell>

                        <TableCell sx={{ fontFamily: "AirbnbCereal" }}>
                          {transaction.repaid ? "True" : "False"}
                        </TableCell>

                        <TableCell sx={{ fontFamily: "AirbnbCereal" }}>
                          {!transaction.issuedRefund && (
                            <Button
                              variant="outlined"
                              onClick={() =>
                                onRefundTransactionClick(transaction)
                              }
                              sx={{
                                height: 30,
                                color: "rgba(0, 0, 139, 0.6)",
                                borderColor: "rgba(0, 0, 139, 0.6)",
                                "&:hover": {
                                  borderColor: "rgba(0, 0, 139, 0.6)",
                                  backgroundColor: "rgba(0, 0, 139, 0.05)",
                                },
                              }}
                            >
                              Refund
                            </Button>
                          )}
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

export default TransactionsPage;
