const { network } = require("hardhat");

// function deployFunc() {
//   console.log("hiiii");
// }

// module.exports.default = deployFunc;

const { networkConfig } = require("../helper-hardhat-config");

const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  // use mock when using hardhat network

  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [ethUsdPriceFeedAddress], // put price feeed address
    log: true,
  });
};
