// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface INFT_Factory is IERC721 {
  function values(uint256 tokenId) external returns(uint256, uint256);
}
