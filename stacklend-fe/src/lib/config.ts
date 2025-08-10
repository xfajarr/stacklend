// Contract addresses configuration
// Update these addresses after deploying contracts to testnet/mainnet

export const NETWORK_CONFIG = {
  // Set to 'testnet' or 'mainnet'
  NETWORK: 'testnet' as 'testnet' | 'mainnet',
  
  // Stacks API endpoints
  API_ENDPOINTS: {
    testnet: 'https://api.testnet.hiro.so',
    mainnet: 'https://api.mainnet.hiro.so'
  }
};

export const CONTRACT_ADDRESSES = {
  testnet: {
    COLLATERAL: {
      address: 'STBGS8Y6KHWQ3D2P9BTQ83VBD3ZCK7BDTWMGJY5Z',
      name: 'collateral-v1'
    },
    LENDING: {
      address: 'STBGS8Y6KHWQ3D2P9BTQ83VBD3ZCK7BDTWMGJY5Z', 
      name: 'lending-v1'
    }
  },
  mainnet: {
    COLLATERAL: {
      address: '', // Add mainnet address after deployment
      name: 'collateral-v1'
    },
    LENDING: {
      address: '', // Add mainnet address after deployment
      name: 'lending-v1'
    }
  }
};

// Get current network configuration
export const getCurrentNetworkConfig = () => {
  return CONTRACT_ADDRESSES[NETWORK_CONFIG.NETWORK];
};

// Protocol constants
export const PROTOCOL_CONSTANTS = {
  // Basis points (10000 = 100%)
  LIQUIDATION_THRESHOLD_BPS: 8000, // 80%
  LENDING_APY_BPS: 500,            // 5%
  BORROWING_APY_BPS: 800,          // 8%
  
  // Token precision
  STX_DECIMALS: 6,
  MICRO_STX_PER_STX: 1_000_000,
  
  // Supported tokens for borrowing
  SUPPORTED_TOKENS: [
    { id: 'USDC', name: 'USD Coin', symbol: 'USDC', decimals: 6 },
    { id: 'USDT', name: 'Tether USD', symbol: 'USDT', decimals: 6 },
    { id: 'WBTC', name: 'Wrapped Bitcoin', symbol: 'WBTC', decimals: 8 },
    { id: 'ETH', name: 'Ethereum', symbol: 'ETH', decimals: 18 }
  ]
};
