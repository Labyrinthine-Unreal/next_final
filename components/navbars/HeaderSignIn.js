import { useMoralis } from "react-moralis"
import { Flex, Center, Box, Button, IconButton, Text } from "@chakra-ui/react"
import { ImMenu } from 'react-icons/im'
import UserProfile from "./UserProfile"
import Image from "next/image"

export default function HeaderSignIn({ onOpen, ...rest }) {
  const {isAuthenticated, authenticate, user, logout, isLoggingOut} =  useMoralis()
  console.log(isAuthenticated)
  if(!isAuthenticated){

    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px="4"
        position="sticky"
        top="0"
        height="20"
        zIndex="1"
        alignItems="center"
        bg="white"
        borderBottomWidth="1px"
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
        <Box display={{ base: "flex", md: "none" }}>
          <Image src="/TaurosDAO_logo.jpg" alt="TaurosDAO-logo" width="200px" height="65px" />
        </Box>
        <Center>
              <Box>
                <Button colorScheme="purple"
                onClick={()=>authenticate({
                  signingMessage:"Tauros SignIN"
                })}>
                  Metamask Login
                </Button>
              </Box>
            </Center>
      </Flex>
    );
  }

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px="4"
      position="sticky"
      top="0"
      height="20"
      zIndex="1"
      alignItems="center"
      bg="white"
      borderBottomWidth="1px"
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
      <Box display={{ base: "flex", md: "none" }}>
        <Image src="/TaurosDAO_logo.jpg" alt="TaurosDAO-logo" width="200px" height="65px" />
      </Box>
      <UserProfile user={user} logout={logout} isLoggingOut={isLoggingOut}/>
    </Flex>
  );
}