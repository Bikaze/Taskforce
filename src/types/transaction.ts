export interface Transaction {
  id: string;
  accountId: string;
  budgetId?: string;
  categoryId?: string;
  type: "INCOME" | "EXPENSE";
  amount: number;
  note: string;
  date: Date;
}
