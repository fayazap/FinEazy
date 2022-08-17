require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    georli: {
      url: "https://eth-goerli.g.alchemy.com/v2/B_3KTI7q31wigSOKn4qNAhkdc0qdtD4N",
      accounts: [
        "e010d3e68b2509aa9a03740003840d5315ac44efa14bd1a016a6c8ff7afe7ee8",
      ],
    },
  },
};
