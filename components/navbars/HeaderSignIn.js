import { Box, Flex, Center, Button, Icon, IconButton, Image, Spacer, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, ListIcon } from '@chakra-ui/react'
import { ImMenu } from 'react-icons/im'
import styles from '@styles/SignIn.module.css'
import { useMoralis } from "react-moralis"
import UAuth from '@uauth/js';
import {useState} from "react"
import { AiOutlineWallet } from 'react-icons/ai'


export default function HeaderSignIn({ ...rest }) {

  const [address, setAddress] = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isAuthenticated, authenticate, user, logout, isLoggingOut } = useMoralis()

  
  // METAMASK
  const MMLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: "Tauros Sign in"
      })
      .then(function(user) {
        setAddress(user.get('ethAddress'))
        console.log(user.get('ethAddress'))
      })
      .catch(function(error) {
        console.log(error)
      })
    }
  }

  // WALLETCONNECT
  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({
        provider: "walletconnect",
        mobileLinks: [
          "rainbow",
          "metamask",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ]
      })
          .then(function(user) {
            setAddress(user.get('ethAddress'))
            console.log(user.get("ethAddress"))
          })
          .catch(function(error) {
            console.log(error)
          })
    }
  }

  // UNSTOPPABLE DOMAINS
  const UDLogin = async () => {
    const uauth = new UAuth({
      clientID: "524a7dd4-bbd6-4633-9257-a685979aef44",
      redirectUri: "http://localhost:3000",
      scope: "openid wallet email:optional"
    })
    if (!isAuthenticated)
      try {
        const authorization = await uauth.loginWithPopup()
        console.log(authorization)
        console.log(authorization.idToken.sub)
        console.log(authorization.idToken.wallet_address)
      } catch (error) {
        console.error(error)
      }
      onClose()
  }

  if (typeof window !== 'undefined') {
    //`window` is available
    window.logout = async () => {
      await uauth.logout()
      console.log('Logged out with Unstoppable')
    }
  }

  // Shorten Address
  const getShortenAddress = address => {
    const firstCharacters = address.substring(0, 6)
    const lastCharacters = address.substring(address.length - 4, address.length)
    return `${firstCharacters}...${lastCharacters}`
  }

  return (
      <Flex
          pl="7"
          top="0"
          height="20"
          zIndex="1"
          alignItems="center"
          justifyContent={{ base: "space-between", md: "flex-end" }}
          {...rest}
      >
        <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            icon={<ImMenu />}
        />
        <Center display={{ base: "none", md: "flex" }}>
          <Image src="images/logos-icons/tauros_head.png" alt="Tauros_final" w="65px" h="85px" />
          <Image pl={1} src="images/logos-icons/tauros_letters.png" alt="Tauros_final" w="180px" h="65px" />
        </Center>
        <Spacer />
        
        <Box className={styles.connect}>
          {isAuthenticated ?
            <Center>
              <Center 
                fontSize={14} 
                fontWeight="semibold" 
                display={{ base: "none", md: "flex" }} 
                bg="#009688bb" 
                color="#fff" 
                border="1px" 
                _hover={{bg: "teal.400"}} 
                position="absolute" 
                mr={60} 
                h="40px"
                p={3} 
                pr={10} 
                rounded="3xl">
                  <Icon fontSize={17} fontWeight="semibold" mr={2} as={AiOutlineWallet} />{getShortenAddress(address)}
              </Center>
              <Button onClick={() => {logout().then(r => console.log('logged off'))}}>Disconnect</Button>
           </Center>
          :
          <Box>
            <Button onClick={onOpen}>Connect Wallet</Button>
          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered size="sm">
            <ModalOverlay />
            <ModalContent rounded="2xl">
              <ModalHeader fontWeight="normal">Connect Wallet</ModalHeader>
              <Divider />
              <ModalCloseButton />
              <ModalBody py={10}>

                {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                {/* /////////   METAMASK   //////////////////////////////////////////////////////////////// */}

                <Button 
                    leftIcon={<Image src="/images/logos-icons/MM.png" w="2em" h="2em" mr="2" />}
                    w="full"
                    h="60px"
                    justifyContent="left"
                    variant="outline"
                    borderColor="#ffffff"
                    _hover={{ borderColor: '#000000' }}
                    rounded="xl"
                    fontWeight="normal"
                    onClick={() => MMLogin()}
                >
                    Metamask Login
                </Button>

                <Spacer py={2} />

                {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////   WALLET CONNECT   /////////////////////////////////////////////////////////// */}

                <Button 
                    leftIcon={<Image src="/images/logos-icons/WC.png" w="2em" h="2em" mr="2" />}
                    w="full"
                    h="60px"
                    justifyContent="left"
                    variant="outline"
                    borderColor="#ffffff"
                    _hover={{ borderColor: '#000000' }}
                    rounded="xl"
                    fontWeight="normal"
                    onClick={() => login()}
                >
                    WalletConnect
                </Button>

                <Spacer py={2} />

                {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                {/* ///////   COINBASE    ///////////////////////////////////////////////////////////////// */}
                {/* Non Functional */}
                {/* <Button
                    leftIcon={<Image src="/images/logos-icons/CBW.png" w="2em" h="2em" mr="2" />}
                    w="full"
                    h="60px"
                    justifyContent="left"
                    variant="outline"
                    borderColor="#ffffff"
                    _hover={{ borderColor: '#000000' }}
                    rounded="xl"
                    fontWeight="normal"
                    onClick={() => handleAuthCoinbase()}
                  >
                    Coinbase
                  </Button>
                  <Spacer py={2} /> */}

                {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                {/* //////    UNSTOPPABLE DOMAINS   /////////////////////////////////////////////////////// */}

                <Button
                    leftIcon={<Image src="/images/logos-icons/UD.png" w="2em" h="2em" mr="2" />}
                    w="full"
                    h="60px"
                    justifyContent="left"
                    variant="outline"
                    borderColor="#ffffff"
                    _hover={{ borderColor: '#000000' }}
                    rounded="xl"
                    fontWeight="normal"
                    onClick={() => UDLogin()}
                >
                    Unstoppable Domains
                </Button>

              </ModalBody>
            </ModalContent>
          </Modal>
          </Box>
          }
          
          
          
        </Box>

      </Flex>
  );
}