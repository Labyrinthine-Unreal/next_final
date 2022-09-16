import { Flex, Spacer } from '@chakra-ui/react'
import HeaderLogo from './HeaderLogo'
import Wallets from '../wallets/Wallets'


export default function HeaderSignIn({ ...rest }) {

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
      <HeaderLogo />
      <Spacer />
      <Wallets />

    </Flex>
  )
}