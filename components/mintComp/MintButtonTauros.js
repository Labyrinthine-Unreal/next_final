import { Flex, Link, Button } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux"
import { connect } from "@/src/redux2/blockchain/blockchainActions"
import { fetchData } from "@/src/redux2/data/dataActions"
import * as s from "@/styles/globalStyles"

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
        let totalCostWei = String(50000000000000000 * mintAmount);
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
        <s.Screen>
    
        {/* Opensea button --> move to bottom of the page
        
        <s.Container jc={"right"} ai={"right"} style={{ width: "100%" }}>

      <span
            style={{
              textAlign: "right",
            }}
          >

            <Button
              style={{
                margin: "5px",
              }}
              onClick={(e) => {
                window.open(CONFIG.MARKETPLACE_LINK, "_blank");
              }}
            >
              {CONFIG.MARKETPLACE}
            </Button>
          </span>          
      </s.Container>               */}
  
  
     <s.Container
      flex={1}
      ai={"center"}
      style={{ padding: 24, backgroundColor: "var(--primary)" }}
      // image={CONFIG.SHOW_BACKGROUND ? "https://raw.githubusercontent.com/CalvinGreen94/c-force-reg/main/images/media/anihotime/clean/lab.png" : null}
    > 
      <a href={CONFIG.MARKETPLACE_LINK}>
        {/* <StyledLogo alt={"logo"} src={"/config/images/logo.png"}/> */}
      </a>
      <s.SpacerSmall />
          
          
          
      <Flex flex={1} style={{ padding: 24 }} test>
        {<s.Container flex={1} jc={"center"} ai={"center"}>
          {/* <StyledImg alt={"example"} src={"/config/images/comp1_1.gif"} /> */}
        </s.Container> }
        <s.SpacerLarge />
        <s.Container
          flex={2}
          jc={"center"}
          ai={"center"}

        >
          <s.TextTitle
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "var(--accent-text)",
            }}
          >
            {data.totalSupply} / 7110
          </s.TextTitle>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
            <Link target={"_blank"} href={CONFIG.SCAN_LINK}>
              {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
            </Link>
          </s.TextDescription>

          <s.SpacerSmall />
          {Number(data.totalSupply) >=7110 ? (
            <>
              <s.TextTitle
                style={{ textAlign: "center", color: "var(--accent-text)" }}
              >
                The sale has ended.
              </s.TextTitle>
              <s.TextDescription
                // style={{ textAlign: "center", color: "var(--accent-text)" }}
              >
                {/* You can still find {CONFIG.NFT_NAME} on */}
              </s.TextDescription>
              <s.SpacerSmall />
            </>
          ) : (
            <>
              <s.TextTitle
                style={{ textAlign: "center", color: "var(--accent-text)" }}
              >
              </s.TextTitle>
              <s.SpacerXSmall />
              <s.TextDescription
                style={{ textAlign: "center", color: "var(--accent-text)" }}
              >
                Excluding gas fees
              </s.TextDescription>
              <s.SpacerSmall />
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <s.Container ai={"center"} jc={"center"}>
                  <s.SpacerSmall />
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
                    <>
                      <s.SpacerSmall />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {blockchain.errorMsg}
                      </s.TextDescription>
                    </>
                  ) : null}
                </s.Container>
              ) : (
                <>
                  <s.TextDescription
                    style={{
                      textAlign: "center",
                      color: "var(--accent-text)",
                    }}
                  >
                    {feedback}
                  </s.TextDescription>
                  <s.SpacerMedium />
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <Button
                      style={{ lineHeight: 0.4,
                             color: "var(--secondary-text)"
                            }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      -
                    </Button>
                    <s.SpacerMedium />
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {mintAmount}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <Button
                      style={{ 
                             color: "var(--secondary-text)"
                            }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      +
                    </Button>
                  </s.Container>
                  <s.SpacerSmall />
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
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
                  </s.Container>
                </>
              )}
            </>
          )}
          <s.SpacerMedium />
        </s.Container>
        <s.SpacerLarge />
        <s.Container flex={1} jc={"center"} ai={"center"}>
          {/* <StyledImg
            alt={"example"}
            src={"/config/images/comp1_1.gif"}
            style={{ transform: "scaleX(-1)" }}
          /> */}
        </s.Container>
      </Flex>
      <s.SpacerMedium />

    </s.Container>
  </s.Screen>
)


}