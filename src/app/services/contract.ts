import { abi } from "./abi";
import { SolarContract, IDRCContract } from "./contractAddress";

export const wagmiContractSolarConfig = {
  address: SolarContract,
  abi: abi,
} as const;

export const wagmiContractIDRCConfig = {
  address: IDRCContract,
  abi: abi,
} as const;
