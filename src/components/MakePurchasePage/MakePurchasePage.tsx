import { useState } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./MakePurchasePage.module.scss";
import { addTransactionRequest } from "../../apis/fizz.api";

export const MakePurchasePage = () => {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");

  const onPurchaseButtonClick = () => {
    addTransactionRequest(title, "purchase", Number.parseFloat(amount)).then(
      (res) => {
        if (res.data.statusCode === 200) {
          window.location.reload();
        } else {
          console.error(res.data.body.error);
        }
      }
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <TextField
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Button variant="contained" onClick={() => onPurchaseButtonClick()}>
          Purchase
        </Button>
      </div>
    </div>
  );
};
