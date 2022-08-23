export interface Transaction {
  _id: string;
  title: string;
  type: string;
  amount: number;
  repaid: boolean;
  issuedRefund: boolean;
}
