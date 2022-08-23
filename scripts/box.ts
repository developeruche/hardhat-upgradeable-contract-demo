import { ethers, upgrades } from "hardhat";
// import { ethers } from "hardhat";

async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log("deploying proxy, admin proxy, implementation contract.....");
  
  const box = await upgrades.deployProxy(Box, [0], {initializer: "store"});

  await box.deployed();

  console.log("this is an address",box.address);
  
  

  // Upgrading
  // const BoxV2 = await ethers.getContractFactory("BoxV2");
  // const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});