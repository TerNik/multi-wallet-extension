// This script emulates window.keplr and window.cardano.lace for dApp integration
// must be autonomous, but if needed use only import()

(function () {
  window.keplr = {
    enable: async (chainId) => {
      return new Promise((resolve) => {
        chrome.runtime.sendMessage({ type: "GET_ACCOUNTS", network: "cosmos" }, resolve);
      });
    },
    getKey: async (chainId) => ({
      name: "mvp",
      algo: "secp256k1",
      pubKey: new Uint8Array([]),
      address: "cosmos1xxxxxxxxxxxxxxxxxxxxxxx"
    })
  };
  if (!window.cardano) window.cardano = {};
  window.cardano.lace = {
    enable: async () => {
      return new Promise((resolve) => {
        chrome.runtime.sendMessage({ type: "GET_ACCOUNTS", network: "cardano" }, resolve);
      });
    },
    getBalance: async () => "987654321"
  };
})();
