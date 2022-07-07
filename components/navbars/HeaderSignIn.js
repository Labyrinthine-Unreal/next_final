import { useMoralis } from "react-moralis"
import { Flex,Center, Box, Button } from "@chakra-ui/react"
import Header from "./Header"

export default function HeaderSignIn() {
  const {isAuthenticated, authenticate, user, logout, isLoggingOut} =  useMoralis()
  console.log(isAuthenticated)
  if(!isAuthenticated){
    return(
        <header>
          <Flex px="10" py="6" justifyContent="flex-end" color="white">
            <Center justifyContent="flex-end">
              <Box justifyContent="flex-end">
                <Button colorScheme="purple"
                onClick={()=>authenticate({
                  signingMessage:"Tauros SignIN"
                })}>
                  Metamask Login
                  </Button>
              </Box>
            </Center>
          </Flex>
        </header>
    )
  }
  return (
    <header>
        <Flex direction="column" width="100vw" height="100vh">
            <Header user={user} logout={logout} isLoggingOut={isLoggingOut}/>
        </Flex>
    </header>
  )
}