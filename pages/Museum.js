import React, { Component, Fragment } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { useEffect, useState, useRef } from "react";
import { Box, Heading, Spacer, Text, Flex, SimpleGrid,Button } from '@chakra-ui/react';
import styles from "@styles/MintButton.module.css";
import taurosABI from "../components/ABIs/taurosABI";
import CustomContainer from "@components/CustomContainer";
// import "./BetaPage.css";

export default function MuseumPage() {
    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();

    const PRICE = {
        contractAddress: "0x1A0F33bBc5c7bA83f490cdB6C13ee50e1C851908",
        functionName: "PRICE",
        abi: taurosABI,
      };

      useEffect(() => {
        if (isAuthenticated) {
    
        }
    
      }, [isAuthenticated])

      async function _mintTauros() {
        let options = {
          contractAddress: '0x1A0F33bBc5c7bA83f490cdB6C13ee50e1C851908',
          functionName: 'claimTauros',
          abi: taurosABI,
          msgValue: await Moralis.executeFunction(PRICE) * amount,
          // Moralis.Units.ETH("0.05")* amount,
    //       Moralis.Units.ETH("0.08")
          params: {
            _count: amount,
          }
        }

        await contractProcessor.fetch({
            params: options,
            onSuccess: () => {
              toast({
                title: 'Mint Successful',
                description: "Minted TAUROS",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              console.log("Mint successful");
            },
            onError: (error) => {
              toast({
                title: 'Mint Failed.. User rejected the transaction or not enough Ether To Purchase TAUROS',
                description: console.log(error),
                status: "error",
                duration: '9000',
                isClosable: true
              })
              console.log(error);
            }
          })
        }

    const { unityProvider, isLoaded, requestFullscreen, loadingProgression } = useUnityContext({
        loaderUrl: "unity/build/WebGL/WebGL/Build/Gallery.loader.js",
        dataUrl: "unity/build/WebGL/WebGL/Build/Gallery.data",
        frameworkUrl: "unity/build/WebGL/WebGL/Build/Gallery.framework.js",
        codeUrl: "unity/build/WebGL/WebGL/Build/Gallery.wasm",
    });
    

    function handleClickEnterFullscreen() {
        requestFullscreen(true);
    }

    const loadingPercentage = Math.round(loadingProgression * 100);
    //   const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();

      useEffect(() => {
        if (isAuthenticated) {

        }

      }, [isAuthenticated])

    //   if (isAuthenticated){
    return (

        <Fragment>
            <Box pt={10} align="center">
                {isLoaded === false && (

                    <div className="loading-overlay">
                        <p>Loading... ({loadingPercentage}%)</p>
                    </div>
                )}
                <button onClick={handleClickEnterFullscreen}><Text>Enter <br />Fullscreen</Text></button>
                <Spacer /> <br />
                <Unity className="unity" unityProvider={unityProvider} style={{ width: 900, height: 600 }} />
            </Box>
            <CustomContainer>
      <Box fontSize="xl" fontWeight="bold" align="right">
        <form className={styles.btn} onSubmit={async e => {
          e.preventDefault()
        }}>
          <FormControl my="4" maxW="210" minW="210">
            <FormLabel htmlFor="amount" textAlign="right">
              Amount to Mint
            </FormLabel>

            <NumberInput step={1} min={1} max={10} defaultValue={1} onChange={handleChange} allowMouseWheel>
              <NumberInputField  id="amount" value={amount} bg="gray.200" boxShadow="lg" />
              <NumberInputStepper bg="teal.300">
                <NumberIncrementStepper borderLeft="none" />
                <Spacer />
                <NumberDecrementStepper borderLeft="none" />
                </NumberInputStepper>
              </NumberInput>
          </FormControl>
          <Spacer />
          <Button
            color="white" 
            _hover={{bg: "teal.400"}} 
            rounded="xl"
            onClick={() => {
            if (isAuthenticated) { _mintTauros(); }
          }}>
            Mint
          </Button>

        </form>
      </Box>
    </CustomContainer>
        </Fragment>
        
    );

}
// }

