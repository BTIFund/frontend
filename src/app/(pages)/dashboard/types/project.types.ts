/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Project {
  id: number;
  name: string;
  location: string;
  image: any;
  capacity: string;
  invested: string;
  returns: string;
  funded: string;
  fundedAmount: string;
  goalAmount: string;
  status: "Funding" | "Active";
  nextPayout: string;
  lastClaim: string;
}