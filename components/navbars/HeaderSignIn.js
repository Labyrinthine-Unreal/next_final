import { useMoralis } from "react-moralis"
import { Flex,Center, Box, Button, Tooltip } from "@chakra-ui/react"
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
          </Flex>
        </header>
    )
  }
  return (
    <header>
        <Flex px="10" py="6" justifyContent="flex-end" color="white">
            <Header user={user} logout={logout} isLoggingOut={isLoggingOut}/>
        </Flex>
    </header>
  )
}