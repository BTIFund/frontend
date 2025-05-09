"use client"

import React from "react";
import { Config, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { XellarKitProvider, defaultConfig, darkTheme } from "@xellar/kit";
import { polygonAmoy } from "viem/chains";

const walletConnectProjectId = "c8ea6627bcca478347b5efea715c9327";
const xellarAppId = "15598bd6-1e6f-4b7e-a902-64dc077548f5";

const config = defaultConfig({
    appName: "Xellar",
    walletConnectProjectId,
    xellarAppId,
    xellarEnv: "sandbox",
    chains: [polygonAmoy],
}) as Config;

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <XellarKitProvider theme={darkTheme}>{children}</XellarKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};
