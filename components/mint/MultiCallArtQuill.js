import React from "react";
import { usePrepareContractWrite, useAccount, useContractWrite } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import Web3 from "web3";
export default function MCAQ() {
  //Set Gallery Auction TokenId
  const [tokenId, setTokenId] = React.useState(0)
  // Set Gallery Contract
  const [contract, setContract] = React.useState('0xCc9486302BA525f65Be11aF64341d77E93Ae1195')
  // Set Amount to Purchase *User only mints 1*
  const [amount, setAmount] = React.useState(1)

  // Fetch User Address
  const { address } = useAccount()
  console.log(address)
  const price = Web3.utils.fromWei("500000000000000000", "wei")
  const toast = useToast()

  // Initialize Gallery Purchase 
  const { config, error } = usePrepareContractWrite({
    // Set Marketplace Contract
    address: '0x6A7bD8DB46A03cf7D215c26682f107777F716502',
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
      value: price,
      gasLimit:250000
    },

    // Gallery Contract, GalleryID, amount to Purchase
    args: [contract,tokenId, amount], // Must be in sequence of params passed to contractWrite
  })
  console.log(config)
  console.log(error)

  // Write to Marketplace Contract
  const { write } = useContractWrite({
    ...config,
    onSuccess(data){
      toast({
        title: 'Purchased ArtQuill',
        description: "Gallery Purchased",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      console.log("Purchase successful");
    },
    onError(error) {
      toast({
        title: 'Purchase Failed.. User rejected the transaction or not enough Ether To Purchase TAUROS',
        description: console.log(error),
        status: "error",
        duration: '9000',
        isClosable: true
      })
      console.log(error);
    },
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


