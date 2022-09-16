import { Box, Flex, Center, Button, Icon, IconButton, Image, Spacer, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { ImMenu } from 'react-icons/im'
import styles from '@styles/SignIn.module.css'
import { useMoralis } from "react-moralis"
import UAuth from '@uauth/js';
import {useState} from "react"
import { AiOutlineWallet } from 'react-icons/ai'
import connectors, {injected, walletconnect} from './connectors'


export default function HeaderSignIn({ ...rest }) {

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

  if (isAuthenticated) {
    return (
      <>
        <Box>Connected to {account}</Box>
        <Button onClick={handleDisconnect}>Disconnect</Button>
      </>
    )
  }

  return (
    <>
      {Object.keys(connectors).map(v => (
        <Button key={v} onClick={createConnectHandler(v)}>
          Connect to {v}
        </Button>
      ))}
    </>
  )
}