import React from "react";
import { usePrepareContractWrite, useAccount, useContractWrite } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import Web3 from "web3";
export default function MBG() {
  //Set Gallery Auction TokenId
  const [tokenId, setTokenId] = React.useState(1)
  // Set Gallery Contract
  const [contract, setContract] = React.useState('0x7A9b67f2b11440aEDfF6861325e7cC5d5b25675C')
  // Set Amount to Purchase *User only mints 1*
  const [amount, setAmount] = React.useState(1)

  // Fetch User Address
  const { address } = useAccount()
  console.log(address)
  const price = Web3.utils.fromWei("500000000000000000", "wei")

  // Initialize Gallery Purchase 
  const { config, error } = usePrepareContractWrite({
    // Set Marketplace Contract
    address: '0xC9d3C8E9a04df301162980a37b637ab380284976',
    // Pass Marketplace Contract params
    abi: [
      {
        name: 'purchase',
        type: 'function',
        stateMutability: 'payable',
        inputs:
          [
            { internalType: 'address', name: 'contractAddr', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
          ],
        outputs: [],
      },
    ],
    functionName: 'purchase',
    // Set Value of Gallery
    overrides: {
      // Override Price 
      value: String(price),
    },

    // Gallery Contract, GalleryID, amount to Purchase
    args: [contract, tokenId, amount], // Must be in sequence of params passed to contractWrite
  })
  console.log(config)
  console.log(error)

  // Write to Marketplace Contract
  const { write } = useContractWrite({
    ...config,
    onMutate({ args }) {
      console.log('Mutate', { args })
    }
  })
  console.log(write)


  return (
    <>
      {/* Purchase Cube */}

      <Button disabled={!write} onClick={() => write?.()}>Buy</Button>
      {error && (
        <div>{error.message}</div>
      )}
    </>

  )
}


