import React from "react";
import { Icon, Button, useNotification } from "web3uikit";
// import AuctionsMap from "../AuctionsMap";
import { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useRouter } from "next/router";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import galleriesABI from "@components/ABIs/galleriesABI.json";

export default function MCC() {

  //useRouter() in place of useLocation()
  const router = useRouter();
  //query in place of state
  const { query: searchFilters } = useRouter();




  // highlight location via Google Maps API (refer to @components/AuctionsMap.js)
  // const [highLight, setHighLight] = useState();

  const { Moralis, account, isAuthenticated, user } = useMoralis();

  // Fetch listing information from MoralisDB / TaurosExchange => Gallery ERC1155 contract
  const [auctionsList, setAuctionsList] = useState();
  const [amount, setAmount] = useState(1);
  const handleChange = (value) => setAmount(value);
  const toast = useToast()

  const [coOrdinates, setCoOrdinates] = useState([]);
  const contractProcessor = useWeb3ExecuteFunction();
  useEffect(() => {
    if (isAuthenticated) {

    }

  }, [isAuthenticated])

  //   useEffect(() => {
  //     //Initialize API / fetch Gallery Listings
  //     async function fetchAuctionsList() {
  //       await Moralis.start({
  //         serverUrl: "https://d8tdshnwaepb.usemoralis.com:2053/server",
  //         appId: "dqkfmKHCu1vl17sLEOFgJ9RnwsJyrMgsqNLKTgQE",
  //         masterKey: "nCOMVxCN1LDmsbmor74UPEhALoUYG0XrFvvtMQdR"
  //       });


  //       // Refer to @compoents/TaurosList.js
  //       // TaurosDAO Lists a new Gallery for sale
  //       //Search API key for the appropriate Dataset from MoralisDB
  //       const auctions = Moralis.Object.extend("ListingCreated");
  //       // Query new Gallery Listings Listings
  //       const state = new Moralis.Query(auctions);

  //       const result = await state.find();
  //       console.log(state)

  //       // CoOrdinates via Google Maps API
  //       let cords = [];
  //       result.forEach((e) => {
  //         cords.push({ lat: e.attributes.lat, lng: e.attributes.long });
  //       });
  //       console.log(cords)

  //       setCoOrdinates(cords);

  //       // Fill Data
  //       setAuctionsList(result);
  //     }
  //     //Fetch New Gallery Listings
  //     fetchAuctionsList();
  //   }, [searchFilters]);


  //Gallery Contract 
  //Price (TokenId = 1) => 0.8ETH
  const PRICE = {
    contractAddress: "0xE80F06000c4a9f4846D408134a0Fd541BaCD709F",
    functionName: "price1",
    abi: galleriesABI,
  };

  // Purchase Gallery
  const bookauction = async function (id, dayPrice) {


    let options = {
      //Tauros Exchange Contract
      contractAddress: "0x1bD8e23b07ED6366BACc3fF42276Be49d4bBA083",
      functionName: "purchase",
      abi: [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "contractAddr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "purchase",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        }
      ],
      params: {
        //ERC1155 Gallery Contract 
        contractAddr: "0xa51DD6b83fcda7C3A5b45aF454c9A561893f08dF",
        // tokenId(Galleria = 0 , The Cube = 1)
        tokenId: 1,
        amount: amount // Amount of Galleries to purchase 
      },
      msgValue:
        // ERC1155 Gallery Contract Price
        await Moralis.executeFunction(PRICE) * amount

      // Moralis.Units.ETH("0.5")
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        toast({
          title: 'Purchase Successful',
          description: "Purchased Item",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        console.log("Purchase successful");
      },
      onError: (error) => {
        toast({
          title: 'Purchase Failed.. User rejected the transaction or not enough Ether To Purchase Gallery',
          description: console.log(error),
          status: "error",
          duration: '9000',
          isClosable: true
        })
        console.log(error);
      }
    })

    console.log(account)

  }


  return (

    <>
      {/* |Current Galleries For Sale| */}
      <FormControl my="4" maxW="210" minW="210">
        {/* Map Queried Listings And fill in data respective to contract */}
        {/* {auctionsList &&
          auctionsList.map((e, i) => { */}
        {/* return ( */}
        <>
          {/* <Spacer /> */}
          {/* Fetch DLatitude/Longitude of Gallery Location From MoralisDB */}
          {/* <div>Latitude: {e.attributes.lat}</div>
                Longitude: {e.attributes.long} */}
          <Box fontSize="xl" fontWeight="bold" align="right">
            <form
              onSubmit={async e => {
                e.preventDefault()
              }}>
              {/* Fetch ImageURL (Galleria/The Box) From MoralisDB */}
              {/* <img className="auctionImg" src={e.attributes.imgUrl}></img> */}

              {/* Fetch Description Gallery Name (Galleria/The Box) From MoralisDB */}
              {/* <div className="auctionTitle">{e.attributes.name}</div> */}

              {/* Fetch Description One From MoralisDB */}
              {/* <div> {e.attributes.descriptionOne}</div> */}

              {/* purchase {e.attributes.descriptionOne} for {e.attributes.pricePerDay} 0.5Ξ */}

              {/* <FormLabel htmlFor="amount" textAlign="right"> Purchase Gallery
                          </FormLabel> */}
              <FormControl my="4" maxW="210" minW="210">
                <NumberInput step={1} min={1} max={10} defaultValue={1} onChange={handleChange} allowMouseWheel>
                  <NumberInputField id="amount" value={amount} bg="gray.200" boxShadow="lg" />
                  <NumberInputStepper bg="teal.300">
                    <NumberIncrementStepper borderLeft="none" />
                    <Spacer />
                    <NumberDecrementStepper borderLeft="none" />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Button onClick={() => {
                if (isAuthenticated) { bookauction(); }
              }} text={"Buy"} theme={"primary"} />
            </form>
          </Box>
        </>
        {/* ); */}
        {/* })} */}
      </FormControl>
    </>
  );
};

