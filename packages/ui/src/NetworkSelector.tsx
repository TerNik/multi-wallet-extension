import React from "react";
import type { NetworkType } from "@multi-wallet/core";

type Props = {
  active: NetworkType;
  setActive: (n: NetworkType) => void;
};

export const NetworkSelector: React.FC<Props> = ({ active, setActive }) => (
    <div style={{ marginBottom: 12 }}>
<label>
    <b>Network:</b>
<select
value={active}
onChange={(e) => setActive(e.target.value as NetworkType)}
style={{ marginLeft: 8 }}
>
<option value="cosmos">Cosmos (Keplr)</option>
    <option value="cardano">Cardano (Lace)</option>
    </select>
    </label>
    </div>
);
