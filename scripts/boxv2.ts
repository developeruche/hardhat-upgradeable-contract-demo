import { ethers, upgrades } from "hardhat";
async function main() {

  // Deploying upgrading......
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("deploying implementation.......");
  
  const boxv2 = await upgrades.upgradeProxy("0xB1b570705Cb6e7eB23a0325fF1Dcc485Dfe1C939", BoxV2);
  console.log("this is an address",boxv2.address);
  
  await boxv2.deployed();

}   

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
