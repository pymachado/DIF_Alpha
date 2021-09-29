const IPFS = require('ipfs-core');
const WEB3 = require('web3');
const provider = '';
const web3 = new WEB3(provider);
const nft_factory = require('.build/contracts/NFT_Factory.json');

const metadataTemplate = {
    name: '',
    description: '',
    pdf_uri: '',
    priceOfSell: '',
    valueOfInvoice: '', 
}



async function uploadMetadataToIPFS(data) {
    const ipfs = await IPFS.create();
    const { cid } = await ipfs.add(JSON.stringify(data));
    console.info(cid);
}

async function mintInvoiceToOwner(name, description, pdf_uri, priceOfSell, valueOfInvoice, addressRecipient) {
    const ipfs = await IPFS.create();
    const id = await web3.eth.net.getId();
    const deployeNetwork = nft_factory.deployed(id);
    const myFactory = await web3.eth.Contract(nft_factory.abi, deployeNetwork.address);
    metadataTemplate['name'] = name;
    metadataTemplate['description'] = description;
    metadataTemplate['pdf_uri'] = "ipfs://"+ await ipfs.add(pdf_uri);
    metadataTemplate['priceOfSell'] = priceOfSell;
    metadataTemplate['valueOfInvoice'] = valueOfInvoice;
    const newMetadata = JSON.stringify(metadataTemplate);
    const newURI = 'ipfs://'+ await ipfs.add(newMetadata);
    const gasLimit = await myFactory.methods.createInvoice(
        newURI.toString(), 
        addressRecipient, 
        priceOfSell, 
        valueOfInvoice).estimateGas();
    const tx = await myFactory.methods.createInvoice(
        newURI.toString(), 
        addressRecipient, 
        priceOfSell, 
        valueOfInvoice).send({from: accounts[0], gas: gasLimit});
    console.log(tx);    
} 



// QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf



