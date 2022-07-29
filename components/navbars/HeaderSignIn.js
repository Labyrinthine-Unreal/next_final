import { Flex, Center, IconButton, Icon, Box, Image, Spacer } from '@chakra-ui/react'
import { ImMenu } from 'react-icons/im'
import { ConnectButton } from 'web3uikit'
import styles from '@styles/SignIn.module.css'



export default function HeaderSignIn({ onOpen, ...rest }) {

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
                <Image src="images/logos-icons/head-only.png" alt="Tauros_final" w="65px" h="85px" />
                <Image pl={1} src="images/logos-icons/Tauros_letters.png" alt="Tauros_final" w="180px" h="65px" />
              </Center>
              <Spacer />
              <Center className={styles.connect}>
                  <ConnectButton type="button" disabled signingMessage="TaurosDAO Login" />
              </Center>
          </Flex>
      );
  }