import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./NavBar.module.scss";
import {
  addRepaymentRequest,
  getSpendinglimitRequest,
} from "../../apis/fizz.api";

export const NavBar = () => {
  const [spendingLimit, setSpendingLimit] = useState(undefined);

  const onSubmitRepaymentClick = () => {
    addRepaymentRequest().then((res) => {
      if (res.data.statusCode !== 400) {
        window.location.reload();
      } else {
        console.error(res.data.body.error);
      }
    });
  };

  useEffect(() => {
    getSpendinglimitRequest().then((res) =>
      setSpendingLimit(res.data.body.limit)
    );
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <p> {spendingLimit}</p>
      </div>

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
