// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./INFT_Factory.sol";


contract Pool is AccessControl, IERC721Receiver {
  using Counters for Counters.Counter;
  using Address for address;
  bytes32 public constant FUNDER_ROLE = keccak256("FUNDER_ROLE");
  uint256 public constant interest = 10;
  uint256 public minInvesting;
  uint256 public stakingDays;
  uint256 public marginInvestment;
  Counters.Counter public _numberOfInvestment;
  Counters.Counter public _numberOfInvestors;
  IERC20 currency;
  INFT_Factory nft;

  struct Investor {
    uint256 totalInvested;
    uint256 totalWithdrawed;
    uint256 pendingToWithdraw;
    uint256 lastDayDeposit;
  }

  mapping (address => Investor) private _investors;
  mapping (address => bool) private _isExist;

  event Deposit(address indexed investor, uint256 indexed amount);
  event Withdraw(address indexed investor, uint256 indexed amount);
  event Funding(uint256 indexed tokenId, address indexed ownerOfNFT, uint256 amountFounding);
  event ChangedMarketPlace(address indexed newMp, uint256 indexed time);

  constructor(
    address addressCurrency,
    address addressNFT, 
    address accountFunder, 
    uint256 MinInvesting, uint256 MarginInvestment) {
      minInvesting = MinInvesting;
      currency = IERC20(addressCurrency);
      nft = INFT_Factory(addressNFT);
      marginInvestment = MarginInvestment;
      stakingDays = 45;
      _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
      grantRole(FUNDER_ROLE, accountFunder);
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
    return interfaceId == type(INFT_Factory).interfaceId 
        || interfaceId == type(IERC20).interfaceId 
        || interfaceId == type(IERC721Receiver).interfaceId || super.supportsInterface(interfaceId); 
  }

  function onERC721Received(address, address, uint256, bytes memory) public virtual override returns (bytes4) {
        return this.onERC721Received.selector;
  }
   
  function dataOf(address investor) public view returns(uint256 totalInvested, uint256 totalWithdrawed, uint256 pendingToWithdraw, uint256 lastDayDeposit) {
      totalInvested = _investors[investor].totalInvested;
      totalWithdrawed = _investors[investor].totalWithdrawed;
      pendingToWithdraw = _investors[investor].pendingToWithdraw;
      lastDayDeposit = _investors[investor].lastDayDeposit;
  }

  function _liquidity() public view returns(uint256 liquidity) {
    liquidity = currency.balanceOf(address(this));
  }

  function remainingTimeToWithdraw(address investor) public view returns(uint256) {
    return (block.timestamp - _investors[investor].lastDayDeposit ) / 1 minutes;
  } 

  /*
  function _interest(uint256 newInterest) public onlyRole(DEFAULT_ADMIN_ROLE) returns(bool) {
    interest = newInterest;
    return true;
  }
  */

  function _stakingDays(uint256 newStakingDays) public onlyRole(DEFAULT_ADMIN_ROLE) returns(bool) {
    stakingDays = newStakingDays;
    return true;
  }

  function _minInvesting(uint256 newMinInvesting) public onlyRole(DEFAULT_ADMIN_ROLE) returns(bool) {
    minInvesting = newMinInvesting;
    return true;
  }

  function _marginInvestment(uint256 newMarginInvestmment) public onlyRole(DEFAULT_ADMIN_ROLE) returns(bool) {
    marginInvestment = newMarginInvestmment;
    return true;
  }

  function _changedMarketPlace(address mp) external onlyRole(DEFAULT_ADMIN_ROLE) returns (bool) {
    require(mp.isContract(), "Pool: The address inserted is not a contract address");
    require(IERC165(mp).supportsInterface(this._changedMarketPlace.selector), "Pool: The contract is not compatible");
    nft.setApprovalForAll(mp, true);
    emit ChangedMarketPlace(mp, block.timestamp);
    return true;
  }

  function deposit(uint256 _amount) external returns(bool) {
    require(_amount != 0, "POOL: The amount can't be 0");
    if (! _isExist[_msgSender()]) {_numberOfInvestors.increment();}
    uint256 valueINV = _investors[_msgSender()].pendingToWithdraw += _amount;
    require(valueINV >= minInvesting, "POOL: Min investing exceeds the amount.");
    //use approve function from web3 to allow the transaction
    currency.transferFrom(_msgSender(), address(this), _amount);
    _investors[_msgSender()].totalInvested += _amount;
    uint256 currentProfit = _profit(interest, _amount);
    _investors[_msgSender()].pendingToWithdraw = valueINV + currentProfit;
    _investors[_msgSender()].lastDayDeposit = block.timestamp;
    _isExist[_msgSender()] = true;
    emit Deposit(_msgSender(), _amount);
    return true; 
  }

  function withdraw(uint256 _valueWithdrawal) external returns(bool) {
    require(_isExist[_msgSender()], "POOL: Your are not an investor registered.");
    require(_valueWithdrawal <= _investors[_msgSender()].pendingToWithdraw, "POOL: Value of the withdrawal exceeds your funds");
    uint256 daysPassed = remainingTimeToWithdraw(_msgSender());
    require(daysPassed >=  stakingDays, "POOL: You have to wait after the withdraw day.");
    currency.transfer(_msgSender(), _valueWithdrawal);
    _investors[_msgSender()].pendingToWithdraw -= _valueWithdrawal;
    _investors[_msgSender()].totalWithdrawed += _valueWithdrawal;
    emit Withdraw(_msgSender(), _valueWithdrawal);
    return true;
  }  

  function funding(uint256 _tokenId, uint256 _amount) external onlyRole(FUNDER_ROLE) returns(uint256) {
    require(_liquidity() - _amount > marginInvestment, "POOL: The amount lees than the marging of investing.");
    (uint256 priceSell, ) = nft.values(_tokenId);
    require(_amount == priceSell, "POOL: The amount not match with token's price of sell");
    address ownerOfNFT = nft.ownerOf(_tokenId);
    currency.transfer(ownerOfNFT, _amount);
    nft.safeTransferFrom(ownerOfNFT, address(this), _tokenId);
    _numberOfInvestment.increment();
    emit Funding(_tokenId, ownerOfNFT, _amount);
    return _numberOfInvestment.current();
  }

  function _profit(uint256 _interestInPorcentage, uint256 _amount) private pure returns(uint256) {
     uint256 value = (_interestInPorcentage * _amount) / (100);
     return value;
  }

}

