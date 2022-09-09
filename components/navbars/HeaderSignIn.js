import { Box, Flex, Center, Button, Text, IconButton, Image, Spacer, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, ListIcon } from '@chakra-ui/react'
import { ImMenu } from 'react-icons/im'
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
export default function HeaderSignIn({ ...rest }) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { connectAsync } = useConnect();
  // const { disconnectAsync } = useDisconnect();
  // const { isConnected } = useAccount();
  // const { signMessageAsync } = useSignMessage();
  // const { push } = useRouter();


{/* /////////////////////////////////////////////////////////////////////////////////////// */}

  const handleAuth = async () => {
    const { account, chain } = await connectAsync({ connector: new InjectedConnector() });
    const userData = { address: account, chain: chain.id, network: 'evm' };
    console.log(userData)
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
{/* /////////////////////////////////////////////////////////////////////////////////////// */}


{/* /////////////////////////////////////////////////////////////////////////////////////// */}

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
{/* /////////////////////////////////////////////////////////////////////////////////////// */}


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
        {/* <ConnectButton type="button" disabled signingMessage="TaurosDAO Login" /> */}
        <Button onClick={onOpen}>Login</Button>
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
              }}
              >
                Unstoppable Domains
              </Button>
              


{/* /////////////////////////////////////////////////////////////////////////////////////// */}
{/* /////////////////////////////////////////////////////////////////////////////////////// */}

            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
}