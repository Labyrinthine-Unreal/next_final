import { Box, Center, Button, Icon, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Spacer } from '@chakra-ui/react'
import styles from '@styles/SignIn.module.css'
import { useMoralis } from "react-moralis"
import { AiOutlineWallet } from 'react-icons/ai'
import { useEffect, useState, } from "react";
import connectors from './connectors'
import { UAuthMoralisConnector } from '@uauth/moralis';


export default function Disconnect() {
  const { refetchUserData,isInitialized, isUserUpdating, userError,isAuthenticated, authenticate,Moralis, account, user,logout, isLoggingOut } = useMoralis()
  // DISCONNECT
  async function handleDisconnect() {
    // console.log(Moralis.User.current())
    // console.log(isInitialized)
    try {
      logout()
      // refetchUserData()
    } catch (error) {
      console.error(error)
    }
  }

  function getUdUserInfo() {
    try {
      const uAuthMoralisConnector = new UAuthMoralisConnector()
      uAuthMoralisConnector.uauth.user().then((user) => {
        console.log(user.sub);
        console.log(user)
      }).catch((error) => {
        console.log(error)
      });
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   // Moralis.authenticate()
  //   // Moralis.enableWeb3()
  //   Moralis.User.current()
    
  //   }, [isAuthenticated])

  // Shorten Address Display
  const getShortenAddress = account => {
    if (typeof account === "string") {
      const firstCharacters = account.substring(0, 6)
      const lastCharacters = account.substring(account.length - 4, account.length)
      return `${firstCharacters}...${lastCharacters}`
    }
  }
if (isAuthenticated){
  getUdUserInfo();
  return (
    <Box className={styles.connect}>
        <Center>
            {account && <Center 
            fontSize={14} 
            fontWeight="semibold" 
            bg="#009688bb" 
            color="#fff" 
            border="1px" 
            _hover={{bg: "teal.400"}} 
            position="absolute" 
            mr={60} 
            h="40px" 
            p={3} 
            pr={10} 
            rounded="3xl"
            >
            <Icon display={{ base: "none", md: "flex" }} fontSize={17} fontWeight="semibold" mr={2} as={AiOutlineWallet} />
            {/* {refetchUserData()} */}
            {getShortenAddress(account)}
            {console.log(account)}
            {/* {String(user.sub)} */}
            
            </Center>}
            <Button onClick={handleDisconnect} >Disconnect</Button>
        </Center>
    </Box>
  )
            }
}