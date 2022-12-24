import React from "react";
import { usePrepareContractWrite, useAccount, useContractWrite } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import Web3 from "web3";
import styles from "@styles/MintButton.module.css"

export default function PBM() {
    //Set Gallery Auction TokenId
    const [tokenId, setTokenId] = React.useState(51)
    // Set Gallery Contract
    // const [contract, setContract] = React.useState('0x449f661c53aE0611a24c2883a910A563A7e42489') 
    // Set Amount to Purchase *User only mints 1*
    const [amount, setAmount] = React.useState(1)
    const toast = useToast()

    // Fetch User Address
    const { address } = useAccount()
    console.log(address)
    const price = Web3.utils.fromWei("500000000000000000", "wei")

    // Initialize Gallery Purchase 
    const { config, error } = usePrepareContractWrite({
        // Set Marketplace Contract
        address: '0x3aF975EC61C0E0A535c5CEF8F83b5Cc2ae32b0aa',
        // Pass Marketplace Contract params
        abi: [
            {
                name: 'purchase',
                type: 'function',
                stateMutability: 'payable',
                inputs:
                    [
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
        args: [tokenId, amount],
    })
    console.log(config)
    console.log(error)

    // Write to Marketplace Contract
    const { write } = useContractWrite({
        ...config,
        onSuccess(data){
            toast({
              title: 'Purchase Successful',
              description: "Purchased Blue Moon Gallery",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
            console.log("Purchase successful");
          },
          onError(error) {
            toast({
              title: 'Blue Moon Purchase Failed.. User Rejected Transaction Or Not Enough Ether To Purchase Gallery',
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
            {/* Purchase Blue Moon */}

            <Button  disabled={!write} onClick={() => write?.()}>Buy BlueMoon</Button>
            {/* {error && (
                <div>{error.message}</div>
            )} */}
        </>

    )
}


