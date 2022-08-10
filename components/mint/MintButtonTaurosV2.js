import {useToast, NumberInputStepper, Box, Spacer, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput} from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import CustomContainer from "./CustomContainer";
import { Button } from 'web3uikit';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import styles from "@styles/MintButton.module.css"
import taurosABI from "../ABIs/taurosABI"

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export default function MBT() {

  const [amount, setAmount] = useState(1)
  const handleChange = (value) => setAmount(value)
  const toast = useToast()

  const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  // const [value, setValue] = useControllableState({ defaultValue: 1 })
  useEffect(() => {
    if (isAuthenticated) {

    }

  }, [isAuthenticated])

  async function _mintTauros() {
    let options = {
      contractAddress: '0x4b5f5dAb7680048c0cDd428dDe3090AD0F5cb544',
      functionName: 'mintNFTs',
      abi: taurosABI,
      msgValue: Moralis.Units.ETH("0.05")* amount,
//       Moralis.Units.ETH("0.1")
      params: {
        _count: amount,
      }
    }

    await Moralis.enableWeb3()
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        toast({
          title: 'Mint Successful',
          description: "Minted TAUROS",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        console.log("Mint successful");
      },
      onError: (error) => {
        toast({
          title: 'Mint Failed.. User rejected the transaction or not enough Ether To Purchase TAUROS',
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
          <Spacer />
          <Button onClick={() => {
            if (isAuthenticated) { _mintTauros(); }
          }} text={"Mint Tauros"} theme={"primary"} />

        </form>
      </Box>
    </CustomContainer>
  )
}
