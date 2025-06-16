import type { WalletAdapter, Account, Transaction, NetworkType } from '@multi-wallet/core';

export class KeplrAdapter implements WalletAdapter {
  readonly network: NetworkType = 'cosmos';
  private connected = false;

  async connect(): Promise<void> {
    // Here, instead of a real call to Keplr, there is mock logic
    this.connected = true;
    // TODO: integrate with keplr submodule
  }

  async disconnect(): Promise<void> {
    this.connected = false;
  }

  async isConnected(): Promise<boolean> {
    return this.connected;
  }

  async getAccounts(): Promise<Account[]> {
    // Mock account for Cosmos (Keplr)
    return [{
      address: 'cosmos1xxxxxxxxxxxxxxxxxxxxxxx',
      network: 'cosmos',
      publicKey: 'ABCDEF123456'
    }];
  }

  async getBalance(account: Account): Promise<string> {
    return '1234567';
  }

  async signTransaction(account: Account, tx: Transaction): Promise<string> {
    return `signed_${tx.to}_${tx.amount}`;
  }

  async sendTransaction(account: Account, tx: Transaction): Promise<string> {
    return `txhash_${Date.now()}`;
  }
}
