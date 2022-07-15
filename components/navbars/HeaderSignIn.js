import { useMoralis } from "react-moralis"
import { Flex, Center, Box, Button, IconButton, Text } from "@chakra-ui/react"
import { ImMenu } from 'react-icons/im'
import UserProfile from "./UserProfile"
import Image from "next/image"
import { ConnectButton } from "web3uikit"


export default function HeaderSignIn({ onOpen, ...rest }) {
  // const {isAuthenticated, authenticate, user, logout, isLoggingOut} =  useMoralis()
  // console.log(isAuthenticated)
  // if(!isAuthenticated){

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
        <Center>
              <Box size={{ base: "sm", md: "md" }}>
              <ConnectButton />
                {/* <Button colorScheme="purple"
                onClick={()=>authenticate({
                  signingMessage:"Tauros SignIN"
                })}>
                  Metamask Login
                </Button> */}
              </Box>
            </Center>
      </Flex>
    );
  }

//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px="4"
//       top="0"
//       height="20"
//       zIndex="1"
//       alignItems="center"
//       // bg="white"
//       borderBottom="1px"
//       borderBottomColor="gray.200"
//       justifyContent={{ base: "space-between", md: "flex-end" }}
//       {...rest}
//     >
//       <IconButton
//         display={{ base: "flex", md: "none" }}
//         onClick={onOpen}
//         variant="outline"
//         aria-label="open menu"
//         icon={<ImMenu />}
//       />
//       <UserProfile user={user} logout={logout} isLoggingOut={isLoggingOut}/>
//     </Flex>
//   );
// }