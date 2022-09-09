import { Box, Flex, Icon, Center, Button, Text, IconButton, Image, Spacer, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, ListIcon } from '@chakra-ui/react'
import { ImMenu } from 'react-icons/im'
import { AiOutlineWallet } from 'react-icons/ai'
// import { ConnectButton } from 'web3uikit'
import styles from '@styles/SignIn.module.css'
import { InjectedConnector } from 'wagmi/connectors/injected'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import Web3Modal from 'web3modal'
import WalletConnect from "@walletconnect/web3-provider";
import Web3 from 'web3';
import { providers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import UAuth from '@uauth/js';
import axios from 'axios'
// import { getSession, signOut } from 'next-auth/react';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'

export default function HeaderSignIn({ ...rest }) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isConnected, address } = useAccount()
  const { connectAsync } = useConnect()
  const { disconnect } = useDisconnect()
  const { account, isConnecting, isDisconnected } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected })
    },
  })

  {/* /////////////////////////////////////////////////////////////////////////////////////// */ }

  const handleAuthCoinbase = async () => {
    const { account, chain } = await connectAsync({ connector: new CoinbaseWalletConnector({
      options:
      {
          appName: "TaurosDAO.app",
          jsonRpcUrl: 'https://rinkeby.infura.io/v3/5c9cb0b35a2742659dec6fc7680c16c4',

      }
    }) });
    const userData = { address: account, chain: chain.id, network: 'evm' };
    console.log(userData)
    onClose()
  };

  const handleAuth = async () => {
    const { account, chain } = await connectAsync({ connector: new InjectedConnector() });
    const userData = { address: account, chain: chain.id, network: 'evm' };
    console.log(userData)
    onClose()
  };


  const handleAuthWalletConnect = async () => {
    const { account, chain } = await connectAsync({ connector: new WalletConnectConnector({
      options:
      {
        qrcode: true,
      }
    }) });

    
    const userData = { address: account, chain: chain.id, network: 'evm' };
    console.log(userData)
    onClose()
  };
  // const { data } = await axios.post('../../src/api/auth/request-message', userData, {
  //     headers: {
  //         'content-type': 'application/json',
  //     },
  // });

  // const message = data.message;
  // const signature = await signMessageAsync({ message });
  // redirect user after success authentication to '/user' page
  // const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/user' });
  /**
   * instead of using signIn(..., redirect: "/user")
   * we get the url from callback and push it to the router to avoid page refreshing
   */
  // push(url);
  // };
  {/* /////////////////////////////////////////////////////////////////////////////////////// */ }


  {/* /////////////////////////////////////////////////////////////////////////////////////// */ }

  const uauth = new UAuth({
    clientID: "524a7dd4-bbd6-4633-9257-a685979aef44",
    redirectUri: "https://timely-faun-e34b96.netlify.app/",
    scope: "openid wallet"
  })


  if (typeof window !== 'undefined') {
    //here `window` is available
    window.logout = async () => {
      await uauth.logout()
      console.log('Logged out with Unstoppable')
    }
  }
  {/* /////////////////////////////////////////////////////////////////////////////////////// */ }
  {/* /////////////////////////////////////////////////////////////////////////////////////// */ }

  const connector = new WalletConnectConnector({
    options: {
      qrcode: true,
    },
  })

  const getShortenAddress = address => {
    const firstCharacters = address.substring(0, 6)
    const lastCharacters = address.substring(address.length - 4, address.length)
    return `${firstCharacters}...${lastCharacters}`
  }
  {/* /////////////////////////////////////////////////////////////////////////////////////// */ }
  {/* /////////////////////////////////////////////////////////////////////////////////////// */ }

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
      {isConnected ?
          <Center>
              <Center display={{ base: "none", md: "flex" }} bg="#009688bb" color="#fff" position="absolute" mr={60} h="40px" p={2} pr={10} rounded="2xl"><Icon mr={2} as={AiOutlineWallet} /> {getShortenAddress(address)}</Center>
              <Button onClick={() => disconnect()}>Disconnect</Button>
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
                  {/* /////////////////////////////////////////////////////////////////////////////////////// */}

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
                    onClick={() => handleAuth()}
                  >
                    Metamask (via moralis)
                  </Button>

                  <Spacer py={2} />
                  {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                  {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                  {/* Non Functional */}
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
                    onClick={() => handleAuthWalletConnect()}

                  >
                    Wallet Connect
                  </Button>
                  <Spacer py={2} />

                  {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                  {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                  {/* Non Functional */}
                  <Button
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
                  <Spacer py={2} />

                  {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                  {/* /////////////////////////////////////////////////////////////////////////////////////// */}

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
                    onClick={async () => {
                      try {
                        const authorization = await uauth.loginWithPopup()
                        console.log(authorization)
                      } catch (error) {
                        console.error(error)
                      }
                      onClose()
                    }}
                  >
                    Unstoppable Domains
                  </Button>



                  {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                  {/* /////////////////////////////////////////////////////////////////////////////////////// */}

                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>}
      </Box>
    </Flex>
  );
}
