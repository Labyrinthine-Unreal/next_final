import { Flex, Text, Button, IconButton, HStack, VStack, Menu } from "@chakra-ui/react"

  
  export default function UserProfile({user, logout, isLoggingOut}) {
    return (
      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
        />
        <Flex alignItems="center">
          <Menu
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack spacing="4">
                <VStack
                  display={{ md: "none", lg: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="md" color="gray.600">
                    User
                  </Text>
                  <Text fontSize="lg">{user.getUsername()}</Text>
                </VStack>
                <Button ml="4" colorScheme="blackAlpha" onClick={logout} disable={isLoggingOut}>
                   Logout
                </Button>
              </HStack>
          </Menu>
        </Flex>
      </HStack>
    );
  }