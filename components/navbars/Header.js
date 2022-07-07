import { Center, Flex, Text, Button } from "@chakra-ui/react"

export default function Header({user, logout, isLoggingOut}){
    return(
    <header>
        <Flex px="10" py="6" justifyContent="space-between" bg="blackAlpha.800" color="white">
            <Center>
                <Text fontSize="xl" fontWeight="bold">
                    Tauros Dashboard:
                </Text>
            </Center>
            <Center>
                <Text>
                    {user.getUsername()}
                </Text>
                    <Button ml="4" colorScheme="blackAlpha" onClick={logout} disable={isLoggingOut}>
                        Logout
                    </Button>
            </Center>
        </Flex>
    </header>
    )
}