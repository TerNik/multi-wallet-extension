import { WalletManager } from "@multi-wallet/core";
import { KeplrAdapter } from "@multi-wallet/adapter-keplr";
import { LaceAdapter } from "@multi-wallet/adapter-lace";

// Background instance for message handling
const manager = new WalletManager();
manager.registerAdapter(new KeplrAdapter());
manager.registerAdapter(new LaceAdapter());

// Listen for messages from popup/content script
chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
  if (msg?.type === "GET_ACCOUNTS") {
    try {
      manager.setActiveNetwork(msg.network || "cosmos");
      await manager.connect();
      const accts = await manager.getAccounts();
      sendResponse({ accounts: accts });
    } catch (e) {
      sendResponse({ error: String(e) });
    }
    return true;
  }
});
