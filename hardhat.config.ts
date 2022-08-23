import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';
import "@nomiclabs/hardhat-ethers";


const config: HardhatUserConfig = {
  solidity: "0.8.9",

  networks: {
    goerli: {
      url: "https://ropsten.infura.io/v3/965a992142e64206ad4e67bd922124af",
      accounts: ["e53b7e00e5c269783182790426a9342478465ea283ebac814423004b0bf1b1f1"],
    },
    
  },
};

export default config;
