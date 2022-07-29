import { Flex, Center, IconButton, Icon, Box, Image, Spacer } from '@chakra-ui/react'
import { ImMenu } from 'react-icons/im'
import { ConnectButton } from 'web3uikit'
import styles from '@styles/SignIn.module.css'



export default function HeaderSignIn({ onOpen, ...rest }) {

    return (
          <Flex
              pl="8"
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
              <Box display={{ base: "none", md: "flex" }}>
                {/* <Image src="images/logos-icons/Tauros_teal.png" alt="TaurosDAO-logo" w="200px" h="80px" /> */}
                {/* <Image src="images/logos-icons/Tauros_logo.png" alt="TaurosDAO-logo" w="200px" h="80px" />
                <Image src="images/logos-icons/TaurosDAO_logo.png" alt="TaurosDAO-logo" w="200px" h="65px" />
                <Image src="images/logos-icons/head.png" alt="TaurosDAO-logo" w="200px" h="65px" /> */}
                <Image src="images/logos-icons/No_head.png" alt="Tauros_final" w="200px" h="65px" />
              </Box>
              <Spacer />
              <Center className={styles.connect}>
                  <ConnectButton type="button" disabled signingMessage="TaurosDAO Login" />
              </Center>
          </Flex>
      );
  }