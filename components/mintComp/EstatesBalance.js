import CustomContainer from "./CustomContainer";
import { Divider,Flex,Text,Link,Button,Box,Tabs,TabPanel,TabList,Tab,TabPanels,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useMoralisWeb3Api,useERC20Balances,useNFTBalances,useMoralis } from "react-moralis";
import Moralis from "moralis";
import estatesABI from "../ABIs/estatesABI"
import Web3 from "web3";
export default function EstatesBalance() {
    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const {getNFTBalances, data} = useNFTBalances()
    const contractAddress = '0x25cff20e9fb576b76768d4ce69c66578b7f7ac5d';
    const abi = estatesABI;
    const web3 = new Web3('https://rinkeby.infura.io/v3/9636f454f5514c5faac2c14d59563dab')
    const tokenInst = new web3.eth.Contract(abi, contractAddress);
    // state = {
    //   showMessage: false
    // };
  // onButtonClickHandler = () => {
  //   window.alert('Hi')
  // };

    // useEffect(() => {
    //   web3.eth.getBalance(user.get('ethAddress'), async (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     const balance = web3.utils.fromWei(result, "ether");
    //     console.log(balance + " ETH");
    //     // onButtonClickHandler = () => {
    //     //   window.alert(balance)
    //     // };
    // });

  
    // }, [isAuthenticated])

    useEffect(() => {
      console.log(tokenInst.methods.walletOfOwner(user.get('ethAddress')));
        if (isAuthenticated) {

        }

    }, [isAuthenticated])
    // web3.eth.getBalance(user.get('ethAddress'), (call, wei) => { balance = web3.utils.fromWei(wei, 'ether')})


    return(
        <CustomContainer>
            <Text fontSize="small" fontWeight="bold">
                Available Estates To claim , *Still need to amount held*
            </Text>
            {/* <Button onClick={balance}>Enter</Button> */}
            {/* {data && data.result.map(nft => (
                <Box mt="4" px="2" py="2" borderWidth="1px" borderRadius="md" key={nft.token_uri}>
                    {nft.imaage && <Image src={nft.image} />}
                    
                    <p>{balance}</p>
                </Box>
            ))} */}
              {/* <p>{balance}</p> */}
        </CustomContainer>
    )
}
