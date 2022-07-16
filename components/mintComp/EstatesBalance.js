import CustomContainer from "./CustomContainer";
import { Divider,Flex,Text,Link,Button,Box,Tabs,TabPanel,TabList,Tab,TabPanels,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useMoralisWeb3Api,useERC20Balances,useNFTBalances,useMoralis } from "react-moralis";
import Moralis from "moralis";
export default function EstatesBalance() {
    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const {getNFTBalances, data} = useNFTBalances()

    useEffect(() => {
      
        getNFTBalances({
            params: {
                chain: "rinkeby",
                address: user.get('ethAddress'),
                token_addresses: "0x25cff20e9fb576b76768d4ce69c66578b7f7ac5d",
                
                
            }
        })
    }, [isAuthenticated])
    console.log(data)

    return(
        <CustomContainer>
            <Text fontSize="small" fontWeight="bold">
                Available Estates To claim , *Still need to amount held*
            </Text>
            {data && data.result.map(nft => (
                <Box mt="4" px="2" py="2" borderWidth="1px" borderRadius="md" key={nft.token_uri}>
                    {nft.imaage && <Image src={nft.imaage} />}
                    
                    <p>{nft.token_uri}</p>
                </Box>
            ))}
        </CustomContainer>
    )
}