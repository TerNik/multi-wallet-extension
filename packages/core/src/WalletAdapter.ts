import type { Account, Transaction, NetworkType } from './types';

export interface WalletAdapter {
  readonly network: NetworkType;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): Promise<boolean>;
  getAccounts(): Promise<Account[]>;
  getBalance(account: Account): Promise<string>;
  signTransaction(account: Account, tx: Transaction): Promise<string>;
  sendTransaction(account: Account, tx: Transaction): Promise<string>;
}
