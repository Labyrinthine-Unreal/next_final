import React from "react";
import { Icon, Button, useNotification } from "web3uikit";
import AuctionsMap from "../components/AuctionsMap";
import { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useRouter } from "next/router";
import Card from 'react-bootstrap/Card';
import { useToast, Center, NumberInputStepper,  Box, Spacer, NumberIncrementStepper, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import galleryABI from "@components/ABIs/galleryABI.json";

export default function Auctions() {
  const router = useRouter();
  const { query: searchFilters } = useRouter();

  // const [highLight, setHighLight] = useState();

  const { Moralis, account, isAuthenticated } = useMoralis();
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
    async function fetchAuctionsList() {
      await Moralis.start({
        serverUrl: "https://d8tdshnwaepb.usemoralis.com:2053/server",
        appId: "dqkfmKHCu1vl17sLEOFgJ9RnwsJyrMgsqNLKTgQE",
        masterKey: "nCOMVxCN1LDmsbmor74UPEhALoUYG0XrFvvtMQdR"
      });

      const auctions = Moralis.Object.extend("finalLists2");
      const state = new Moralis.Query(auctions);
      // state.startsWith("city","Bacchanalia");

      const result = await state.find();
      console.log(state)


      // let cords = [];
      // result.forEach((e) => {
      //   cords.push({ lat: e.attributes.lat, lng: e.attributes.long });
      // });
      // console.log(cords)

      // setCoOrdinates(cords);
      setAuctionsList(result);
    }

    fetchAuctionsList();
  }, [searchFilters]);

  const PRICE = {
    contractAddress: "0xE80F06000c4a9f4846D408134a0Fd541BaCD709F",
    functionName: "price",
    abi: galleryABI,
  };


  const bookauction = async function (id, dayPrice) {

    // for (
    //   var arr = [], dt = new Date(start);
    //   dt <= end;
    //   dt.setDate(dt.getDate() + 1)
    // ) {
    //   arr.push(new Date(dt).toISOString().slice(0, 10)); // yyyy-mm-dd
    // }

    let options = {
      contractAddress: "0x9f053e6AF1D65C7d552064f9e8bc7d8a7474Cf7e",
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
        contractAddr: "0xfF8f3567ca17A493C9a984fcA88B0323E5B9EE52",
        tokenId: tokenId,///TODO: Set State Variable of Token ID
        amount: amount //purchase one gallery per transaction
      },
      msgValue: 
      // await Moralis.executeFunction(PRICE)
      Moralis.Units.ETH("0.000005") //TODO UPDATE PRICE PER TOKEN ID,
    }
    // console.log(arr);

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
    <>
      <div className="topBanner">
        <div>
          {/* 
       
          
          </div>
          <div className="vl" />
          <div className="searchFiltersIcon">
            <Icon fill="#ffffff" size={20} svg="search" />
          </div>
        </div>

      </div>
          
          */}
          |Current auctions For Chosen Date|
          <FormControl my="4" maxW="210" minW="210">

            {auctionsList &&
              auctionsList.map((e, i) => {
                return (
                  <>
                    <Card style={{ width: '18rem' }}>
                      <Card.Title>Purchase Gallery from TaurosDAO wallet</Card.Title>
                      <Card.Body>
                        <Box fontSize="xl" fontWeight="bold" align="right">
                          <form
                          //  className={styles.btn}
                           onSubmit={async e => {
                            e.preventDefault()
                          }}>
                            <FormControl my="4" maxW="210" minW="210">

                              <img className="auctionImg" src={e.attributes.imgUrl}></img>
                              {/* <div className="auctionInfo"> */}
                              {/* <div className="auctionTitle">{e.attributes.name}</div> */}
                              <div className="auctionDesc">
                                {e.attributes.descriptionOne}
                              </div>
                              <div className="auctionDesc">
                                {e.attributes.descriptionTwo}
                              </div>
                              <div className="auctionDesc">
                                {e.attributes.id}
                              </div>
                              <FormLabel htmlFor="tokenId" textAlign="right">
                                set tokenID from Contract
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
                                      // searchFilters.Enter,
                                      // searchFilters.Exit,
                                      e.attributes.uid_decimal.value.$numberDecimal,
                                      Number(e.attributes.pricePerDay_decimal.value.$numberDecimal)
                                    )
                                  }
                                }
                                }
                                text="Enter Auction" />
                              <div className="price">
                                <Icon fill="#808080" size={20} svg="eth" />
                                {e.attributes.pricePerDay}
                              </div>
                            </div>
                          </form>
                        </Box>
                      </Card.Body>

                    </Card>
                    {/* </div> */}
                  </>
                );
              })}
          </FormControl>
        </div>
        {/* <div className="auctionsContentR">
          <AuctionsMap locations={coOrdinates} />
        </div> */}
      </div>
    </>
  );
};

