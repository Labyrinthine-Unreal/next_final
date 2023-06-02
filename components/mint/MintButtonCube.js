import React from "react";
import { usePrepareContractWrite, useAccount, useContractWrite } from 'wagmi'
import { ethers } from "ethers";
import {
    useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper,
    Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput
} from "@chakra-ui/react"
import Web3 from "web3";
import {
    Badge,
    Flex,
    Stack,
    Image,
    Link,
    useColorModeValue, Grid, HStack, SimpleGrid, Collapse, useDisclosure, IconButton
} from '@chakra-ui/react'
export default function MBC() {
    //Set Gallery Auction TokenId
    const [tokenId, setTokenId] = React.useState(0)
    // Set Gallery Contract
    const [contract, setContract] = React.useState('0x7A9b67f2b11440aEDfF6861325e7cC5d5b25675C')
    // Set Amount to Purchase *User only Purchaseds 1*
    const [amount, setAmount] = React.useState(1)
    const toast = useToast()

    // Fetch User Address
    const { address } = useAccount()
    console.log(address)
    const price = Web3.utils.fromWei("800000000000000000", "wei")

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
        args: [contract, tokenId, amount],
    })
    console.log(config)
    console.log(error)

    // Write to Marketplace Contract
    const { write } = useContractWrite({
        ...config,
        onSuccess(data) {
            toast({
                title: 'Purchased Successful',
                description: "Purchaseded Gallery",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            console.log("Purchased successful");
        },
        onError(error) {
            toast({
                title: 'Purchase Failed.. User rejected the transaction or not enough Ether To Purchase Cube Gallery',
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
            <Center py={6}>
                <Stack
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ sm: '100%', md: '1000px' }}
                    height={{ sm: '476px', md: '550px' }}
                    direction={{ base: 'column', md: 'row' }}
                    bg={useColorModeValue('black', 'gray.900')}
                    boxShadow={'2xl'}
                    padding={4}>
                    {/* <Flex flex={1} bg="black"> */}
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>

                        <Image
                            objectFit="fill"
                            boxSize="100%"
                            // sizes='100vw'
                            src={
                                'images/Minotaur.png'
                            }
                        />
                    </div>
                    {/* </Flex> */}
                    <Stack
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={1}
                        pt={2}>
                        {/* <div style={{ width: '100%', height: '100%', position: 'relative' }}>

              <Image
                objectFit="fill"
                // boxSize="100%"
                // sizes='100vw'
                src={
                  'images/47.jpg'
                }
              />
            </div> */}
                        <Heading fontSize={'2xl'} color={'white'} fontFamily={'body'}>
                            Cube Gallery
                        </Heading>
                        <Text fontWeight={600} color={'white'} size="sm" mb={4}>
                            @TaurosDAO
                        </Text>
                        <Spacer />
                        <Text
                            textAlign={'center'}
                            color={useColorModeValue('white', 'white.400')}
                            px={3}>
                            Purchase the Cube gallery
                            {/* <Link href={'#'} color={'blue.400'}>
              
            </Link> */}
                            <Spacer /> Cube Galleries Tags
                        </Text>
                        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                            <Badge
                                px={2}
                                py={1}
                                bg={useColorModeValue('white', 'gray.800')}
                                fontWeight={'400'}>
                                #ArtGallery
                            </Badge>
                            <Badge
                                px={2}
                                py={1}
                                bg={useColorModeValue('white', 'gray.800')}
                                fontWeight={'400'}>
                                #TaurosDAO
                            </Badge>
                            <Badge
                                px={2}
                                py={1}
                                bg={useColorModeValue('white', 'gray.800')}
                                fontWeight={'400'}>
                                #Cube
                            </Badge>
                        </Stack>
                        <Spacer />
                        <Stack
                            width={'100%'}
                            mt={'2rem'}
                            direction={'row'}
                            padding={2}
                            justifyContent={'space-between'}
                            alignItems={'center'}>
                            <Button
                                flex={1}
                                fontSize={'sm'}
                                rounded={'full'}
                                _focus={{
                                    bg: 'gray.200',
                                }}>
                                View on openSea
                            </Button>
                            <Button
                                flex={1}
                                fontSize={'sm'}
                                rounded={'full'}
                                bg={'blue.400'}
                                color={'white'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                }
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                _focus={{
                                    bg: 'blue.500',
                                }}
                                disabled={!write} onClick={() => write?.()}>
                                Purchase Cube Gallery
                            </Button>
                            {/* {error && (
                                <div>{error.message}</div>
                            )} */}
                        </Stack>
                    </Stack>
                </Stack>
            </Center>

            {/* <Button disabled={!write} onClick={() => write?.()}>Buy</Button>
            {error && (
                <div>{error.message}</div>
            )} */}
        </>

    )
}


