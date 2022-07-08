import { Flex, Text } from "@chakra-ui/react"

export default function Footer(){
    const year = new Date().getFullYear()
    return(
    <footer>
        <Flex px="10" py="6" justifyContent="center">
            <Text fontSize="18px" fontWeight='thin'>
                TaurosDAO &copy; {year}
            </Text>
        </Flex>
    </footer>
    )
}