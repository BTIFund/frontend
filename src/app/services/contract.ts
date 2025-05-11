import { BTIabi, IDRXabi } from "./abi";
import { SolarContract, IDRCContract } from "./contractAddress";

export const wagmiContractSolarConfig = {
  address: SolarContract,
  abi: BTIabi,
} as const;

export const wagmiContractIDRCConfig = {
  address: IDRCContract,
  abi: IDRXabi,
} as const;
