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

export default function MBE() {
    // const dispatch = useDispatch();
    // const blockchain = useSelector((state) => state.blockchain);
    // const data = useSelector((state) => state.data);
    // const [claimingNft, setClaimingNft] = useState(false);
    // const [feedback, setFeedback] = useState(false);
    // const [mintAmount, setMintAmount] = useState(1);
    // const [CONFIG, SET_CONFIG] = useState({
    //     CONTRACT_ADDRESS: "",
    //     SCAN_LINK: "",
    //     NETWORK: {
    //         NAME: "",
    //         SYMBOL: "",
    //         ID: 0,
    //     },
    //     NFT_NAME: "",
    //     SYMBOL: "",
    //     MAX_SUPPLY: 1,
    //     WEI_COST: 0,
    //     DISPLAY_COST: 0,
    //     GAS_LIMIT: 0,
    //     MARKETPLACE: "",
    //     MARKETPLACE_LINK: "",
    //     SHOW_BACKGROUND: false,
    // });

    // const decrementMintAmount = () => {
    //     let newMintAmount = mintAmount - 1;
    //     if (newMintAmount < 1) {
    //         newMintAmount = 1;
    //     }
    //     setMintAmount(newMintAmount);
    // };

    // const incrementMintAmount = () => {
    //     let newMintAmount = mintAmount + 1;
    //     if (newMintAmount > 10) {
    //         newMintAmount = 10;
    //     }
    //     setMintAmount(newMintAmount);
    // };

    // const getData = () => {
    //     if (blockchain.account !== "" && blockchain.smartContract !== null) {
    //         dispatch(fetchData(blockchain.account));
    //     }
    // };

    // const getConfig = async () => {
    //     const configResponse = await fetch("../public/config/config.json", {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //     });
    //     const config = await configResponse.json();
    //     SET_CONFIG(config);
    // };

    // useEffect(() => {
    //     getConfig();
    // }, []);

    // useEffect(() => {
    //     getData();
    // }, [blockchain.account])

    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();

    useEffect(() => {
        if (isAuthenticated) {

        }

    }, [isAuthenticated])

    async function _mintEstates() {
        let options = {
            // msgValue: Moralis.Units.ETH("0.05"),
            contractAddress: '0x25cff20e9fb576b76768d4ce69c66578b7f7ac5d',
            functionName: 'mintNFTs',
            abi: estatesABI,
            params: {
                _count: 1,
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
            if (isAuthenticated) {_mintEstates();}
          }} text={"Mint Estates"} theme={"primary"} />
      );
    }

