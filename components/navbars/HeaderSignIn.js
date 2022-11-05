import { Flex, Spacer, Center, IconButton, Image } from '@chakra-ui/react'
import Wallets from '../wallets/renderWallets'
import { ImMenu } from 'react-icons/im'


export default function HeaderSignIn({ onOpen, ...rest }) {

  return (

    // HEADER WITH LOGO ON THE LEFT AND POPUP WALLET BUTTON ON THE RIGHT
    // ON SMALL SCREENS LOGO SHOULD BE REPLACED WITH BURGER BUTTON TO OPEN SIDEBAR MENU
    <Flex
      pl="7"
      top="0"
      height="20"
      zIndex="1"
      alignItems="center"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <Flex>
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
    </Flex>
      <Spacer />
      <Wallets />

    </Flex>
  )
}
