import {useToast, NumberInputStepper, Box, Spacer, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput} from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import CustomContainer from "@components/CustomContainer";
import { Button } from 'web3uikit';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import styles from "@styles/MintButton.module.css"
import taurosABIv1 from "../ABIs/taurosABIv1"

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

  async function _whitelistTauros() {
    let options = {
      contractAddress: '0x260b1B530C1a6B9624725A9C0c97F23a0AfEc739',
      functionName: 'whitelistUsersApp',
      abi: taurosABIv1,
      params: {
        _users: [user.get('ethAddress')],
      }
    }

    await Moralis.enableWeb3()
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        toast({
          title: 'Whitelist Successful',
          description: "Whitelisted for TAUROS",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        console.log("Mint successful");
      },
      onError: (error) => {
        toast({
          title: 'Whitelist Failed.. User rejected the transaction or not enough Ether To Whitelist for TAUROS',
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

          </FormControl>
          <Spacer />
          <Button onClick={() => {
            if (isAuthenticated) { _whitelistTauros(); }
          }} text={"Whitelist"} theme={"primary"} />

        </form>
      </Box>
    </CustomContainer>
  )
}
