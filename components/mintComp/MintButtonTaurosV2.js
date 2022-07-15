import { Container,SimpleGrid,Divider,useToast,Flex,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,NumberInputField,Text,NumberInput,Link,Box,Tabs,TabPanel,TabList,Tab,TabPanels,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { connect } from "@/src/redux/blockchain/blockchainActions"
// import { fetchData } from "@/src/redux/data/dataActions"
import { Button } from 'web3uikit';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import taurosABI from "../ABIs/taurosABI"


const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

export default function MBT() {
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

    const [amount, setAmount] = useState(0)
    const [receiver,setReceiver ] = useState('')
    const handleChange = (value) => setAmount(value)
    const toast = useToast()

    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();

    useEffect(() => {
        if (isAuthenticated) {

        }

    }, [isAuthenticated])

    async function _mintTauros() {
        let options = {
          contractAddress: '0x7ed80F34Bf90Eff85423D88b7B827b75A51B6552',
          functionName: 'mintNFTs',
          abi: taurosABI,
          msgValue: Moralis.Units.ETH("0.05"),
          params: {
            _mintAmount: 1,
          }
        }
        await Moralis.enableWeb3()
        await contractProcessor.fetch({
          params: options,
          onSuccess: () => {
            toast({
                title: 'Mint Successful',
                description: "Minted TaurosDAO Membership",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            console.log("Mint successful");
        },
        onError: (error) => {
            toast({
                title: 'Mint Failed.. Not enough Ether To Purchase TaurosDAO Membership',
                description: console.log(error),
                status: "error",
                duration: '9000',
                isClosable: true
            }) 
            console.log(error);
        }
        })
      }
    return (
        
        <Button onClick={() => {
            if (isAuthenticated) {_mintTauros();}
          }} text={"Mint Taurus"} theme={"primary"} />
      );
    }

{/* Opensea button --> move to bottom of the page */ }
{/* <Container>
            <span>
                <Button
                  onClick={(e) => {
                    window.open(CONFIG.MARKETPLACE_LINK, "_blank");
                  }}
                >
                  {CONFIG.MARKETPLACE}
                </Button>
            </span>          
          </Container>               */}