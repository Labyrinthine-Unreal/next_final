import React from "react";
import { usePrepareContractWrite, useAccount, useContractWrite } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import Web3 from "web3";
export default function List() {
    //Set Gallery Auction TokenId
    const [name, setName] = React.useState("The Cube")
    const [tokenId, setTokenId] = React.useState(1)
    // Set Gallery Contract
    const [contract, setContract] = React.useState("0xCc9486302BA525f65Be11aF64341d77E93Ae1195")
    // Set Amount to Purchase *User only Listings 1*
    const [lat, setLat] = React.useState("-52.000")
    const [long, setLong] = React.useState("31.000")
    const [imgUrl, setImgUrl] = React.useState("ipfs://.../")
    const [price,setPrice] = Web3.utils.fromWei("800000000000000000", "wei")
    const toast = useToast()

    // Fetch User Address
    const { address } = useAccount()
    console.log(address)
    

    // Initialize Gallery Purchase 
    const { config, error } = usePrepareContractWrite({
        // Set Marketplace Contract
        address: '0x6A7bD8DB46A03cf7D215c26682f107777F716502',
        // Pass Marketplace Contract params
        abi: [
            {
                name: 'addAuctions',
                type: 'function',
                stateMutability: 'payable',
                inputs:
                    [
                        { internalType: 'string', name: 'name', type: 'string' },
                        { internalType: 'string', name: 'lat', type: 'string' },
                        { internalType: 'string', name: 'long', type: 'string' },
                        // { internalType: 'string', name: 'descriptionOne', type: 'string' },
                        // { internalType: 'string', name: 'descriptionTwo', type: 'string' },
                        { internalType: 'string', name: 'imgUrl', type: 'string' },
                        { internalType: 'uint256', name: 'pricePerDay', type: 'uint256' },
                        // { internalType: 'address', name: 'contractAddr', type: 'address' },
                        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                    ],
                outputs: [],
            },
        ],
        functionName: 'addAuctions',
        // Set Value of Gallery
        overrides: {
            // Override Price 
            gasLimit: 250000
        },

        // Gallery Contract, GalleryID, amount to Purchase
        args: [name,lat,long,imgUrl,price,tokenId],
    })
    console.log(config)
    console.log(error)

    // Write to Marketplace Contract
    const { write } = useContractWrite({
        ...config,
        onSuccess(data){
            toast({
              title: 'Listing Successful',
              description: "Listing TAUROS",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
            console.log("Listing successful");
          },
          onError(error) {
            toast({
              title: 'Listing Failed',
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

            <Button disabled={!write} onClick={() => write?.()}>List</Button>
            {error && (
                <div>{error.message}</div>
            )}
        </>

    )
}


