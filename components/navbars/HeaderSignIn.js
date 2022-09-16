import { Box, Flex, Center, Button, Icon, IconButton, Image, Spacer, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { ImMenu } from 'react-icons/im'
import styles from '@styles/SignIn.module.css'
import { useMoralis } from "react-moralis"
import UAuth from '@uauth/js';
import {useState} from "react"
import { AiOutlineWallet } from 'react-icons/ai'
import connectors from './connectors'
import Wallets from './wallets'


export default function HeaderSignIn({ wallet, ...rest }) {

  const [address, setAddress] = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isAuthenticated, authenticate, account, logout, isLoggingOut } = useMoralis()


  // UNSTOPPABLE DOMAINS
  function createConnectHandler(connectorId) {
    return async () => {
      try {
        const connector = connectors[connectorId]
        console.log(connector)
        await authenticate(connector)
      } catch (error) {
        console.error(error)
      }
    }
  }

  async function handleDisconnect() {
    try {
      logout()
    } catch (error) {
      console.error(error)
    }
  }

  // Shorten Address Display
  const getShortenAddress = address => {
    const firstCharacters = address.substring(0, 6)
    const lastCharacters = address.substring(address.length - 4, address.length)
    return `${firstCharacters}...${lastCharacters}`
  }

  return (

    // LEFT SIDE LOGO
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

      {/* RIGHT SIDE BUTTON LOGIN */}
      <Box className={styles.connect}>
        {isAuthenticated ? 
          <Center>
              <Center 
                fontSize={14} 
                fontWeight="semibold" 
                display={{ base: "none", md: "flex" }} 
                bg="#009688bb" 
                color="#fff" border="1px" 
                _hover={{bg: "red"}} 
                position="absolute" 
                mr={60} 
                h="40px" 
                p={3} 
                pr={10} 
                rounded="3xl"
              >
                <Icon fontSize={17} fontWeight="semibold" mr={2} as={AiOutlineWallet} />
                {getShortenAddress(account)}
              </Center>
              <Button onClick={handleDisconnect}>Disconnect</Button>
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
                {Object.keys(connectors).map(v => (
                  <Button 
                    key={v} 
                    // leftIcon={<Image src="/images/logos-icons/UD.png" w="2em" h="2em" mr="2" />}
                    w="full"
                    h="60px"
                    justifyContent="left"
                    variant="outline"
                    borderColor="#ffffff"
                    _hover={{ borderColor: '#000000' }}
                    rounded="xl"
                    fontWeight="normal"
                    onClick={createConnectHandler(v)}
                    my={2}
                  >
                    {v}
                  </Button>
                ))}
                </ModalBody>
            </ModalContent>
          </Modal>
          </Box>
        }
      </Box>
    </Flex>
  )
}