import { WalletManager } from '../src/WalletManager';
import type { WalletAdapter, Account, Transaction, NetworkType } from '../src';

const mockAdapter = (network: NetworkType): WalletAdapter => ({
  network,
  async connect() {},
  async disconnect() {},
  async isConnected() { return true; },
  async getAccounts() { return [{ address: 'addr', network }]; },
  async getBalance() { return '1000'; },
  async signTransaction() { return 'signedTx'; },
  async sendTransaction() { return 'txHash'; },
});

describe('WalletManager', () => {
  it('registers and retrieves adapters', async () => {
    const wm = new WalletManager();
    wm.registerAdapter(mockAdapter('cosmos'));
    wm.registerAdapter(mockAdapter('cardano'));
    wm.setActiveNetwork('cosmos');
    await wm.connect();
    const accounts = await wm.getAccounts();
    expect(accounts.length).toBe(1);
    expect(accounts[0].network).toBe('cosmos');
  });
});
