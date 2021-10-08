// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "./INFT_Factory.sol";


interface IPool {
   function _changedDebtLiquidator(address dl) external returns (bool);
}

contract DebtLidquidator is ERC165{
  IERC20 currency;
  INFT_Factory nft;
  address pool;
  address public constant burnAddress = 0x0000000000000000000000000000000000000001;

  mapping (address => uint256[]) public liquidatedDebts;
  event LiquidatedDebt(address indexed buyer, uint256 tokenId);

  constructor(address _currency, address _nft, address _pool) {
    currency = IERC20(_currency);
    nft = INFT_Factory(_nft);
    pool = _pool;
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == type(IERC20).interfaceId
            || interfaceId == type(INFT_Factory).interfaceId 
            || interfaceId == type(IPool).interfaceId || super.supportsInterface(interfaceId);
  }

  function pay(uint256 _tokenId, uint256 _value) public virtual returns (bool){
    (, uint256 valueOfNFT) = nft.values(_tokenId);
    require(valueOfNFT == _value, "Marketplace: The value that you try to pay not match with the value of NFT");
    //use approve function from web3 to allow the transaction
    currency.transferFrom(msg.sender, pool, _value);
    nft.transferFrom(pool, burnAddress, _tokenId);
    liquidatedDebts[msg.sender].push(_tokenId);
    emit LiquidatedDebt(msg.sender, _tokenId);
    return true;
  }
  
}

