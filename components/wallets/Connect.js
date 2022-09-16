import { Box, Button, Image, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import styles from '@styles/SignIn.module.css'
import { useMoralis } from "react-moralis"
import connectors from '../navbars/connectors'


export default function Connect() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isAuthenticated, authenticate, account, logout, isLoggingOut } = useMoralis()


  // CONNECT WALLET
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

  // POPUP WALLET CONNECT MENU WITH WALLET OPTIONS
  // ITERATE THROUGH WALLETS IN THE connectors.js file, RENAME, AND ASSIGN A LOGO TO EACH
  return (
    <Box className={styles.connect}>
        <Box>
        <Button onClick={onOpen}>Connect Wallet</Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered size="sm">
        <ModalOverlay />
        <ModalContent rounded="2xl">
            <ModalHeader fontWeight="normal">Connect Wallet</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody py={10}>
            {
                Object.keys(connectors).map((value) => {
                const walletIcon = `/images/logos-icons/${value}.png`;
                let walletName;
                if (value === 'Metamask') walletName = 'Metamask';
                if (value === 'WalletConnect') walletName = 'Wallet Connect';
                if (value === 'UnstoppableDomains') walletName = 'Unstoppable Domains';
                return(
                    <Button
                        key={value}
                        w="full"
                        h="60px"
                        justifyContent="left"
                        variant="outline"
                        borderColor="#ffffff"
                        _hover={{ borderColor: '#000000' }}
                        rounded="xl"
                        fontWeight="normal"
                        my={2}
                        leftIcon={<Image src={walletIcon} w="2em" h="2em" mr="2" />}
                        onClick={createConnectHandler(value)}
                        >
                        {value}
                    </Button>
                )
                })
            }
            </ModalBody>
        </ModalContent>
        </Modal>
        </Box>
    </Box>
  )
}