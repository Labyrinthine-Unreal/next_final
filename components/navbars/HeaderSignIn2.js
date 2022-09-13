import { Flex, Center,IconButton, Image, Spacer, Button } from '@chakra-ui/react'
import { ImMenu } from 'react-icons/im'
// import { ConnectButton } from '@web3uikit/web3'
import styles from '@styles/SignIn.module.css'
import {useWeb3React} from '@web3-react/core'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import React from 'react'
// import {uauth} from './connectors'
import UAuth from '@uauth/js'
import {UAuthMoralisConnector} from '@uauth/moralis'

export default function HeaderSignIn({ onOpen, ...rest }) {

  const uauth = new UAuth({
    clientID: "524a7dd4-bbd6-4633-9257-a685979aef44",
    redirectUri: "https://timely-faun-e34b96.netlify.app/",
    scope: "openid wallet"
  })


  if (typeof window !== 'undefined') {
    window.login = async () => {
      try {
        const authorization = await uauth.loginWithPopup()
     
        console.log(authorization)
      } catch (error) {
        console.error(error)
      }
    }
    }

  // window.login = async () => {
  //   try {
  //     const authorization = await uauth.loginWithPopup()
   
  //     console.log(authorization)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  if (typeof window !== 'undefined') {
    //here `window` is available
  window.logout = async () => {
    await uauth.logout()
    console.log('Logged out with Unstoppable')
  }
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
              <Center>
              <Button onClick={async () => {
      try {
        const authorization = await uauth.loginWithPopup()
     
        console.log(authorization)
      } catch (error) {
        console.error(error)
      }
    }}>Login with Unstoppable</Button>
              <Button onClick={async () => {
    await uauth.logout()
    console.log('Logged out with Unstoppable')
  }}>Logout</Button>
              </Center>
          </Flex>
      );
  }




