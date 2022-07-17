import { Container, SimpleGrid, Divider, useToast, Flex, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, NumberInput, Link, Box, Tabs, TabPanel, TabList, Tab, TabPanels, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import CustomContainer from "@components/CustomContainer";
// import { useDispatch, useSelector } from "react-redux"
// import { connect } from "@/src/redux/blockchain/blockchainActions"
// import { fetchData } from "@/src/redux/data/dataActions"
import { Button } from 'web3uikit';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';

// import taurosABI from "./ABIs/taurosABI.json";
import estatesABI from "../ABIs/estatesABI"

const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

export default function MBE() {
    const [amount, setAmount] = useState(0)
    const handleChange = (value) => setAmount(value)
    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();
    const toast = useToast()

    useEffect(() => {
        if (isAuthenticated) {

        }

    }, [isAuthenticated])

    async function _mintEstates() {
        let options = {
            // msgValue: Moralis.Units.ETH("0.05"),
            contractAddress: '0x25cff20e9fb576b76768d4ce69c66578b7f7ac5d',
            functionName: 'mintNFTs',
            abi: estatesABI,
            params: {
                _mintAmount: 1* amount,
            }
        }
        await Moralis.enableWeb3()
        await contractProcessor.fetch({
            params: options,
            onSuccess: () => {
                toast({
                    title: 'Mint Successful',
                    description: "Minted TaurosDAO Estate",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                console.log("Mint successful");
            },
            onError: (error) => {
                toast({
                    title: 'Mint Failed...',
                    description: 'Mint Failed.. User is Not Whitelisted or rejected the transaction',
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
      <Text fontSize="xl" fontWeight="bold">
        <form onSubmit={async e => {
          e.preventDefault()
        }}>
          <FormControl mt="4">
            <FormLabel htmlFor="amount">
              Amount to Mint
            </FormLabel>
            <NumberInput step={1} onChange={handleChange}>
              <NumberInputField id="amount" value={amount} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Button onClick={() => {
            if (isAuthenticated) { _mintEstates(); }
          }} text={"Mint Estates"} theme={"primary"} />

        </form>
      </Text>
    </CustomContainer>
  )
      //     <Button style={{width: "140px", height: "40px", fontSize: "16px", border: "none", borderRadius: "6px"}} onClick={() => {
      //       if (isAuthenticated) {_mintEstates();}
      //     }} text={"Claim Estates"} theme={"primary"} />
          
      // );
    }

{/* Opensea button --> move to bottom of the page */ }
{/* <Container>
            <span>
                <Button
                  onClick={(e) => {
                    window.open(CONFIG.MARKETPLACE_LINK, "_blank");
                  }}
                >
                  {CONFIG.MARKETPLACE}
                </Button>
            </span>          
          </Container>               */}