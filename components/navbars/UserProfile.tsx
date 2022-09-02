import { Flex, Text, HStack, VStack, Menu, Avatar, Box, MenuButton, MenuDivider, MenuItem, MenuList, } from "@chakra-ui/react"
import { FiChevronDown } from "react-icons/fi";
  
  export default function UserProfile({ user, logout, isLoggingOut }) {
    return (
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems="center">
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <HStack spacing="4">
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text maxW="130px" noOfLines={1} fontSize="lg">{user.getUsername()}</Text>
                  <Text fontSize="md" color="gray.600">User</Text>
                </VStack>
                <Avatar size="md" src="tauros-avatar-black.png" />
                <Box display={{ base: "none", md: "flex" }}><FiChevronDown /></Box>
              </HStack>
            </MenuButton>
            <MenuList fontSize="lg" bg="white" borderColor="gray.200">
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem as="button" colorScheme="blackAlpha" onClick={logout} disable={isLoggingOut}>
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    );
  }
  