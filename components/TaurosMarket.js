import { useToast, Center, NumberInputStepper, Button, Box, Spacer, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import CustomContainer from "@components/CustomContainer";
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import styles from "@styles/MintButton.module.css"
import marketABI from "../components/ABIs/marketABI"
import { NFTBalance } from "web3uikit";
import Card from 'react-bootstrap/Card';
import Galleria1 from "./Galleries/Gallerias";
// import threeD from '@components/3d'
const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export default function TaurosMarket() {

  const [amount, setAmount] = useState(1)
  const handleChange = (value) => setAmount(value)
  const toast = useToast()

  const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  // const [value, setValue] = useControllableState({ defaultValue: 1 })

  //   const PRICE = {
  //     contractAddress: "0x1A0F33bBc5c7bA83f490cdB6C13ee50e1C851908",
  //     functionName: "PRICE",
  //     abi: taurosABI,
  //   };

  // const message = await Moralis.executeFunction(PRICE);

  useEffect(() => {
    if (isAuthenticated) {

    }

  }, [isAuthenticated])

  async function _purchaseItem() {
    let options = {
      contractAddress: '0x1619Bc10F166C6A6Fd38e7aD8045d7aA6547D044',
      functionName: 'purchase',
      abi: marketABI,
      msgValue:
        //   await Moralis.executeFunction(PRICE) * amount,
        Moralis.Units.ETH("0.00000000005") * amount,
      //       Moralis.Units.ETH("0.08")
      params: {
        contractAddr: '0x966D9A79778f671dA2236b72Ced31D3585fcF6bD',
        tokenId: 0,
        amount: amount
      }
    }

    // possibly check for if user is authenticated and set
    // await Moralis.enableWeb3();
    // if not
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
    <CustomContainer>
      <Center>



        {/* Gallery Component */}
        {/* <Galleria1 /> */}



        <Card style={{ width: '18rem' }}>
          <Card.Title>Purchase Gallery from TaurosDAO wallet</Card.Title>
          <Card.Img variant="top" src="https://ipfs.io/ipfs/QmRZv2uTXKEnjghLGeMp2x8UY6x3sx3tfjDd5vyu3SBzBS?filename=gallery.png" />
          <Card.Body>
            <Box fontSize="xl" fontWeight="bold" align="right">
              <form className={styles.btn} onSubmit={async e => {
                e.preventDefault()
              }}>
                <FormControl my="4" maxW="210" minW="210">
                  <FormLabel htmlFor="amount" textAlign="right">
                    Amount to Buy
                  </FormLabel>

                  <NumberInput step={1} min={1} max={10} defaultValue={1} onChange={handleChange} allowMouseWheel>
                    <NumberInputField id="amount" value={amount} bg="gray.200" boxShadow="lg" />
                    <NumberInputStepper bg="teal.300">
                      <NumberIncrementStepper borderLeft="none" />
                      <Spacer />
                      <NumberDecrementStepper borderLeft="none" />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <Spacer />
                <Button
                  color="white"
                  _hover={{ bg: "teal.400" }}
                  rounded="xl"
                  onClick={() => {
                    if (isAuthenticated) { _purchaseItem(); }
                  }}>
                  Buy NFT from TaurosDAO
                </Button>

              </form>
            </Box>
          </Card.Body>
        </Card>
      </Center>
    </CustomContainer>
  )
}
