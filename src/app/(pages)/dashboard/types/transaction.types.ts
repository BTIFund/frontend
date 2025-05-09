export interface Transaction {
    id: number;
    type: "Investment" | "Return";
    project: string;
    amount: string;
    date: string;
    status: string;
}