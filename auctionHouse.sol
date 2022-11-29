// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts@4.4.2/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.4.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.4.2/utils/Strings.sol";

contract AuctionHouse {

    address public owner;
    uint256 private counter;
    mapping(address => mapping(uint256 => Listing)) public listings;
    mapping(address=> uint256) public balances;

    //listing[contractAddress][tokenID] =>
    string public name = "Tauros Market";
    string public symbol = "TauMar";

    struct Listing {
        uint256 pricePerDay;
        address seller;
    }

    constructor() {
        counter = 0;
        owner = msg.sender;
     }

    struct auctionInfo {
        string name;
        // string city; 
        // string lat; //Refer to Bearings MetaData
        // string long; // Refer to Bearings MetaData
        string descriptionOne;
        string descriptionTwo;
        string imgUrl;
        uint256 pricePerDay;
        uint256 id;
        address host;
    }

    event auctionCreated (
        // string name,
        // string city,
        // string lat,
        // string long,
        string descriptionOne,
        string descriptionTwo,
        string imgUrl,
        uint256 pricePerDay,
        uint256 id,
        address host
    );

    event newDatesBooked (
        uint256 id,
        address booker,
        // string city,
        string imgUrl 
    );

    mapping(uint256 => auctionInfo) auctions;
    uint256[] public auctionIds;

    // Write Listing data to blockchain, read data on frontend
    //Add listing from contract Deployer, Must set ApprovalForAll in Gallery contract
    // }
    function addAuctions(
        // string memory city,
        // string memory lat,
        // string memory long,
        string memory descriptionOne,
        string memory descriptionTwo,
        string memory imgUrl,
        uint256 pricePerDay,
        address contractAddr,
        uint256 tokenId
    ) public {
        require(msg.sender == owner, "Only owner of smart contract can put up auctions");
        auctionInfo storage newAuction = auctions[counter];
        // newAuction.name = name;
        // newAuction.city = city;
        // newAuction.lat = lat;
        // newAuction.long = long;
        newAuction.descriptionOne = descriptionOne;
        newAuction.descriptionTwo = descriptionTwo;
        newAuction.imgUrl = imgUrl;
        newAuction.pricePerDay = pricePerDay;
        newAuction.id = counter;
        newAuction.host = owner;
        auctionIds.push(counter);
        ERC1155 token = ERC1155(contractAddr);
        require(token.balanceOf(msg.sender, tokenId) > 0,"caller must own given token");
        require(token.isApprovedForAll(msg.sender, address(this)),"contract must be approved");

        listings[contractAddr][tokenId] = Listing(pricePerDay,msg.sender);
        emit auctionCreated(
                // name, 
                // city, 
                // lat, 
                // long, 
                descriptionOne, 
                descriptionTwo, 
                imgUrl, 
                pricePerDay, 
                counter, 
                owner);
        counter++;
    }

    function uri(uint256 _tokenid) public pure returns (string memory){
        return string(
            abi.encodePacked(
                "ipfs://QmYgidBfvNaRJWgF3gSzvgmaN5U5nUNdUAFZmEU2M9F3wj/",
                Strings.toString(_tokenid), ".json"
            )
        );

    }
    // Allows user to purchase NFT from specified contract address
    //TODO: Specify if NFT's have been sold out from NFT contract 
    function purchase(address contractAddr, uint256 tokenId, uint256 amount) public payable{
        Listing memory item = listings[contractAddr][tokenId];
        require(msg.value >= item.pricePerDay * amount, "Not enough Ether sent");
        balances[item.seller] += msg.value; 

        ERC1155 token = ERC1155(contractAddr);
        token.safeTransferFrom(item.seller,msg.sender,tokenId,amount,"");
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner Can Withdraw from contract");

        uint256 balance = address(this).balance;
        require(balance > 0, "No ether left to withdraw");

        (bool success, ) = (msg.sender).call{value: balance}("");
        require(success, "Transfer failed.");
    }
}