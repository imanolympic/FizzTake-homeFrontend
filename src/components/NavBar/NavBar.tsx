import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const onSubmitRepaymentClick = () => {
    console.log("submit repayment clicked");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}></div>

      <div className={styles.menu}>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/"
        >
          <h1> Purchase </h1>
        </Link>

        <Link
          style={{
            textDecoration: "none",
          }}
          to="/transactions"
        >
          <h1> Past Transactions </h1>
        </Link>

        <Link
          style={{
            textDecoration: "none",
          }}
          to="/repayments"
        >
          <h1> Past Repayments </h1>
        </Link>

        <Button variant="outlined" onClick={() => onSubmitRepaymentClick()}>
          Submit Repayment
        </Button>
      </div>
    </div>
  );
};
