export interface Account {
  address: string;
  network: string;
  publicKey?: string;
  [key: string]: unknown;
}

export type NetworkType = 'cosmos' | 'cardano';

export interface Transaction {
  to: string;
  amount: string;
  denom?: string;
  fee?: string;
  memo?: string;
  [key: string]: unknown;
}
