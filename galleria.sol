// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts@4.4.2/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.4.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.4.2/utils/Strings.sol";

contract TaurosGalleries1 is ERC1155, Ownable {
    uint256 public constant GALLERY1 = 0;
    uint256 public constant GALLERY2 = 1;
    string public name = "Tauros Galleries";
    string public symbol = "TauGall";
    uint256 public price = 0.5 ether;
    uint256 public price1 = 0.8 ether;

    string public galleryID1 = "Bacchanalia";
    string public galleryID2 = "Ritus";

    
    constructor() ERC1155("ipfs://QmYgidBfvNaRJWgF3gSzvgmaN5U5nUNdUAFZmEU2M9F3wj/{id}.json") {
        _mint(msg.sender, GALLERY1, 100000000000000000 /*mint creator 100 Galleries*/, "");
        _mint(msg.sender, GALLERY2, 100000000000000000 /*mint creator 100 Galleries*/, "");
    }


    function uri(uint256 _tokenid) override public pure returns (string memory){
        return string(
            abi.encodePacked(
                "ipfs://QmYgidBfvNaRJWgF3gSzvgmaN5U5nUNdUAFZmEU2M9F3wj/",
                Strings.toString(_tokenid), ".json"
            )
        );

    }

    // function setURI(string memory newuri) public onlyOwner {
    //     uri = _setURI(newuri);
    // }

    function buildGallery1(uint256 amount) public payable {
        require(msg.value >= (amount * price), "Not enough ether sent");
        _mint(msg.sender, GALLERY1, amount, "");
    }


    function buildGallery2(uint256 amount) public payable {
        require(msg.value >= (amount * price1), "Not enough ether sent");
        _mint(msg.sender, GALLERY2, amount, "");
    }

    function setprice(uint256 _newprice) public onlyOwner {
        price = _newprice;
    }

    function setprice1(uint256 _newprice1) public onlyOwner {
        price1 = _newprice1;
    }
    function newGalleryID(string memory _newGalleryID1,string memory _newGalleryID2) public onlyOwner {
        galleryID1 = _newGalleryID1;
        galleryID2 = _newGalleryID2;
    }

    function withdraw() public payable onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No ether left to withdraw");

        (bool success, ) = (msg.sender).call{value: balance}("");
        require(success, "Transfer failed.");
    }
}