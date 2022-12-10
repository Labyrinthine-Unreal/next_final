import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "@src/redux/data/dataActions";
import {Button, Container,Box, Link, Spacer, Text} from "@chakra-ui/react";

const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

export default function MBT() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(false);
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
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        <Text>setFeedback(`Minting your ${CONFIG.NFT_NAME}...`)</Text>;
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(mintAmount) //mintAmount, "https://ipfs.io/ipfs/Qmf5ArUFQyuYBd591Ext3Z4WzXjWzxAd8vciF6dfbmC1P6?filename=gh.gif"
            .send({
                gasLimit: String(totalGasLimit),
                to: CONFIG.CONTRACT_ADDRESS,
                from: blockchain.account,
                value: totalCostWei,
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback(<Text>"Mint Failed"</Text>);
                setClaimingNft(false);
            })
            .then((receipt) => {
                console.log(receipt);
                setFeedback(
                    <Text>`Nice , You are now a member of the ${CONFIG.NFT_NAME}`</Text>
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
        const configResponse = await fetch("/config/config.json", {
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
    }, [blockchain.account]);
    console.log(blockchain.account)

    return (
        <Box>
            <a href={CONFIG.MARKETPLACE_LINK}>
            </a>
            <Spacer />

            <Text>
                {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </Text>
            <Text>
                <Link target={"_blank"} href={CONFIG.SCAN_LINK}>
                    {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                </Link>
            </Text>
            { }
            <Spacer />
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                    The sale has ended.
                    <Text>
                        You can still find {CONFIG.NFT_NAME} on
                    </Text>
                </>
            ) : (
                <>
                    {blockchain.account === "" ||
                        blockchain.smartContract === null ? (
                        <Container>
                            {blockchain.errorMsg !== "" ? (
                                <>
                                    <Text>
                                        {blockchain.errorMsg}
                                    </Text>
                                </>
                            ) : null}
                        </Container>
                    ) : (
                        <>

                            {feedback}

                            {/* Increase Mint Amount */}
                            <Button
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                    e.preventDefault();
                                    incrementMintAmount();
                                }}
                            >
                                ▲
                            </Button>
                            {/* Display Mint Amount */}
                            <Spacer />
                            {mintAmount}
                            <Spacer />
                            {/* Decrease Mint Amount */}
                            <Button disabled={claimingNft ? 1 : 0} onClick={(e) => {
                                e.preventDefault();
                                decrementMintAmount();
                            }}
                            >
                                ▼
                            </Button>

                            <Button
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                    e.preventDefault();

                                    claimNFTs();
                                    getData();
                                }}
                            >
                                <Text> {claimingNft ? "MINTING" : "MINT"}</Text>
                            </Button>
                        </>
                    )}
                </>
            )}
            <Spacer />
            </Box>
    );
}


