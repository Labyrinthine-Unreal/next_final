import React from "react";
import { Icon, Button, useNotification } from "web3uikit";
import AuctionsMap from "../components/AuctionsMap";
import { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useRouter } from "next/router";
import Card from 'react-bootstrap/Card';
import { useToast, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import galleryABI from "@components/ABIs/galleryABI.json";
import { NFTBalance } from "web3uikit"

//Failed component render, Displays on right hand side 
// import Auctions from "@components/Auctions";

export default function Auctions() {

  //useRouter() in place of useLocation()
  const router = useRouter();
  //query in place of state
  const { query: searchFilters } = useRouter();




  // highlight location via Google Maps API (refer to @components/AuctionsMap.js)
  // const [highLight, setHighLight] = useState();

  const { Moralis, account, isAuthenticated } = useMoralis();

  // Fetch listing information from MoralisDB / TaurosExchange => Gallery ERC1155 contract
  const [auctionsList, setAuctionsList] = useState();
  const [amount, setAmount] = useState(1);
  const handleChange = (value) => setAmount(value);
  const [price, setprice] = useState(1);
  const [tokenId, setTokenId] = useState(0)
  const handleChangeID = (value) => setTokenId(value)
  const toast = useToast()

  // const [coOrdinates, setCoOrdinates] = useState([]);
  const contractProcessor = useWeb3ExecuteFunction();
  useEffect(() => {
    if (isAuthenticated) {

    }

  }, [isAuthenticated])

  useEffect(() => {
    //Initialize API / fetch Gallery Listings
    async function fetchAuctionsList() {
      await Moralis.start({
        serverUrl: "https://d8tdshnwaepb.usemoralis.com:2053/server",
        appId: "dqkfmKHCu1vl17sLEOFgJ9RnwsJyrMgsqNLKTgQE",
        masterKey: "nCOMVxCN1LDmsbmor74UPEhALoUYG0XrFvvtMQdR"
      });


      // Refer to @compoents/TaurosList.js
      // TaurosDAO Lists a new Gallery for sale
      //Search API key for the appropriate Dataset from MoralisDB
      const auctions = Moralis.Object.extend("FinalLists2");
      // Query new Gallery Listings 
      const state = new Moralis.Query(auctions);

      const result = await state.find();
      console.log(state)

      // CoOrdinates via Google Maps API
      // let cords = [];
      // result.forEach((e) => {
      //   cords.push({ lat: e.attributes.lat, lng: e.attributes.long });
      // });
      // console.log(cords)

      // setCoOrdinates(cords);

      // Fill Data
      setAuctionsList(result);
    }
    //Fetch New Gallery Listings
    fetchAuctionsList();
  }, [searchFilters]);


  //Gallery Contract 
  //Price (TokenId = 0) => 0.5ETH
  const PRICE = {
    contractAddress: "0xE80F06000c4a9f4846D408134a0Fd541BaCD709F",
    functionName: "price",
    abi: galleryABI,
  };

  // Purchase Gallery
  const bookauction = async function (id, dayPrice) {


    let options = {
      //Tauros Exchange Contract
      contractAddress: "0xEB05b6fc90335F6eAe24f02711cbE994682Ca4bc",
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
        contractAddr: "0xfF8f3567ca17A493C9a984fcA88B0323E5B9EE52",
        // tokenId(Bacchanalia = 0 , Ritus = 1)
        tokenId: tokenId,
        amount: amount //purchase one gallery per transaction
      },
      msgValue:
        // Gallery Contract Price
        await Moralis.executeFunction(PRICE)

      // Moralis.Units.ETH("0.5") //TODO UPDATE PRICE PER TOKEN ID,
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

  }


  return (
    /// Failed Component///

    // This Component Appears on the right side for some reason.. Weird bug

    //     <CustomContainer>
    //     <Auctions />
    // </CustomContainer>

    <>
      <div className="topBanner">
        <div>
          {/* 
       
          // Search Icon
          </div>
          <div className="vl" />
          <div className="searchFiltersIcon">
            <Icon fill="#ffffff" size={20} svg="search" />
          </div>
        </div>

      </div>
          
          */}
          |Current Galleries For Sale|
          <FormControl my="4" maxW="210" minW="210">
            {/* Map Queried Listings And fill in data respective to contract */}
            {auctionsList &&
              auctionsList.map((e, i) => {
                return (
                  <>
                    <Card style={{ width: '18rem' }}>
                      <Spacer />
                      {/* Fetch Description Gallery Name (Galleria/The Box) From MoralisDB */}

                      <Card.Title>Purchase {e.attributes.name} </Card.Title>
                      <Card.Body>
                        <Box fontSize="xl" fontWeight="bold" align="right">
                          <form
                            onSubmit={async e => {
                              e.preventDefault()
                            }}>
                            <FormControl my="4" maxW="210" minW="210">

                              {/* Fetch ImageURL (Galleria/The Box) From MoralisDB */}
                              <img className="auctionImg" src={e.attributes.imgUrl}></img>

                              {/* Fetch Description Gallery Name (Galleria/The Box) From MoralisDB */}
                              <div className="auctionTitle">{e.attributes.name}</div>

                              {/* Fetch Description One From MoralisDB */}
                              {e.attributes.descriptionOne}


                              <FormLabel htmlFor="tokenId" textAlign="right">
                                {/* set Token ID to purchase the appropriate Gallery */}
                                set ID field to: {e.attributes.descriptionTwo} to purchase {e.attributes.descriptionOne} for {/* {e.attributes.pricePerDay} */} 0.5Ξ
                              </FormLabel>
                              <NumberInput step={1} min={0} max={10} defaultValue={0} onChange={handleChangeID} allowMouseWheel>
                                <NumberInputField id="tokenId" value={tokenId} bg="gray.200" boxShadow="lg" />
                                <NumberInputStepper bg="teal.300">
                                  <NumberIncrementStepper borderLeft="none" />
                                  <Spacer />
                                  <NumberDecrementStepper borderLeft="none" />
                                </NumberInputStepper>
                              </NumberInput>
                            </FormControl>
                            <div className="bottomButton">

                              <Button
                                onClick={() => {
                                  if (isAuthenticated) {
                                    bookauction(
                                      // Fetch Price
                                      // User Purchased Gallery
                                      e.attributes.uid_decimal.value.$numberDecimal,
                                      Number(e.attributes.pricePerDay_decimal.value.$numberDecimal)
                                    )
                                  }
                                }
                                }
                                text="Buy" {...e.attributes.name} />
                              <div className="price">

                              </div>
                            </div>
                          </form>
                        </Box>
                      </Card.Body>

                    </Card>
                  </>
                );
              })}
          </FormControl>
        </div>
// display Gallery Location via Google Maps API
        {/* <div className="auctionsContentR">
        // @components/AuctionsMap.js
          <AuctionsMap locations={coOrdinates} />
        </div> */}

        <NFTBalance
          address={account}
          chain="eth"
        />
//         <Center>
        {/* <h1>{account}</h1> */}
//         </Center>
      </div>
    </>
  );
};

