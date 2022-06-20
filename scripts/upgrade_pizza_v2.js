const { ethers, upgrades } = require("hardhat");

const PROXY = '0xFeC8AC02364F979672da75e7De0Dba722E740cf6';

async function main() {
 const PizzaV2 = await ethers.getContractFactory("PizzaV2");
 console.log("Upgrading Pizza...");
 await upgrades.upgradeProxy(PROXY, PizzaV2);
 console.log("Pizza upgraded successfully");
}

main();