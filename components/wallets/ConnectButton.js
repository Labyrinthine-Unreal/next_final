import { Box, Button, Image, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import styles from '@styles/SignIn.module.css'
import { useMoralis } from "react-moralis"
import connectors from './connectors'
import { useAccount, useConnect } from 'wagmi'
import { connect } from "@src/redux/blockchain/blockchainActions";
import { fetchData } from "@src/redux/data/dataActions";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";

export default function Connect() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isAuthenticated, authenticate, account, logout, isLoggingOut } = useMoralis()

  // CONNECT WALLET
  function createConnectHandler(connectorId) {
    return async () => {
      try {
        const connector = connectors[connectorId]
        await authenticate(connector)
      } catch (error) {
        console.error(error)
      }
    }
  }
  //______________________________________________________|__________________________________________________\\
  //                                                       |                                                   \\
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

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
    // SET_CONFIG(config);
    console.log(config)
  };

  // get Contract config
  useEffect(() => {
    getConfig();
    console.log(getConfig());
  }, []);

  // Fetch user data
  useEffect(() => {
    getData();
  }, [blockchain.account]);

  //______________________________________________________|__________________________________________________\\
  //    
  // POPUP WALLET CONNECT MENU WITH WALLET OPTIONS
  // ITERATE THROUGH WALLETS IN THE connectors.js file, RENAME, AND ASSIGN A LOGO TO EACH
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
            {
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

            }
            {/* Initialize Provider */}
            {/* On Connection... User will be able to mint XezomDAO ERC721,can replace with ERC20 */}
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch(connect());
                getData();
              }}
            >
              CONNECT
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}