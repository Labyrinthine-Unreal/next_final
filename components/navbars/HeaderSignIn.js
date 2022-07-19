import { Flex, Center, IconButton } from "@chakra-ui/react"
import { ImMenu } from 'react-icons/im'
import { ConnectButton } from "web3uikit"
import styles from "@styles/SignIn.module.css"


export default function HeaderSignIn({ onOpen, ...rest }) {

    return (
          <Flex
              ml={{ base: 0, md: 60 }}
              px="4"
              top="0"
              height="20"
              zIndex="1"
              alignItems="center"
              borderBottom="1px"
              borderBottomColor="gray.200"
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
              <Center className={styles.connect}>
                  <ConnectButton signingMessage="TaurosDAO Login" />
              </Center>
          </Flex>
      );
  }