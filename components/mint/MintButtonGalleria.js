import React from "react";
import { usePrepareContractWrite, useContractWrite,useAccount } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button,Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"

export default function MBG() {
    //Set Gallery TokenID
    const [tokenId, setTokenId] = React.useState(1)
    // Set Gallery Contract
    const [contract, setContract] = React.useState('0x7A9b67f2b11440aEDfF6861325e7cC5d5b25675C')
    // Set Amount to Purchase *User only mints 1*
    const [amount, setAmount] = React.useState(1)

    // Fetch User Address
    const { address } = useAccount()
    console.log(address)

    // Initialize Gallery Purchase 
    const { config, error  } = usePrepareContractWrite({
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
                    { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                    { internalType: 'address', name: 'contractAddr', type: 'address' },
                    { internalType: 'uint256', name: 'amount', type: 'uint256' },
                ],
                outputs: [],
            },
        ],
        functionName: 'purchase',
        // Set Value of Gallery
        value: ethers.utils.parseEther('0.8'),

        // Gallery Contract, GalleryID, amount to Purchase
        args: [contract,tokenId,amount],
          })
    console.log(config)
    console.log(error)

      // Write to Marketplace Contract
    const { write } = useContractWrite({
      ...config,
      onMutate({ args}) {
        console.log('Mutate', { args })
      }
    })
      console.log(write)
    

    return (
      <>
                {/* Purchase Galleria */}

      <Button disabled={!write} onClick={() => write?.()}>Purchase Gallery</Button>
      {/* {error && (
        <div>{error.message}</div>
      )} */}
    </>

    )
}


