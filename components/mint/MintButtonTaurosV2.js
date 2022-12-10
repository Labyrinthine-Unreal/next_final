import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite, useAccount } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
export default function MBT() {
  const [amount, setAmount] = React.useState(0)
  const handleChange = (value) => setAmount(value)
  // Fetch user address
  const { address } = useAccount()
  console.log(address)

  //Tauros Price : TODO fetch price from Contract for automatic update
  const price = Web3.utils.fromWei("50000000000000000", "wei")

  // Initialze claimTauros Contract write
  const { config, error } = usePrepareContractWrite({
    address: '0x002f68bB4A0d2c0a68B20631581F2C9085f84D65',
    abi: [
      {
        name: 'claimTauros',
        type: 'function',
        stateMutability: 'payable',
        inputs:
          [
            //Contract Params
            { internalType: 'uint256', name: '_count', type: 'uint256' },
          ],
        outputs: [],
      },
    ],
    functionName: 'claimTauros',
    overrides: {
      // Override Price 
      value: String(price * amount),
    },
    // Amount to mint
    args: [amount],
  })
  console.log(config)
  console.log(error)
  
  // Contract Write
  const { data, write } = useContractWrite({
    ...config,
    onMutate({ args }) {
      console.log('Mutate', { args })
    }
  })
  console.log(data)
  console.log(write)
  console.log(price * amount)


  return (
    <>
      <Box fontSize="xl" fontWeight="bold" align="right">

        <form className={styles.btn} onSubmit={async e => {
          e.preventDefault()
        }}>
          <FormControl my="4" maxW="210" minW="210">
            <FormLabel htmlFor="amount" textAlign="right">
              Amount to Mint
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
          {/* Mint TaurosDAO */}
          <Button disabled={!write} onClick={() => write?.()}>
            Mint
          </Button>
          <Box>{error && (
            <div>{error.message}</div>
          )}</Box>
        </form>
      </Box>
    </>
  )
}


