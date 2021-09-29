const Web3 = require("web3");
const web3 = new Web3("http://loopback:7545");

const Pool = require("./build/contracts/Pool.json");

async function withdraw (value, index) {
    let id = await web3.eth.net.getId();
    let deployedNetwork = Pool.networks[id];
    let pool = new web3.eth.Contract(Pool.abi, deployedNetwork.address);
    let accounts = await web3.eth.getAccounts();
    let gasLimit = await pool.methods.withdraw(value).estimateGas({from: accounts[index]});
    console.log(await pool.methods.withdraw(value).send({from: accounts[index], gas: gasLimit}));

}

async function showTimeWithdrawalRemaining (addresInvestor, index) {
    let id = await web3.eth.net.getId();
    let accounts = await web3.eth.getAccounts();
    let deployedNetwork = Pool.networks[id];
    let pool = new web3.eth.Contract(Pool.abi, deployedNetwork.address);
    console.log( await pool.methods.showRemainingTimeToWithdraw(addresInvestor).call({from: accounts[index]}));
}

async function addresses (index) {
    let accounts = await web3.eth.getAccounts();
    console.log(accounts[index]);
}

async function id () {
    console.log(await web3.eth.net.getId());
}


//id();
//addresses(0);

showTimeWithdrawalRemaining("0xDd5FB75622b22b114C34179156cF630F6FaA8918", 2);
//withdraw(web3.utils.toWei("3100", "ether"), 2);