// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract NFT_Factory is ERC721URIStorage, AccessControl {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;

    struct VALUES {
      uint256 priceOfSell;
      uint256 valueOfNFT;
    }

    mapping(uint256 => VALUES) public values;

    constructor() ERC721("Decentralized Invoice Factoring", "DIF") {
      _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
  }

    function supportsInterface(bytes4 interfaceId) public view virtual override(AccessControl, ERC721) returns (bool) {
      return this.supportsInterface(interfaceId);
  }

    function createInvoice(string memory tokenURI, address recipient, uint256 _priceOfSell, uint256 _valueOfNFT) public onlyRole(DEFAULT_ADMIN_ROLE) returns (uint256) {
      _tokenIds.increment();
      uint256 newItemId = _tokenIds.current();
      _mint(recipient, newItemId);
      _setTokenURI(newItemId, tokenURI);
      values[newItemId] = VALUES(_priceOfSell, _valueOfNFT);
      return newItemId;
  }

}

