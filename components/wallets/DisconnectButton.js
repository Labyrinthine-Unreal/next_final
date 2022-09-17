import { Box, Center, Button, Icon, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider } from '@chakra-ui/react'
import styles from '@styles/SignIn.module.css'
import { useMoralis } from "react-moralis"
import { AiOutlineWallet } from 'react-icons/ai'


export default function Disconnect() {
  const { isAuthenticated, authenticate, account, logout, isLoggingOut } = useMoralis()

  // DISCONNECT
  async function handleDisconnect() {
    try {
      logout()
    } catch (error) {
      console.error(error)
    }
  }

  // Shorten Address Display
  const getShortenAddress = account => {
    if (typeof account === "string") {
      const firstCharacters = account.substring(0, 6)
      const lastCharacters = account.substring(account.length - 4, account.length)
      return `${firstCharacters}...${lastCharacters}`
    }
  }

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
            {getShortenAddress(account)}
            </Center>}
            <Button onClick={handleDisconnect}>Disconnect</Button>
        </Center>
    </Box>
  )
}