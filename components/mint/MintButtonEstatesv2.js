// src/components/mint/MintButtonEstatesV2.js
import {useToast, Button, NumberInputStepper, Box, Spacer, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput} from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import CustomContainer from "../CustomContainer"
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import styles from "@styles/MintButton.module.css"

// import taurosABI from "./ABIs/taurosABI.json";
import estatesABI from "../ABIs/estatesABI"

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export default function MBE() {
  const [amount, setAmount] = useState(1)
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
      contractAddress: '0x6997640355E20515C541F7D93D662782e43823a4',
      functionName: 'mintNFTs',
      abi: estatesABI,
      params: {
        _count: 1 * amount,
      }
    }
    await Moralis.enableWeb3()
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        toast({
          title: 'Mint Successful',
          description: "Minted Merca City Estate",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        console.log("Mint successful");
      },
      onError: (error) => {
        toast({
          title: 'Mint Failed.. User is Not Whitelisted or rejected the transaction',
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
      <Box fontSize="xl" fontWeight="bold" align="right">
        <form className={styles.btn} onSubmit={async e => {
          e.preventDefault()
        }}>
          <FormControl my="4" maxW="210" minW="210">
            <FormLabel htmlFor="amount" textAlign="right">
              Amount to Mint
            </FormLabel>
            <NumberInput step={1} min={1} max={10} onChange={handleChange} allowMouseWheel>
              <NumberInputField  id="amount" value={amount} bg="gray.200" boxShadow="lg" />
              <NumberInputStepper bg="teal.300">
                <NumberIncrementStepper borderLeft="none" />
                <Spacer />
                <NumberDecrementStepper borderLeft="none" />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Button 
            disabled 
            color="white" 
            _hover={{bg: "teal.400"}} 
            rounded="xl"
            onClick={() => {
            if (isAuthenticated) { _mintEstates(); }
          }}>Mint</Button>

        </form>
      </Box>
    </CustomContainer>
  )
}
