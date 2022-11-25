// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

pragma solidity ^0.8.7;

contract AuctionHouse is ERC721 {

    address public owner;
    uint256 private counter;

    constructor() ERC721("TaurosAuctions", "TAU"){
        counter = 0;
        owner = msg.sender;
    }
     


// Auction Info
    struct auctionInfo {
        string name;
        string city; 
        string lat; //Refer to Bearings MetaData
        string long; // Refer to Bearings MetaData
        string descriptionOne;
        string descriptionTwo;
        string imgUrl;
        uint256 pricePerDay;
        string[] auctionDates;
        uint256 id;
        address host;
    }

// Auction Created
    event auctionCreated (
        string name,
        string city,
        string lat,
        string long,
        string descriptionOne,
        string descriptionTwo,
        string imgUrl,
        uint256 pricePerDay,
        string[] auctionDates,
        uint256 id,
        address host
    );
    
// New Auctions Booked by User
    event newAucionsBooked (
        string[] auctionDates,
        uint256 id,
        address auctioneer,
        string city,
        string imgUrl 
    );

    mapping(uint256 => auctionInfo) auctions;
    uint256[] public auctionIds;


// Create new Auction
    function addAuctions(
        string memory name,
        string memory city,
        string memory lat,
        string memory long,
        string memory descriptionOne,
        string memory descriptionTwo,
        string memory imgUrl,
        uint256 pricePerDay,
        string[] memory auctionDates
    ) public {
        require(msg.sender == owner, "Only owner of smart contract can put up auctions");
        auctionInfo storage newAuction = auctions[counter];
        newAuction.name = name;
        newAuction.city = city;
        newAuction.lat = lat;
        newAuction.long = long;
        newAuction.descriptionOne = descriptionOne;
        newAuction.descriptionTwo = descriptionTwo;
        newAuction.imgUrl = imgUrl;
        newAuction.pricePerDay = pricePerDay;
        newAuction.auctionDates = auctionDates;
        newAuction.id = counter;
        newAuction.host = owner;
        auctionIds.push(counter);
        emit auctionCreated(
                name, 
                city, 
                lat, 
                long, 
                descriptionOne, 
                descriptionTwo, 
                imgUrl, 
                pricePerDay, 
                auctionDates, 
                counter, 
                owner);
        counter++;
    }

    
// Check Contract for Available Auctions
    function checkAuctions(uint256 id, string[] memory newAuctions) private view returns (bool){
        
        for (uint i = 0; i < newAuctions.length; i++) {
            for (uint j = 0; j < auctions[id].auctionDates.length; j++) {
                if (keccak256(abi.encodePacked(auctions[id].auctionDates[j])) == keccak256(abi.encodePacked(newAuctions[i]))) {
                    return false;
                }
            }
        }
        return true;
    }


// User Will Buy Into the Auction
    function addAuctionsBooked(uint256 id, string[] memory newAuctions) public payable {
        
        require(id < counter, "No such Auction");
        require(checkAuctions(id, newAuctions), "Already Booked For Requested Date");
        require(msg.value == (auctions[id].pricePerDay * .05 ether * newAuctions.length) , "Please submit the asking price in order to complete the purchase");
    
        for (uint i = 0; i < newAuctions.length; i++) {
            auctions[id].auctionDates.push(newAuctions[i]);
        }

        payable(owner).transfer(msg.value);
        emit newAucionsBooked(newAuctions, id, msg.sender, auctions[id].city,  auctions[id].imgUrl);
    
    }


// Return Auction ID
    function getAuction(uint256 id) public view returns (string memory, uint256, string[] memory){
        require(id < counter, "No such Auction");

        auctionInfo storage s = auctions[id];
        return (s.name,s.pricePerDay,s.auctionDates);
    }
}