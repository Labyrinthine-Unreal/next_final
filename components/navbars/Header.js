import { Center, Flex, Text, Button } from "@chakra-ui/react"

export default function Header({user, logout, isLoggingOut}){
    return(
    <header>
        <Flex>
            <Center>
                <Text color="black">
                    User: {user.getUsername()}
                </Text>
                    <Button ml="4" colorScheme="blackAlpha" onClick={logout} disable={isLoggingOut}>
                        Logout
                    </Button>
            </Center>
        </Flex>
    </header>
    )
}