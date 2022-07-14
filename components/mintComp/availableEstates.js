import { Flex, Link, Container, Text, Box, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux"
import { connect } from "@/src/redux/blockchain/blockchainActions"
import { fetchData } from "@/src/redux/data/dataActions"
import { Button } from 'web3uikit';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';

// import taurosABI from "./ABIs/taurosABI.json";
import estatesABI from "../ABIs/estatesABI"

const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

export default function availableEstates() {

    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();

    useEffect(() => {
        if (isAuthenticated) {

        }

    }, [isAuthenticated])

    async function _availableEstates() {
        let options = {
            // msgValue: Moralis.Units.ETH("0.05"),
            contractAddress: '0x7ed80F34Bf90Eff85423D88b7B827b75A51B6552',
            functionName: 'balanceOf',
            abi: estatesABI,
            params: {
                owner: user.get('ethAddress'),
            }
        }
        await Moralis.enableWeb3()
        await contractProcessor.fetch({
            params: options,
            onSuccess: () => {
                console.log("Successful");
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    return (
          <Button onClick={() => {
            if (isAuthenticated) {_availableEstates();}
          }} text={"Available Estates"} theme={"primary"} />
      );
    }

