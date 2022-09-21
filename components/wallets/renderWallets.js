import { Box } from '@chakra-ui/react'
import styles from '@styles/SignIn.module.css'
import { useMoralis } from "react-moralis"
import Connect from './ConnectButton'
import Disconnect from './DisconnectButton'
import { useEffect, useState, } from "react";


export default function Wallets() {
  const { isAuthenticated } = useMoralis()
    // useEffect(() => {
    // Moralis.authenticate()
    // Moralis.enableWeb3()
    
    // }, [isAuthenticated])

  return (
    <Box className={styles.connect}>
    {isAuthenticated ? <Disconnect /> : <Connect />}
    </Box>
  )
}