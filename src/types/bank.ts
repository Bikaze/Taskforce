export type AccountType =
  | "savings"
  | "checking"
  | "mobile_money"
  | "investment";

export interface Bank {
  id: string;
  name: string;
  accountType: AccountType;
  accountNumber: string;
  balance: number;
  currency: string;
  logo: string;
}
