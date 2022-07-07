import { Center, Flex, Text } from "@chakra-ui/react"

export default function Footer(){
    const year = new Date().getFullYear()
    return(
    <footer>
        <Flex px="10" py="6" justifyContent="center" bgGradient="linear(to-br, teal.400,purple.300)" color="white">
            <Center>
                <Text fontSize="xl" fontWeight='normal'>
                    TaurosDA&copy; {year}
                </Text>
            </Center>
        </Flex>
    </footer>
    )
}