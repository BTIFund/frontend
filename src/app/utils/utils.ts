import { format } from "date-fns";
import {
  Transaction,
  TransactionDisplay,
} from "../(pages)/dashboard/types/transaction.types";
import { Project } from "../(pages)/dashboard/types/project.types";

function formatAmount(value: number | string): string {
  const stringValue = value.toString().padStart(3, "0");
  const intPart = stringValue.slice(0, -2);
  const decimalPart = stringValue.slice(-2);
  const formattedInt = Number(intPart).toLocaleString("id-ID");
  return `${formattedInt},${decimalPart}`;
}

export function mapTransactionsToDisplay(
  raw: Transaction[],
  projects: Project[]
): TransactionDisplay[] {
  return raw.map((tx, index) => {
    const projectName =
      projects.find((p) => p.id === tx.projectId)?.name ?? "Unknown Project";

    return {
      id: index + 1,
      type: tx.transactionType,
      project: projectName,
      amount: formatAmount(Number(tx.amount)),
      date: format(Number(tx.timestamp) * 1000, "dd MMM yyyy"),
      status: "In Progress",
    };
  });
}
