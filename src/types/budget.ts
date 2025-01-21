export interface Budget {
  id: string;
  name: string;
  amount: number; // previously limit
  balance: number; // previously spent
  startDate: string;
  endDate: string;
}
