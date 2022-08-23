export interface Repayment {
  _id: string;
  amount: number;
  transactionsIncluded: number;
  recipient: string;
}
