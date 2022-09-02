import { Flex, Text, Box, Center } from '@chakra-ui/react'
import Icons from './Icons'
import Credits from './Credits'

export default function Footer(){
    const year = new Date().getFullYear()
    return(
    <footer>
        <Flex px="10" py="6" justifyContent="center">
            <Text fontSize="18px" fontWeight='thin'>
                TaurosDAO &copy; {year}
            </Text>
        </Flex>
        <Icons />
    </footer>
    )
}