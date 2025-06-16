import React from "react";
import type { Account } from "@multi-wallet/core";

type Props = {
  accounts: Account[];
  onSelect?: (a: Account) => void;
  selected?: string;
};

export const WalletList: React.FC<Props> = ({ accounts, onSelect, selected }) => (
    <div>
        <b>Accounts:</b>
<ul>
{accounts.map((a) => (
      <li
          key={a.address}
  style={{
  cursor: onSelect ? "pointer" : "default",
      background: selected === a.address ? "#e0f0ff" : "transparent",
      borderRadius: 4,
      padding: "2px 8px",
}}
onClick={() => onSelect?.(a)}
>
<span>{a.address}</span>
{a.publicKey && (
    <span style={{ fontSize: 11, color: "#888", marginLeft: 8 }}>
  {a.publicKey}
  </span>
)}
</li>
))}
{accounts.length === 0 && <li style={{ color: "#999" }}>No accounts</li>}
</ul>
</div>
);
