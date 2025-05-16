export interface Transaction {
  projectId: bigint;
  transactionType: string;
  amount: bigint;
  timestamp: bigint;
}

export interface TransactionDisplay {
  id: number;
  type: string;
  project: string;
  amount: number;
  date: string;
  status: string;
}
