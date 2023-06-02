import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite, useAccount } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
export default function Stake() {
  const [amount, setAmount] = React.useState(0)
  const handleChange = (value) => setAmount(value)

  // const [tokenId, setTokenId] = React.useState()
  // Fetch user address
  const { address } = useAccount()
  console.log(address)
  const toast = useToast()

  //Tauros Price : TODO fetch price from Contract for automatic update
  const price = Web3.utils.fromWei("50000000000000000", "wei")

  // Initialze claimTauros Contract write
  const { config, error } = usePrepareContractWrite({
    address: '0x2816e4B49a9d7ae07720a922a7A805F9fA5876c4',
    abi: [
      {
        name: 'DAOstake',
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
    functionName: 'DAOstake',
    overrides: {
      // Override Price 
      gasLimit: 270000,
    },
    // Amount to minta
    args: [amount],
    // enabled: Boolean(tokenId),
  })
  console.log(config)
  console.log(error)
  
  // Contract Write
  const { data, write } = useContractWrite({
    ...config,
    onSuccess(data){
      toast({
        title: 'Stake Successful',
        description: "staked TAUROS",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      console.log("Mint successful");
    },
    onError(error) {
      toast({
        title: 'Stake Failed.. User rejected the transaction or not enough Ether To Purchase TAUROS',
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
      <Box fontSize="xl" fontWeight="bold" align="right">

         {/* <form className={styles.btn} onSubmit={async e => {
          e.preventDefault()
        }}> */}
          <FormControl my="4" maxW="210" minW="210">
            <FormLabel htmlFor="amount" textAlign="right">
              Stake DAO
            </FormLabel>

            <NumberInput step={1} min={0} max={7110} defaultValue={0} onChange={handleChange} allowMouseWheel>
              <NumberInputField id="amount" value={amount} bg="gray.200" boxShadow="lg" />
              <NumberInputStepper bg="teal.300">
                <NumberIncrementStepper borderLeft="none" />
                <Spacer />
                <NumberDecrementStepper borderLeft="none" />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Spacer />
          <Button onClick={() => write?.()}>
            Stake DAO
          </Button> 

        {/* </form> */}

        {/* <form> */}
      {/* <label for="tokenId">Token ID</label>
      <input
        id="tokenId"
        onChange={(e) => setTokenId(e.target.value)}
        placeholder="420"
        value={tokenId}
      />
      <button onClick={() => write?.()}>Stake</button> */}
    {/* </form>  */}
      </Box> 
    </>
  )
}


