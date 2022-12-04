// SPDX-License-Identifier: MIT
 
 pragma solidity ^0.8.7;

 import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
 import "@openzeppelin/contracts/utils/Strings.sol";
 import "@openzeppelin/contracts/access/Ownable.sol";

 contract MintNFT is ERC721Enumerable, Ownable {
    string public metadataURI;
    uint public totalNFT;
    mapping(address => uint) whitelist;

    constructor(string memory _name, string memory _symbol ,string memory _metadataURI, uint _totalNFT) ERC721(_name, _symbol) {
        metadataURI = _metadataURI;
        totalNFT = _totalNFT;
    }

    function isOwner() private view returns (bool) {
        return msg.sender == owner();
    }

    function mintNFT() public payable {
        require(totalNFT > totalSupply(), "No more mint.");
        require(whitelist[msg.sender]>0 || isOwner(), "Not in Whitelist.");
        require(msg.value >= 0.1 ether, "Not Enough BNB");

        uint tokenId = totalSupply() + 1;

        _mint(msg.sender, tokenId);

        if(!isOwner()){
            whitelist[msg.sender]--;
        }

        payable(owner()).transfer(msg.value);
    }

    function batchMint(uint _amount) public onlyOwner {
        for(uint i = 0; i < _amount; i++) {
            mintNFT();
        }
    }

    function tokenURI(uint _tokenId) public override view returns(string memory) {
        return string(abi.encodePacked(metadataURI, '/', Strings.toString(_tokenId), '.json'));
    }

    function getNFTs(address _owner) public view returns(uint[] memory) {
        require(balanceOf(_owner) > 0, "Owner does not have NFT.");
        uint[] memory myNFTs = new uint[](balanceOf(_owner));
        
        for(uint i = 0; i < balanceOf(_owner); i++) {
            myNFTs[i] = tokenOfOwnerByIndex(_owner, i); 
        }
 
        return myNFTs;
    }

    function setWhitelist(address _whitelist, uint _amount) public onlyOwner{
        whitelist[_whitelist] = _amount;
    }

 }