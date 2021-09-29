// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract NFT_Factory is ERC721URIStorage, AccessControl {
  uint256 public totalOfNFTMinted;
  struct DATA_INVOICE {
      string name;
      string addressGeoOne;
      string addressGeoTwo;
      string city;
      string state;
      string country;     
      uint32 zip;
      uint32 phone;
      uint256 priceOfSell;
      uint256 valueOfNFT;
      bytes32 invoiceHash;
    }

    DATA_INVOICE[] private _dataInvoices;
    
    mapping (bytes32 => uint256) private _hashTokenId;
    mapping(bytes32 => bool) private _hashExist;
   
    constructor() ERC721("Decentralized Invoice Factoring", "DIF") {
      _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
      totalOfNFTMinted = 0;
  }

    function supportsInterface(bytes4 interfaceId) public view virtual override(AccessControl, ERC721) returns (bool) {
      return this.supportsInterface(interfaceId);
  } 

  function _assemble(  string memory _name,
                       string memory _addressGeoOne,
                       string memory _addressGeoTwo,
                       string memory _city,
                       string memory _state,
                       string memory _country,
                       uint32 _zip,
                       uint32 _phone,
                       uint256 _priceOfSell,
                       uint256 _valueOfNFT,
                       bytes32 _hash) private returns(uint256) {
                        _dataInvoices.push(DATA_INVOICE(
                          _name,
                          _addressGeoOne,
                          _addressGeoTwo,
                          _city,
                          _state,
                          _country,
                          _zip,
                          _phone,
                          _priceOfSell,
                          _valueOfNFT,
                          _hash));
                        uint256 id = _dataInvoices.length - 1;
                        return id;
                       }

  function createInvoice(address _recipient, 
                       string memory _name,
                       string memory _addressGeoOne,
                       string memory _addressGeoTwo,
                       string memory _city,
                       string memory _state,
                       string memory _country,
                       uint32 _zip,
                       uint32 _phone,
                       uint256 _priceOfSell,
                       uint256 _valueOfNFT) public onlyRole(DEFAULT_ADMIN_ROLE) {
                          bytes32 invoiceHash = keccak256(
                                                  abi.encodePacked(_name,
                                                                   _addressGeoOne,
                                                                   _addressGeoTwo,
                                                                   _city,
                                                                   _state,
                                                                   _country,
                                                                   _zip,
                                                                   _phone,
                                                                   _priceOfSell,
                                                                   _valueOfNFT)
                                                                   );
                          require(! _hashExist[invoiceHash], "NFT_Factory: This hash exist already");
                          _hashExist[invoiceHash] = true;
                          uint256 newItemId = _assemble( _name,
                                                         _addressGeoOne,
                                                         _addressGeoTwo,
                                                         _city,
                                                         _state,
                                                         _country,
                                                         _zip,
                                                         _phone,
                                                         _priceOfSell,
                                                         _valueOfNFT,
                                                         invoiceHash);
                          _hashTokenId[invoiceHash] = newItemId;
                          _mint(_recipient, newItemId);
                          totalOfNFTMinted += 1;                                               
                       }

  function getData(uint256 tokenId) public view returns(string memory name,
                                                        string memory addressGeoOne,
                                                        string memory addressGeoTwo,
                                                        string memory city,
                                                        string memory state,
                                                        string memory country,
                                                        uint32 zip,
                                                        uint32 phone,
                                                        uint256 priceOfSell,
                                                        uint256 valueOfNFT,
                                                        bytes32 invoiceHash) {
                                                          name = _dataInvoices[tokenId].name;
                                                          addressGeoOne = _dataInvoices[tokenId].addressGeoOne;
                                                          addressGeoTwo = _dataInvoices[tokenId].addressGeoTwo;
                                                          city = _dataInvoices[tokenId].city;
                                                          state = _dataInvoices[tokenId].state;
                                                          country = _dataInvoices[tokenId].country;
                                                          zip = _dataInvoices[tokenId].zip;
                                                          phone = _dataInvoices[tokenId].phone;
                                                          priceOfSell = _dataInvoices[tokenId].priceOfSell;
                                                          valueOfNFT = _dataInvoices[tokenId].valueOfNFT;
                                                          invoiceHash = _dataInvoices[tokenId].invoiceHash;
                                                        }
  function values(uint256 tokenId) public view returns(uint256 priceOfSell, uint256 valueOfNFT) {
    priceOfSell = _dataInvoices[tokenId].priceOfSell;
    valueOfNFT = _dataInvoices[tokenId].valueOfNFT;
  }

  function getTokenid (bytes32 hashToken) public view returns(uint256 tokenId) {
    tokenId = _hashTokenId[hashToken];
  }

}

