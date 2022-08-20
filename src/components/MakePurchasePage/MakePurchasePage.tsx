import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./MakePurchasePage.module.scss";

export const MakePurchasePage = () => {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");

  const onPurchaseButtonClick = () => {
    console.log(title);
    console.log(amount);
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
