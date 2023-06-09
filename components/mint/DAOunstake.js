import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite, useAccount } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
import NukaCarousel from "nuka-carousel";
import {
  Badge,
  Link,
  useColorModeValue, Grid, HStack, SimpleGrid, Collapse, useDisclosure, IconButton
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack } from '@chakra-ui/react'

export default function Unstake() {
  const [amount, setAmount] = React.useState(0)
  // const handleChange = (value) => setAmount(value)

  const [tokenId, setTokenId] = React.useState(0)
  const handleChange = (value) => setTokenId(value)
  // Fetch user address
  const { address } = useAccount()
  console.log(address)
  const toast = useToast()

  //Tauros Price : TODO fetch price from Contract for automatic update
  const price = Web3.utils.fromWei("50000000000000000", "wei")

  // Initialze claimTauros Contract write
  const { config, error } = usePrepareContractWrite({
    address: '0xB9FB937CBFcC42B0587e75a05FCD38f243D6ee1a',
    abi: [
      {
        name: 'DAOunstake',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs:
          [
            //Contract Params
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          ],
        outputs: [],
      },
    ],
    functionName: 'DAOunstake',
    overrides: {
      // Override Price 
      gasLimit: 270000,
    },
    // Amount to minta
    args: [tokenId],
    // enabled: Boolean(tokenId),
  })
  console.log(config)
  console.log(error)
  
  // Contract Write
  const { data, write } = useContractWrite({
    ...config,
    onSuccess(data){
      toast({
        title: 'Unstake Successful',
        description: "staked TAUROS",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      console.log("removal successful");
    },
    onError(error) {
      toast({
        title: 'Unstake Failed.. User rejected the transaction or not enough Ether To Purchase TAUROS',
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
  // console.log(data)
  // console.log(write)
  // console.log(price * amount)


  return (
    <>


{/* <Center>
<Heading color={"white"}>UnStake DAO</Heading>
</Center> */}

      {/* <NukaCarousel cellAlign="center" slidesToShow={1} slidesToScroll={1} cellSpacing={20}> */}
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '500px' }}
          height={{ sm: '476px', md: '550px' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('black', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          {/* <Flex flex={1} bg="black"> */}
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
{/* 
              <Image
                objectFit="fill"
                boxSize="100%"
                // sizes='100vw'
                src={
                  'https://pbs.twimg.com/media/FxSM1ndXsAA5IR2?format=jpg'
                }
              /> */}
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
            <Heading fontSize={'2xl'} color={'white'}>
              Unstake TaurosDao
            </Heading>
            <Text fontWeight={600} color={'white'} size="sm" mb={4}>
              remove your dao stake
            </Text>
            <Text fontWeight={300} color={'white'} size="sm" mb={4}>
              Must wait 7 days to remove stake
            </Text>
            <Spacer />
 
            {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}> */}
            {/* <form className={styles.btn} onSubmit={async e => {
          e.preventDefault()
        }}>

      <label for="tokenId">Token ID</label>
      <input
        id="tokenId"
        onChange={(e) => setTokenId(e.target.value)}
        placeholder="420"
        value={tokenId}
      />
      <button onClick={() => write?.()}>Unstake</button>
    </form> */}
              <FormControl my="4" maxW="210" minW="210">
            <FormLabel htmlFor="amount" textAlign="right">
              TokenID
            </FormLabel>

            <NumberInput step={1} min={0} max={7110} defaultValue={0} onChange={handleChange} allowMouseWheel>
              <NumberInputField id="amount" value={tokenId} bg="gray.200" boxShadow="lg" />
              <NumberInputStepper bg="teal.300">
                <NumberIncrementStepper borderLeft="none" />
                <Spacer />
                <NumberDecrementStepper borderLeft="none" />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Spacer />
          <Button onClick={() => write?.()}>
            UnStake DAO
          </Button> 
    
              {/* <Badge
                px={2}
                py={1}
                bg={useColorModeValue('white', 'gray.800')}
                fontWeight={'400'}>
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('white', 'gray.800')}
                fontWeight={'400'}>
                #blender
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('white', 'gray.800')}
                fontWeight={'400'}>
                #TaurosDAO
              </Badge> */}
            </Stack>
            <Spacer />
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              {/* <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                View art on openSea
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
                }}>
                Follow on Twitter
              </Button> */}
            </Stack>
          </Stack>
        {/* </Stack> */}
      </Center>
    </>
  )
}


