/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    mainnet: {
      url: "https://bsc-dataseed1.binance.org",
      accounts: [
        process.env.DEPLOYER_PRIVATE_KEY,
        // process.env.DAO_PRIVATE_KEY,
        // process.env.DEV_PRIVATE_KEY,
        // process.env.TAX_PRIVATE_KEY,
      ],
      chainId: 56,
      // live: true,
      // saveDeployments: true,
      // gasPrice: 22000000000,
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [
        process.env.DEPLOYER_PRIVATE_KEY,
        // process.env.DAO_PRIVATE_KEY,
        // process.env.DEV_PRIVATE_KEY,
        // process.env.TAX_PRIVATE_KEY,
      ],
      chainId: 97,
      // live: true,
      // saveDeployments: true,
      // gasPrice: 22000000000,
    },
    eth_testnet: {
      url: "https://goerli.infura.io/v3/",
      accounts: [
        process.env.DEPLOYER_PRIVATE_KEY,
        // process.env.DAO_PRIVATE_KEY,
        // process.env.DEV_PRIVATE_KEY,
        // process.env.TAX_PRIVATE_KEY,
      ],
      chainId: 5,
    }
  }
};
