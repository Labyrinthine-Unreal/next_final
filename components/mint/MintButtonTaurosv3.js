import { Link, Box, Button, Text, Spacer } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux"
import { connect } from "../../src/redux2/blockchain/blockchainActions"
import { fetchData } from "../../src/redux2/data/dataActions"
import { usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { ethers } from "ethers";
import { useAccount, useFeeData, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useContractRead, useContractWrite } from 'wagmi';
import bigInt, { BigNumber } from "big-integer";


const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;


export default function MBT() {
  const { address } = useAccount()
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = !!address;
  const {disconnect} = useDisconnect();

  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(50000000000000000 * mintAmount);
    let totalGasLimit = String(500000);
    // if(isConnected){
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .claimTauros(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `Congratulations, the TaurosDAO Membership is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };
  // }
  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };



  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("../public/config2/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account])

  // if (isConnected) {
    return (
      <Box>
            {/* <Text> If this Address is Correct, Click Button To Mint</Text> */}

        {blockchain.account === "" || blockchain.smartContract === null ? (
          <Box>
            <Text> MINTING ADDRESS</Text><br />
            <Button
              onClick={(e) => {
                e.preventDefault();
                {dispatch(connect())};
                getData();
              }}
            >
              is this Correct address? <br />
              { address} .. Click To mint TAUROS

            </Button>


          </Box>
        ) : (
          <Box>
            <Text textAlign="center">
              {feedback}
            </Text>
            <Box>
              <Button lineHeight="3" disabled={claimingNft ? 1 : 0}
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
              <Button disabled={claimingNft ? 1 : 0}
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
                disabled={claimingNft ? 1 : 0}
                onClick={(e) => {
                  e.preventDefault();
                  claimNFTs();
                  getData();
                  {disconnect}
                }}
              >
                {claimingNft ? "Minting" : "MINT"}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    )
  // }
}