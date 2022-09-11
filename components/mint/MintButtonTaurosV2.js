import { useToast, Link,Button, NumberInputStepper, Box, Spacer, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import CustomContainer from "@components/CustomContainer";
// import { Button } from 'web3uikit';
// import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import styles from "@styles/MintButton.module.css"
import taurosABI from "../ABIs/taurosABI"
import { usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { ethers } from "ethers";
import { useAccount, useFeeData, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useContractRead, useContractWrite } from 'wagmi';
import bigInt, { BigNumber } from "big-integer";


const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;


export default function MBT() {
  const { address } = useAccount()
  const [amount, setAmount] = useState(1)
  // const [value, setValue] = useControllableState({ defaultValue: 1 })

  const handleChange = (value) => setAmount(value)
  const toast = useToast()


  const contractConfig = {
    addressOrName: '0xa58Ad36d83e45b068864Ef2f74Ce951DCB3930aA',
    contractInterface: taurosABI,
    functionName: 'claimTauros',
    args: [amount, {value:ethers.utils.parseEther('0.05')}],
  };


  const { config } = usePrepareContractWrite({
    ...contractConfig
  })



  const { writeAsync: mint, error: mintError } = useContractWrite({
    ...config,
  });
  const [mintLoading, setMintLoading] = useState(false);
  const isConnected = !!address;
  const [mintedTokenId, setMintedTokenId] = useState(1);
  const feeData = useFeeData({
    chainId: 4,
  })
  
  const onMintClick = async () => {
    try {
      setMintLoading(true);
      if (isConnected){
      const tx = await mint({
        amount,
        args: [
          {value:ethers.utils.parseEther('0.05')},
          {
            gasLimit: 250000
          },
        ],
      });
    }
      const receipt = await tx.wait();
      console.log('TX receipt', receipt);
      // @ts-ignore
      const mintedTokenId = await receipt.events[0].args[2].toString();
      setMintedTokenId(mintedTokenId);
    } catch (error) {
      console.error(error);
    } finally {
      setMintLoading(false);
    }
  };


  // if (isConnected) {
    return (
      <CustomContainer>
        <Box fontSize="xl" fontWeight="bold" align="right">
          <form className={styles.btn} onSubmit={async e => {
            e.preventDefault()
          }}>
            <FormControl my="4" maxW="210" minW="210">
              <FormLabel htmlFor="amount" textAlign="right">
                Amount to Mint
              </FormLabel>

              <NumberInput step={1} min={1} max={10} onChange={handleChange} allowMouseWheel>
                <NumberInputField id="amount" value={amount} bg="gray.200" boxShadow="lg" />
                <NumberInputStepper bg="teal.300">
                  <NumberIncrementStepper borderLeft="none" />
                  <Spacer />
                  <NumberDecrementStepper borderLeft="none" />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Spacer />
            <Button
              disabled={!isConnected || mintLoading}
              marginTop='6'
              onClick={onMintClick}
              textColor='white'
              bg='blue.500'
              _hover={{
                bg: 'blue.700',
              }}
            >
              {isConnected ? '🎉 Mint' : '🎉 Mint (Connect Wallet)'}
            </Button>
            {mintError && (
              <Text marginTop='4'>⛔️ Mint unsuccessful! Error message:</Text>
            )}
            {mintError && (
              <pre style={{ marginTop: '8px', color: 'red' }}>
                <code>{JSON.stringify(mintError, null, ' ')}</code>
              </pre>
            )}
            {mintLoading && <Text marginTop='2'>Minting... please wait</Text>}
            {mintedTokenId && (
              <Text marginTop='2'>
                🥳 Mint successful! You can view your NFT{' '}
                <Link
                  isExternal
                  href='https://opensea.io'
                  color='blue'
                  textDecoration='underline'
                >
                  here!
                </Link>
              </Text>
            )}

          </form>
        </Box>
      </CustomContainer>
    )
  }
// }
