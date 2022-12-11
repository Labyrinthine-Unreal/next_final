import { Box, Button, Image, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Spacer } from '@chakra-ui/react'
import styles from '@styles/SignIn.module.css'
// import { useMoralis } from "react-moralis"
import connectors from './connectors'
import { useAccount,useEnsAvatar, useDisconnect, useConnect } from 'wagmi'
import { useEffect, useState } from "react";

export default function Connect() {
  const { address, connector, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  
  // CONNECT WALLET
  // function createConnectHandler(connectorId) {
  //   return async () => {
  //     try {
  //       const connector = connectors[connectorId]
  //       await authenticate(connector)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  // }

  // POPUP WALLET CONNECT MENU WITH WALLET OPTIONS

  if (isConnected) {
    return (
      <div>
        <img src={ensAvatar} alt="ENS Avatar" />
        {/* <div>{ensName ? `${ensName} (${address})` : address}</div> */}
        {/* <div>Connected to {connector.name}</div> */}
        <Button onClick={disconnect}>{address}</Button>
      </div>
    )
  }
 
  return (

    <Box className={styles.connect}>
      <Button onClick={onOpen}>Connect Wallet</Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered size="sm">
        <ModalOverlay />
        <ModalContent rounded="2xl">
          <ModalHeader fontWeight="normal">Connect Wallet</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody py={10}>

            {/* Initialize WAGMI providers connections */}
            {connectors.map((connector) => (


              <Button
                w="full"
                h="60px"
                justifyContent="left"
                variant="outline"
                borderColor="#008080"
                _hover={{ borderColor: '#000000' }}
                rounded="xl"
                fontWeight="normal"
                my={2}
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
                // leftIcon={<Image src={walletIcon} w="2em" h="2em" mr="2" />}

              >
                {connector.name}
                {!connector.ready && ' (unsupported)'}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  ' (connecting)'}
              </Button>
            ))}

            {/* ITERATE THROUGH WALLETS IN THE connectors.js file, RENAME, AND ASSIGN A LOGO TO EACH */}

            {/* {
              Object.keys(connectors).map((value) => {
                const walletIcon = `/images/logos-icons/${value}.png`;
                let walletName;
                if (value === 'Metamask') walletName = 'Metamask';
                if (value === 'WalletConnect') walletName = 'Wallet Connect';
                if (value === 'UnstoppableDomains') walletName = 'Unstoppable Domains';
                return (
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

            } */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}