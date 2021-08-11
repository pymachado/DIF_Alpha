const NFT_Factory = artifacts.require("NFT_Factory");
const Pool = artifacts.require("Pool");
const MP = artifacts.require("MarketPlace");
const USDF = artifacts.require("USDF");

module.exports = async function(deployer, network, accounts) {
  const [admin, funder, _] = accounts;
  if (network === 'ropsten' || network === 'develop') {
    await deployer.deploy(USDF, {from: admin});
    const usdf = await USDF.deployed();
    await deployer.deploy(NFT_Factory, {from: admin});
    const nft = await NFT_Factory.deployed();
    await deployer.deploy(Pool, 
      usdf.address, 
      nft.address,  
      funder, 
      web3.utils.toWei("2000", "ether"), 
      web3.utils.toWei("10", "ether"),
      5, 
      web3.utils.toWei("500", "ether"), {from: admin});
    const pool = await Pool.deployed();
    await deployer.deploy(MP, 
      usdf.address,
      nft.address,
      pool.address);
    const mp = await MP.deployed();
    //mint usdf to accounts[2] (investor) and accounts[3] (buyer)
    usdf.mint(accounts[2], web3.utils.toWei("3000", "ether"));
    usdf.mint(accounts[3], web3.utils.toWei("3000", "ether"));
    //allow to pool to manage the funds of investor to do the deposit() function
    usdf.approve(pool.address, web3.utils.toWei("3000", "ether"), {from: accounts[2]});
    //allow to mp to manage the funds of buyer to do the pay() function
    usdf.approve(mp.address, web3.utils.toWei("3000", "ether"), {from: accounts[3]});
    //mint a nft at accounts[4] (seller) and allow to pool to manage his nfts
    nft.createInvoice("2", accounts[4], web3.utils.toWei("1000", "ether"), web3.utils.toWei("1500", "ether"));
    nft.setApprovalForAll(pool.address, true, {from: accounts[4]});
    //set a deposit through deposit() function
    pool._changedMarketPlace(mp.address);
    pool.deposit(web3.utils.toWei("3000", "ether"), {from: accounts[2]});
    pool.funding(1, web3.utils.toWei("1000", "ether"), {from: accounts[1]});
    mp.pay(1, web3.utils.toWei("1500", "ether"), {from: accounts[3]});
    
  }
  console.log("Everything its okey");

};
