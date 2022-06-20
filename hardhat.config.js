require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-ethers');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const ROPSTEN_RPC_URL = 'https://ropsten.infura.io/v3/87d127b7346047c296d7b0803a15d5e4'
const PRIVATE_KEY = '0xc6ba6251594128df3892b93f26aec62d83144e7940a12612b9fb1a66579bbfc8'
const ETHERSCAN_API_KEY = '27GY3QA4QHPSWIU759AHMYIP96PI2HAEUZ'
module.exports = {
  defaultNetwork: "ropsten",
  networks: {
    ropsten: {
      url: ROPSTEN_RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },

  solidity: "0.8.4",
};
