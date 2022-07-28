import { Flex, Link, Button, Container, Text, Box, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux"
import { connect } from "@/src/redux/blockchain/blockchainActions"
import { fetchData } from "@/src/redux/data/dataActions"

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export default function MintButtonEstates({ user }) {
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

    // const [amount, setAmount] = useState(0)
    // const [receiver, setReceiver] = useState('')
    // const handleChange = (value) => setAmount(value)
    // const toast = useToast()
    // const { fetch, isFetching } = useApiContract({
    //     chain: "rinkeby",
    //     address: "0x515f70BDad45169e92e1Cb16584BceD3C336c5ec",
    //     function_name: "mintNFTs",
    //     abi: ABI,
    //     params: { _mintNFTs: setAmount },
    // })

    const claimNFTs = () => {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(250000);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
        setClaimingNft(true);
        blockchain.smartContract.methods
        .mintNFTs(mintAmount) //mintAmount, "https://ipfs.io/ipfs/Qmf5ArUFQyuYBd591Ext3Z4WzXjWzxAd8vciF6dfbmC1P6?filename=gh.gif"
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
              `Congratulations, the TaurosDAO Estate is yours! go visit Opensea.io to view it.`
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
        if (newMintAmount > 10) {
          newMintAmount = 10;
        }
        setMintAmount(newMintAmount);
      };
    
      const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          dispatch(fetchData(blockchain.account));
        }
      };
    
      const getConfig = async () => {
        const configResponse = await fetch("../public/config/config.json", {
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
        <>
          <Container> 
            {/* <Link href={CONFIG.MARKETPLACE_LINK}>
              <StyledLogo alt={"logo"} src={"/config/images/logo.png"}/>
            </Link> */}
                <Text align="center">
                  {data.totalSupply} / 7110
                </Text>
                
                <Text>
                  <Link target={"_blank"} href={CONFIG.SCAN_LINK}>
                    {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                  </Link>
                </Text>

                {Number(data.totalSupply) >=7110 ? (
                  <>
                    <Text>
                      The sale has ended.
                    </Text>
                    <Text>
                      {/* You can still find {CONFIG.NFT_NAME} on */}
                    </Text>
                    
                  </>
                ) : (
                  <Box columns={3} align="center">
                    {blockchain.account === "" ||
                    blockchain.smartContract === null ? (
                      <Flex alignItems="center">
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
                            <Text>
                              {blockchain.errorMsg}
                            </Text>
                        ) : null}
                      </Flex>
                    ) : (
                      <SimpleGrid align="center">
                        <Text>
                          {feedback}
                        </Text>
                        
                        <Flex alignItems="center">
                            <Button
                              disabled={claimingNft ? 1 : 0}
                              onClick={(e) => {
                                e.preventDefault();
                                decrementMintAmount();
                              }}
                            >
                              -
                            </Button>
                            
                            <Text>
                              {mintAmount}
                            </Text>
                            
                            <Button
                              disabled={claimingNft ? 1 : 0}
                              onClick={(e) => {
                                e.preventDefault();
                                incrementMintAmount();
                              }}
                            >
                              +
                            </Button>
                        </Flex>

                        <Box align="center">
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
                      </SimpleGrid>
                    )}
                  </Box>
                )}
          </Container>
      </>
    )
  }


{/* Opensea button --> move to bottom of the page */}
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