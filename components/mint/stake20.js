import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite,useContractRead, useAccount } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
export default function STAU() {
  const [amount1, setAmount] = React.useState(1111)
  const handleChange = (value) => setAmount(value)
  // const [amount2] = Web3.utils.toBN(amount1) 
  const amount = Web3.utils.toWei(String(amount1),"ether")

  // Fetch user address
  const { address } = useAccount()
  console.log(address)
  const toast = useToast()
  //$CIR Price : TODO fetch price from Contract for automatic update
//   const price = Web3.utils.toWei("0.0005", "ether")

  // Initialze claimBCC Contract write
  const { config, error } = usePrepareContractWrite({
    address: '0x2816e4B49a9d7ae07720a922a7A805F9fA5876c4',
    abi: [
      {
        name: 'deposit',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs:
          [
            //Contract Params
            { internalType: 'uint256', name: '_amount', type: 'uint256' },
          ],
        outputs: [],
      },
    ],
    functionName: 'deposit',
    overrides: {
        // Override Price 
        gasLimit: 270000,
      },
    // Amount to minta
    args: [amount],
  })
  console.log(config)
  console.log(error)
  
  // Contract Write
  const { data, write } = useContractWrite({
    ...config,
    onSuccess(data){
      toast({
        title: 'Stake Successful',
        description: "Staked $CIR :)",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      console.log("Stake successful");
    },
    onError(error) {
      toast({
        title: 'Stake Failed.. User rejected the transaction or not enough Gas To Stake $CIR',
        description: console.log(error),
        status: "error",
        duration: '9000',
        isClosable: true
      })
      console.log(error);
    },
    onMutate({ args }) {
      console.log('Mutate', { args })
    },
  })
  console.log(data)
  console.log(write)
  console.log(amount)
  
  


  return (
    <>
      <Box fontSize="xl" fontWeight="bold" align="right">

        <form className={styles.btn} onSubmit={async e => {
          e.preventDefault()
        }}>
          <FormControl my="4" maxW="210" minW="210">
            <FormLabel htmlFor="amount" textAlign="right">
              Amount to Stake <Spacer /> *1111 minimum*
            </FormLabel>

            <NumberInput step={10} min={1111} max={100000000}defaultValue={1111} onChange={handleChange} allowMouseWheel>
              <NumberInputField id="amount" value={Web3.utils.toWei(String(amount1),"ether")} bg="gray.200" boxShadow="lg" />
              <NumberInputStepper bg="#FA897B">
                <NumberIncrementStepper borderLeft="none" />
                <Spacer />
                <NumberDecrementStepper borderLeft="none" />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Spacer />
          {/* Mint BCCDAO */}

{/* <Button>Staking Coming Soon</Button> */}

          <Button disabled={!write} onClick={() => write?.()}>
            Stake $TAU
          </Button>


          {/* <Box>{error && (
            <div>{error.message}</div>
          )}</Box> */}
        </form>
      </Box>
    </>
  )
}


