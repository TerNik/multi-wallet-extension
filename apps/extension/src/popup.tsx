import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { WalletManager } from "@multi-wallet/core";
import { KeplrAdapter } from "@multi-wallet/adapter-keplr";
import { LaceAdapter } from "@multi-wallet/adapter-lace";
import { NetworkSelector, WalletList } from "@multi-wallet/ui";

const walletManager = new WalletManager();
walletManager.registerAdapter(new KeplrAdapter());
walletManager.registerAdapter(new LaceAdapter());

const App = () => {
    const [network, setNetwork] = useState<"cosmos" | "cardano">("cosmos");
    const [accounts, setAccounts] = useState<any[]>([]);
    const [selected, setSelected] = useState<string>();
    const [balance, setBalance] = useState<string | null>(null);
    const [status, setStatus] = useState<string>("");

    useEffect(() => {
        walletManager.setActiveNetwork(network);
        setAccounts([]);
        setBalance(null);
        setStatus("");
    }, [network]);

    const handleConnect = async () => {
        setStatus("Connecting...");
        try {
            await walletManager.connect();
            const accts = await walletManager.getAccounts();
            setAccounts(accts);
            setStatus("Connected");
        } catch (e) {
            setStatus("Failed to connect");
        }
    };

    const handleSelect = async (acc: any) => {
        setSelected(acc.address);
        setBalance("...");
        const bal = await walletManager.getBalance(acc);
        setBalance(bal);
    };

    return (
        <div>
            <h3>Multi-Wallet (Keplr + Lace MVP)</h3>
            <NetworkSelector active={network} setActive={setNetwork} />
            <button onClick={handleConnect} style={{ marginBottom: 8 }}>
                Connect
            </button>
            <WalletList accounts={accounts} onSelect={handleSelect} selected={selected} />
            {selected && (
                <div style={{ marginTop: 8 }}>
                    <b>Balance:</b>{" "}
                    {balance !== null ? balance : "—"}
                </div>
            )}
            <div style={{ marginTop: 12, color: "#888" }}>{status}</div>
        </div>
    );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
