import { Link, Box, Button, Text } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux"
import { connect } from "@/src/redux2/blockchain/blockchainActions"
import { fetchData } from "@/src/redux2/data/dataActions"

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export default function MintButtonTauros({ user }) {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] =  useState(false);
    const [mintAmount, setMintAmount] = useState(1);
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
        let totalGasLimit = String(250000);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
        setClaimingNft(true);
        blockchain.smartContract.methods
        .mintNFTs(mintAmount)
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


    return (
      <Box>
        {blockchain.account === "" || blockchain.smartContract === null ? (
          <Box>
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch(connect());
                getData();
              }}
            >
              CONNECT
            </Button>

            {blockchain.errorMsg !== "" ? (
                <Text textAlign="center">
                  {blockchain.errorMsg}
                </Text>
            ) : null}
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
                }}
              >
                {claimingNft ? "Minting" : "MINT"}
              </Button>
            </Box>
          </Box>
        )}
    </Box>
  )
}


// import { useToast, Link,Button, NumberInputStepper, Box, Spacer, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
// import { useEffect, useState, } from "react";
// import CustomContainer from "@components/CustomContainer";
// import styles from "@styles/MintButton.module.css"
// import taurosABI from "../ABIs/taurosABI"
// import { usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
// import { ethers } from "ethers";
// import { useAccount, useFeeData, useConnect, useSignMessage, useDisconnect } from 'wagmi';
// import { useContractRead, useContractWrite } from 'wagmi';
// import bigInt, { BigNumber } from "big-integer";


// const truncate = (input, len) =>
//   input.length > len ? `${input.substring(0, len)}...` : input;


// export default function MBT() {
//   const { address } = useAccount()
//   const [amount, setAmount] = useState(1)
//   const MINT_PRICE = 0.05;
//   const MAX_MINT = 5;
//   const handleChange = (value) => setAmount(value)
//   const toast = useToast()

//   const { data: PRICE } = useContractRead({
//     addressOrName: '0xa58Ad36d83e45b068864Ef2f74Ce951DCB3930aA',
//     contractInterface: taurosABI,
//     functionName: 'PRICE',
//   });

//   const contractConfig = {
//     addressOrName: '0xa58Ad36d83e45b068864Ef2f74Ce951DCB3930aA',
//     contractInterface: taurosABI,
//     functionName: 'claimTauros',
//     args: [amount, { value: PRICE?.toString() }],
//   };


//   const { config } = usePrepareContractWrite({
//     ...contractConfig
//   })

//   const { writeAsync: mint, error: mintError } = useContractWrite({
//     ...config,
//   });

//   const [mintLoading, setMintLoading] = useState(false);
//   const isConnected = !!address;
//   const [mintedTokenId, setMintedTokenId] = useState(1);

//   let onMintClick = async () => {
//     try {
//       setMintLoading(true);
//       if (isConnected){
//       const tx = await mint({
//         args: [
//           {
//             gasLimit: 250000
//           },
//         ],
//       });
//       const receipt = await tx.wait();
//       console.log('TX receipt', receipt);
//       const mintedTokenId = await receipt.events[0].args[2].toString();
//       setMintedTokenId(mintedTokenId); 
//       console.log(setMintedTokenId(mintedTokenId))
//     }
//     } catch (error) {
//       console.error('error');
//     } finally {
//       setMintLoading(false);
//     }
//   };


//     return (
//       <CustomContainer>
//         <Box fontSize="xl" fontWeight="bold" align="right">
//           <form className={styles.btn} onSubmit={async e => {
//             e.preventDefault()
//           }}>
//             <FormControl my="4" maxW="210" minW="210">
//               <FormLabel htmlFor="amount" textAlign="right">
//                 Amount to Mint
//               </FormLabel>

//               <NumberInput step={1} min={1} max={5} onChange={`${decrementMintAmount} ${incrementMintAmount}`} allowMouseWheel>
//                 <NumberInputField id="amount" value={amount} bg="gray.200" boxShadow="lg" />
//                 <NumberInputStepper bg="teal.300">
//                   <NumberIncrementStepper borderLeft="none" />
//                   <Spacer />
//                   <NumberDecrementStepper borderLeft="none" />
//                 </NumberInputStepper>
//               </NumberInput>
//             </FormControl>
//             <Spacer />
//             <Button
//               disabled={!isConnected || mintLoading}
//               marginTop='6'
//               onClick={onMintClick}
//               textColor='white'
//               bg='blue.500'
//               _hover={{
//                 bg: 'blue.700',
//               }}
//             >
//               {isConnected ? '🎉 Mint' : '🎉 Mint (Connect Wallet)'}
//             </Button>
//             {mintError && (
//               <Text marginTop='4'>⛔️ Mint unsuccessful! Error message:</Text>
//             )}
//             {mintError && (
//               <pre style={{ marginTop: '8px', color: 'red' }}>
//                 <code>{JSON.stringify(mintError, null, ' ')}</code>
//               </pre>
//             )}
//             {mintLoading && <Text marginTop='2'>Minting... please wait</Text>}
//             {mintedTokenId && (
//               <Text marginTop='2'>
//                 🥳 Mint successful! You can view your NFT{' '}
//                 <Link
//                   isExternal
//                   href='https://opensea.io'
//                   color='blue'
//                   textDecoration='underline'
//                 >
//                   here!
//                 </Link>
//               </Text>
//             )}

//           </form>
//         </Box>
//       </CustomContainer>
//     )
//   }