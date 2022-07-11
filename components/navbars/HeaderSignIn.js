import { useMoralis } from "react-moralis"
import { Flex, Center, Box, Button, IconButton, Tooltip, Text } from "@chakra-ui/react"
import { ImMenu } from 'react-icons/im'
import UserProfile from "./UserProfile"

export default function HeaderSignIn({ onOpen }) {
  const {isAuthenticated, authenticate, user, logout, isLoggingOut} =  useMoralis()
  console.log(isAuthenticated)
  if(!isAuthenticated){
    return(
      <Flex
      ml={{ md: 0, lg: 44 }}
      px="4"
      py="4"
      position="sticky"
      top="0"
      height="20"
      zIndex="1"
      alignItems="flex-start"
      justifyContent={{ md: "space-between", lg: "flex-end" }}
    >
      <IconButton
        display={{ md: "flex", lg: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<ImMenu />}
      />
      <header>
            <Center>
              <Box>
              {/* <Tooltip hasArrow arrowSize={12} label="Members only" bg="#6082B6"> */}
                <Button colorScheme="purple"
                onClick={()=>authenticate({
                  signingMessage:"Tauros SignIN"
                })}>
                  Metamask Login
                </Button>
                {/* </Tooltip> */}
              </Box>
            </Center>
        </header>
    </Flex>
    )
  }
  return (
    <Flex
      ml={{ md: 0, lg: 44 }}
      px="4"
      position="sticky"
      top="0"
      height="20"
      zIndex="1"
      alignItems="start"
      justifyContent={{ md: "space-between", lg: "flex-end" }}
    >
      <IconButton
        display={{ md: "flex", lg: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<ImMenu />}
      />
      <header>
        <UserProfile user={user} logout={logout} isLoggingOut={isLoggingOut}/>
    </header>
    </Flex>
  )
}