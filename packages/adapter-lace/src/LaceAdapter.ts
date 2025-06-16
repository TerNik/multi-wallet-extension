import type { WalletAdapter, Account, Transaction, NetworkType } from '@multi-wallet/core';

export class LaceAdapter implements WalletAdapter {
  readonly network: NetworkType = 'cardano';
  private connected = false;

  async connect(): Promise<void> {
    // Here, instead of real Lace, there is mock logic
    this.connected = true;
    // TODO: integration with lace submodule
  }

  async disconnect(): Promise<void> {
    this.connected = false;
  }

  async isConnected(): Promise<boolean> {
    return this.connected;
  }

  async getAccounts(): Promise<Account[]> {
    // Mock account for Cardano (Lace)
    return [{
      address: 'addr1qxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      network: 'cardano',
      publicKey: 'CDEFAB654321'
    }];
  }

  async getBalance(account: Account): Promise<string> {
    return '987654321';
  }

  async signTransaction(account: Account, tx: Transaction): Promise<string> {
    return `signed_cardano_${tx.to}_${tx.amount}`;
  }

  async sendTransaction(account: Account, tx: Transaction): Promise<string> {
    return `cardano_txhash_${Date.now()}`;
  }
}
