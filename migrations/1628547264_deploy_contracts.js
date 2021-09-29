const NFT_Factory = artifacts.require("NFT_Factory");
const Pool = artifacts.require("Pool");
const MP = artifacts.require("MarketPlace");
const USDF = artifacts.require("USDF");

module.exports = async function(deployer, network, accounts) {
  const [admin, funder, _] = accounts;
  if (network === 'development' || network === 'develop') {
    await deployer.deploy(USDF, {from: admin});
    const usdf = await USDF.deployed();
    await deployer.deploy(NFT_Factory, {from: admin});
    const nft = await NFT_Factory.deployed();
    const tx = await nft.createInvoice(
      accounts[4], 
      "Reserva", 
      "NY1", 
      "NY2", 
      "Manhatan",
      "New York", 
      "USA",
      13200,
      12008890, 
      web3.utils.toWei("9500", "ether"), 
      web3.utils.toWei("10000", "ether"), 
      {from: admin});
    console.log(tx);  
  }
  console.log("Everything its okey");

};