import { Center, Flex, Text } from "@chakra-ui/react"

export default function Footer(){
    const year = new Date().getFullYear()
    return(
    <footer>
        <Flex px="10" py="6" justifyContent="center" color="#000">
            <Center>
                <Text fontSize="normal" fontWeight='normal'>
                    TaurosDAO &copy; {year}
                </Text>
            </Center>
        </Flex>
    </footer>
    )
}