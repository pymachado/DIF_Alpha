import json
from web3 import Web3
from web3.logs import DISCARD


class BLOCKCHAIN_SELECTOR:
    
    def __init__(self): 
        self.providers = {
            'develop': "http://127.0.0.1:9545/",
            'ganache': "http://127.0.0.1:7545/",
            'mumbai': "https://polygon-mumbai.infura.io/v3/de736e9690cc464cbd7000a8ec2f6fe2",
            'matic': "https://polygon-mainnet.infura.io/v3/de736e9690cc464cbd7000a8ec2f6fe2"
        }

        self.networkScan = {
            'mainnet': "https://polygonscan.com/",
            'mumbai': "https://mumbai.polygonscan.com/" 
        }

        self.data = {
            'number_confirmations': "",
            'link_polygonscan': "",
            'tx_receipt': "",
            'tx_argsEvent': "" 
        }
    
    def _plotHash(self, tx_hash, baseLink):
        if (tx_hash !=0):
            return baseLink + 'tx/' + tx_hash

class CORECOMPONENTS(BLOCKCHAIN_SELECTOR):
    
    def __init__(self, addressNFTFactoryMainnet, 
                       addressNFTFactoryMumbai,
                       addressPoolMainnet, 
                       addressPoolMumbai, 
                       addressDebtLiquidatorMainnet,
                       addressDebtLiquidatorMumbai, 
                       addressProxyMainnet,
                       addressProxyMumbai):
        self.addressNFTFactoryMainnet = super().networkScan['mainnet'] + 'address/' + addressNFTFactoryMainnet
        self.addressNFTFactoryMumbai = super().networkScan['mumbai'] + 'address/' + addressNFTFactoryMumbai
        self.addressPoolMainnet = super().networkScan['mainnet'] + 'address/' + addressPoolMainnet
        self.addressPoolMumbai = super().networkScan['mumbai'] + 'address/' + addressPoolMumbai
        self.addressDebtLiquidatorMainnet = super().networkScan['mainnet'] + 'address/' + addressDebtLiquidatorMainnet
        self.addressDebtLiquidatorMumbai = super().networkScan['mumbai'] + 'address/' + addressDebtLiquidatorMumbai
        self.addressProxyMainnet = super().networkScan['mainnet'] + 'address/' + addressProxyMainnet
        self.addressProxyMumbai = super().networkScan['mumbai'] + 'address/' + addressProxyMumbai


class NFT_FACTORY(BLOCKCHAIN_SELECTOR):
    # nft_factory_path = 'build/contracts/NFT_Factory.json'    
    def __init__(self, _smartContract_path, _addressSmartContract, _setProvider, _setNetwork): 
        self.setProvider = super().__init__(_setProvider)
        self.setNetwork = super().networkScan[_setNetwork]
        self.nft_factory_path = _smartContract_path
        self.addressSmartContract = _addressSmartContract
        with open(self.nft_factory_path) as file:
            self.nft_json = json.load(file)
            self.nft_abi = self.nft_json['abi']

        self.w3 = Web3(Web3.HTTPProvider(self.providers[self.setProvider]))
        self.nftContract = self.w3.eth.contract(address=self.addressSmartContract, abi=self.nft_abi)

    def selectorProvider(self, provider):
        self.setProvider(provider)   
    
    def get_TotalOfNFTMinted(self):
        return self.nftContract.functions.totalOfNFTMinted().call()

    def get_Data(self, tokenId):
        return self.nftContract.functions.getData(tokenId).call()

    def get_Values(self, tokenid):
        return self.nftContract.functions.values(tokenid).call()

    def get_TokenId(self, hashToken):
        return self.nftContract.functions.getTokenid(hashToken).call()

    def get_totalNFTBurned(self):
        totalBurned = self.nftContract.balanceOf('0x0000000000000000000000000000000000000001').call()
        return totalBurned;

    #add validation for data
    def set_CreateInvoice(self, addressAdmin, recipient, name, addressGeoOne, addressGeoTwo, city, state, country, zip, phone, priceOfSell, valueOfNFT):
        gasLimit = self.nftContract.functions.createInvoice(recipient, name, addressGeoOne, addressGeoTwo, city, state, country, zip, phone, priceOfSell, valueOfNFT).estimateGas()
        tx_hash = self.nftContract.functions.createInvoice(recipient, name, addressGeoOne, addressGeoTwo, city, state, country, zip, phone, priceOfSell, valueOfNFT).transact({'from': addressAdmin, 'gas': gasLimit})
        currentBlock = self.w3.eth.get_block_number
        tx_receipt = self.w3.eth.wait_for_transaction_receipt(tx_hash)
        minedBlock = tx_receipt['blockNumber']
        confirmations = abs(minedBlock - currentBlock)
        super().data['number_confirmations'] = confirmations
        super().data['link_polygonscan'] = super()._plotHash(tx_hash, self.networkScan)
        super().data['tx_receipt'] = tx_receipt
        return super().data

    def set_ApprovalForAll(self, fromAddress, operatorAddress):
        gasLimit = self.nftContract.functions.setApproveForAll(operatorAddress, 'true').estimateGas()
        tx_hash = self.nftContract.functions.setApproveForAll(operatorAddress, 'true').transact({'from': fromAddress, 'gas': gasLimit})
        currentBlock = self.w3.eth.get_block_number
        tx_receipt = self.w3.eth.wait_for_transaction_receipt(tx_hash)
        minedBlock = tx_receipt['blockNumber']
        confirmations = abs(minedBlock - currentBlock)
        super().data['number_confirmations'] = confirmations
        super().data['link_polygonscan'] = super()._plotHash(tx_hash, self.networkScan)
        super().data['tx_receipt'] = tx_receipt
        return super().data


    def listenEventMint(self):
        mint_filter = self.nftContract.events.Transfer.createFilter(fromBlock='latest', argument_filters={'from':'0x0000000000000000000000000000000000000000'})
        return mint_filter.get_new_entries()
    

    def listenEventApproveForAll(self):
        mint_filter = self.nftContract.events.ApprovalForAll.createFilter(fromBlock='latest')
        return mint_filter.get_new_entries()

class DEBT_LIQUIDATOR(BLOCKCHAIN_SELECTOR): 
    def __init__(self, _smartContract_path, _addressSmartContract, _setProvider, _setNetwork):
        self.setProvider = super().__init__(_setProvider)
        self.setNetwork = super().networkScan[_setNetwork]
        self.debtLiquidator_path = _smartContract_path
        self.addressSmartContract = _addressSmartContract
        with open(self.debtLiquidator_path) as file:
            self.dl_json = json.load(file)
            self.dl_abi = self.dl_json['abi']

        self.w3 = Web3(Web3.HTTPProvider(self.providers[self.setProvider]))
        self.debtLiquidatorContract = self.w3.eth.contract(address=self.addressSmartContract, abi=self.dl_abi)
        
    def get_burnAddress(self):
        return self.debtLiquidatorContract.functions.burnAddress().call()
    
    def get_liquidatedDebtsOf(self, addresSeller):
        return self.debtLiquidatorContract.functions.liquidatedDebts(addresSeller).call()
    
    #function pay(uint256 _tokenId, uint256 _value)
    def set_Pay(self, fromAddress, tokenId, value):
        gasLimit = self.debtLiquidatorContract.functions.pay(tokenId, value).estimateGas()
        tx_hash = self.debtLiquidatorContract.functions.pay(tokenId, value).transact({'from': fromAddress, 'gas': gasLimit})
        currentBlock = self.w3.eth.get_block_number
        tx_receipt = self.w3.eth.wait_for_transaction_receipt(tx_hash)
        minedBlock = tx_receipt['blockNumber']
        confirmations = abs(minedBlock - currentBlock)
        super().data['number_confirmations'] = confirmations
        super().data['link_polygonscan'] = super()._plotHash(tx_hash, self.networkScan)
        super().data['tx_receipt'] = tx_receipt
        return super().data

    def listenEventDebtLiquidated(self):
        debt_liquidated = self.debtLiquidatorContract.events.LiquidatedDebt.createFilter(fromBlock= 'latest')
        return debt_liquidated.get_new_entries()

class POOL(BLOCKCHAIN_SELECTOR):
    def __init__(self, _smartContract_path, _addressSmartContract, _setProvider, _setNetwork):
       self.setProvider = super().__init__(_setProvider)
       self.setNetwork = super().networkScan[_setNetwork]
       self.pool_path = _smartContract_path
       self.addressSmartContract = _addressSmartContract
       with open(self.pool_path) as file:
            self.pool_json = json.load(file)
            self.pool_abi = self.pool_json['abi']
       self.w3 = Web3(Web3.HTTPProvider(self.providers[self.setProvider]))
       self.poolContract = self.w3.eth.contract(address=self.addressSmartContract, abi=self.dl_abi)
    
    def get_Interest(self):
        return self.poolContract.functions.interest().call()
    
    def get_MinInvesting(self):
        return self.poolContract.functions.minInvesting().call()

    def get_StakingDays(self):
        return self.poolContract.functions.stakingDays().call()
    
    def get_MarginInvestment(self):
        return self.poolContract.functions.marginInvestment().call()

    def get_NumberOfInvestment(self):
        return self.poolContract.functions._numberOfInvestment().call()
    
    def get_NumberOfInvestors(self):
        return self.poolContract.functions._numberOfInvestors().call()
    
    def get_Liquidity(self):
        return self.poolContract.functions._liquidity().call()

    def get_DataOf(self, addressInvestor):
        return self.poolContract.functions.dataOf(addressInvestor).call()
    
    def get_RemainingTimeToWithdraw(self, addressInvestor):
        return self.poolContract.functions.remainingTimeToWithdraw(addressInvestor).call()

    def set_StakingDays(self, addressAdmin, newStakingDays):
        gasLimit = self.poolContract.functions._stakingDays(newStakingDays).estimateGas()
        tx_hash = self.poolContract.functions._stakingDays(newStakingDays).transact({'from': addressAdmin, 'gas': gasLimit})
        currentBlock = self.w3.eth.get_block_number
        tx_receipt = self.w3.eth.wait_for_transaction_receipt(tx_hash)
        minedBlock = tx_receipt['blockNumber']
        confirmations = abs(minedBlock - currentBlock)
        super().data['number_confirmations'] = confirmations
        super().data['link_polygonscan'] = super()._plotHash(tx_hash, self.networkScan)
        super().data['tx_receipt'] = tx_receipt
        return super().data


    def set_MinInvesting(self, addressAdmin, newMinInvesting):
        gasLimiti = self.poolContract.functions._minInvesting(newMinInvesting).estimateGas()
        tx_hash = self.poolContract.functions._minInvesting(newMinInvesting).transact({'from': addressAdmin, 'gas': gasLimiti})
        currentBlock = self.w3.eth.get_block_number
        tx_receipt = self.w3.eth.wait_for_transaction_receipt(tx_hash)
        minedBlock = tx_receipt['blockNumber']
        confirmations = abs(minedBlock - currentBlock)
        super().data['number_confirmations'] = confirmations
        super().data['link_polygonscan'] = super()._plotHash(tx_hash, self.networkScan)
        super().data['tx_receipt'] = tx_receipt
        return super().data


    def set_MarginInvestment(self, addressAdmin, newMarginInvestmment):
        gasLimit = self.poolContract.functions._marginInvestment(newMarginInvestmment).estimateGas()
        tx_hash = self.poolContract.functions._marginInvestment(newMarginInvestmment).transact({'from': addressAdmin, 'gas': gasLimit})
        currentBlock = self.w3.eth.get_block_number
        tx_receipt = self.w3.eth.wait_for_transaction_receipt(tx_hash)
        minedBlock = tx_receipt['blockNumber']
        confirmations = abs(minedBlock - currentBlock)
        super().data['number_confirmations'] = confirmations
        super().data['link_polygonscan'] = super()._plotHash(tx_hash, self.networkScan)
        super().data['tx_receipt'] = tx_receipt
        return super().data


    def set_SwapDebtLiquidator(self, addressAdmin, addressDL):
        gasLimit = self.poolContract.functions._swapDebtLiquidator(addressDL).estimateGas()
        tx_hash = self.poolContract.functions._swapDebtLiquidator(addressDL).transact({'from': addressAdmin, 'gas': gasLimit})
        currentBlock = self.w3.eth.get_block_number
        tx_receipt = self.w3.eth.wait_for_transaction_receipt(tx_hash)
        minedBlock = tx_receipt['blockNumber']
        tx_event = self.poolContract.events.ChangedDebtLiquidator().processReceipt(tx_receipt, errors=DISCARD)
        confirmations = abs(minedBlock - currentBlock)
        super().data['number_confirmations'] = confirmations
        super().data['link_polygonscan'] = super()._plotHash(tx_hash, self.networkScan)
        super().data['tx_receipt'] = tx_receipt
        super().data['tx_argsEvent'] = tx_event[0]['args']
        return super().data

    
    def set_Deposit(self, fromAddress, amount):
        gasLimit = self.poolContract.functions.deposit(amount).estimateGas()
        tx_hash = self.poolContract.functions.deposit(amount).transact({'from': fromAddress, 'gas': gasLimit})
        currentBlock = self.w3.eth.get_block_number
        tx_receipt = self.w3.eth.wait_for_transaction_receipt(tx_hash)
        minedBlock = tx_receipt['blockNumber']
        tx_event = self.poolContract.events.Deposit().processReceipt(tx_receipt, errors=DISCARD)
        confirmations = abs(minedBlock - currentBlock)
        super().data['number_confirmations'] = confirmations
        super().data['link_polygonscan'] = super()._plotHash(tx_hash, self.networkScan)
        super().data['tx_receipt'] = tx_receipt
        super().data['tx_argsEvent'] = tx_event[0]['args']
        return super().data


    def set_withdraw(self, fromAddress, valueWithdrawal):
        gasLimit = self.poolContract.functions.withdraw(valueWithdrawal).estimateGas()
        tx_hash = self.poolContract.functions.withdraw(valueWithdrawal).transact({'from': fromAddress, 'gas': gasLimit})
        currentBlock = self.w3.eth.get_block_number
        tx_receipt = self.w3.eth.wait_for_transaction_receipt(tx_hash)
        minedBlock = tx_receipt['blockNumber']
        tx_event = self.poolContract.events.Deposit().processReceipt(tx_receipt, errors=DISCARD)
        confirmations = abs(minedBlock - currentBlock)
        super().data['number_confirmations'] = confirmations
        super().data['link_polygonscan'] = super()._plotHash(tx_hash, self.networkScan)
        super().data['tx_receipt'] = tx_receipt
        super().data['tx_argsEvents'] = tx_event[0]['args']
        return super().data


    def set_funding(self, funderAddress, tokenId, amount):
        gasLimit = self.poolContract.functions.funding(tokenId, amount).estimateGas()
        tx_hash = self.poolContract.functions.funding(tokenId, amount).transact({'from': funderAddress, 'gas': gasLimit})
        currentBlock = self.w3.eth.get_block_number
        tx_receipt = self.w3.eth.wait_for_transaction_receipt(tx_hash)
        minedBlock = tx_receipt['blockNumber']
        tx_event = self.poolContract.events.Funding().processReceipt(tx_receipt, errors=DISCARD)
        confirmations = abs(minedBlock - currentBlock)
        super().data['number_confirmations'] = confirmations
        super().data['link_polygonscan'] = super()._plotHash(tx_hash, self.networkScan)
        super().data['tx_receipt'] = tx_receipt
        super().data['tx_argsEvent'] = tx_event[0]['args']
        return super().data




    




#uint256 public constant interest = 10;
#  uint256 public minInvesting;
#  uint256 public stakingDays;
#  uint256 public marginInvestment;
#  Counters.Counter public _numberOfInvestment;
#  Counters.Counter public _numberOfInvestors;
  

#x = NFT_FACTORY('build/contracts/NFT_Factory.json', '0x208E69Da40C4A6BF74A0Ac57D1d8E1a2bcc64Afe', 'develop')

#print(x.get_TotalOfNFTMinted(x.w3.eth.accounts[0]))
#print(x.get_Data(x.w3.eth.accounts[0], 1))


#set_CreateInvoice(fromAddress=w3.eth.accounts[0], recipient=w3.eth.accounts[1], name= "Viaje", addressGeoOne="Europa",
#                  addressGeoTwo= "Serbia", city="Dinamarca", state="Londres", country="Paises Bajos",
#                  zip=12345, phone= 58422992, priceOfSell= w3.toWei('3000', 'ether'), 
#                  valueOfNFT= w3.toWei('3500', 'ether'))
