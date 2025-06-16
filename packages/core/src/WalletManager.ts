import type { WalletAdapter } from './WalletAdapter';
import type { NetworkType, Account, Transaction } from './types';

export class WalletManager {
  private adapters: Map<NetworkType, WalletAdapter> = new Map();
  private activeNetwork: NetworkType = 'cosmos';

  registerAdapter(adapter: WalletAdapter) {
    this.adapters.set(adapter.network, adapter);
  }

  setActiveNetwork(network: NetworkType) {
    this.activeNetwork = network;
  }

  getActiveAdapter(): WalletAdapter {
    const adapter = this.adapters.get(this.activeNetwork);
    if (!adapter) throw new Error(`Adapter for network ${this.activeNetwork} not registered`);
    return adapter;
  }

  async connect() {
    await this.getActiveAdapter().connect();
  }

  async getAccounts() {
    return this.getActiveAdapter().getAccounts();
  }

  async getBalance(account: Account) {
    return this.getActiveAdapter().getBalance(account);
  }

  async signTransaction(account: Account, tx: Transaction) {
    return this.getActiveAdapter().signTransaction(account, tx);
  }

  async sendTransaction(account: Account, tx: Transaction) {
    return this.getActiveAdapter().sendTransaction(account, tx);
  }
}
