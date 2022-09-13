import { Link, Box, Button, Text, Spacer,Container } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux"
import { connect } from "../../src/redux2/blockchain/blockchainActions"
import { fetchData } from "../../src/redux2/data/dataActions"
import { usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { ethers } from "ethers";
import { useAccount, useFeeData, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useContractRead, useContractWrite } from 'wagmi';
import bigInt, { BigNumber } from "big-integer";
import taurosABI from "../ABIs/taurosABI"
import { ConnectButton } from '@rainbow-me/rainbowkit';


const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;


export default function MBT() {
  const { address } = useAccount()
  const dispatch = useDispatch();
  // const blockchain = useSelector((state) => state.blockchain);
  // const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = !!address;
  const { disconnect } = useDisconnect();
  const { data: PRICE } = useContractRead({
    addressOrName: '0xfb467198ce9724bd1DC69f91d1a5D5e7f77CB93E',
    contractInterface: taurosABI,
    functionName: 'PRICE',
  });

  const contractConfig = {
    addressOrName: '0xfb467198ce9724bd1DC69f91d1a5D5e7f77CB93E',
    contractInterface: taurosABI,
    functionName: 'claimTauros',
    args: [mintAmount, 
      { value: PRICE,         
           gasLimit: 500000
    }],
  };


  const { config } = usePrepareContractWrite({
    ...contractConfig
  })

  const { writeAsync: mint, error: mintError } = useContractWrite({
    ...config,
  });
  const [mintLoading, setMintLoading] = useState(false);
  const [mintedTokenId, setMintedTokenId] = useState(1);
  let onMintClick = async () => {
    try {
      setMintLoading(true);
      if (isConnected) {
        console.log(contractConfig)
        console.log(config)
        console.log(mintAmount)
        const tx = await mint(
        );
        const receipt = await tx.wait();
        console.log('TX receipt', receipt);
        // @ts-ignore
        const mintedTokenId = await receipt.events[0].args[2].toString();
        setMintedTokenId(mintedTokenId);
        console.log(setMintedTokenId(mintedTokenId))
      }
    } catch (error) {
      console.error('error');
    } finally {
      setMintLoading(false);
    }
  };


  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
    // mint(         
    //   {
    //   //  newMintAmount*PRICE,
    //    args: [
    //      {
    //        gasLimit: 500000
    //      },
    //    ],
    //  })
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
    // mint(         
    //    {
    //     // newMintAmount,
    //     args: [
    //       {
    //         gasLimit: 500000
    //       },
    //     ],
    //   })


  };


  // if (isConnected) {
  return (
    <Box>
    <Container paddingY='10'>
      <ConnectButton />
    </Container>

        <Box>
          <Text textAlign="center">
            {feedback}
          </Text>
          <Box>
            <Button disabled={!isConnected || mintLoading}
            lineHeight="3" 
              onClick={(e) => {
                e.preventDefault();
                decrementMintAmount();
              }}
            >
              -
            </Button>
            <Text textAlign="center">
              {mintAmount}
            </Text>
            <Button disabled={!isConnected || mintLoading}
                onClick={(e) => {
                  e.preventDefault();
                  incrementMintAmount();
                }}
            >
              +
            </Button>
          </Box>
          <Box>
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
              {mintLoading ? "Minting" : "MINT"}
            </Button>
          </Box>
        </Box>
      {/* ) */}
    </Box>
  )
}
