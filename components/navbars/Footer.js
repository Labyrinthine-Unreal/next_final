import { Flex, Text, Box, Spacer, Icon, Image, Link } from "@chakra-ui/react"
import { ImTwitter } from "react-icons/im"
import { FaDiscord, FaInstagramSquare } from "react-icons/fa"

export default function Footer(){
    const year = new Date().getFullYear()
    return(
    <footer>
        <Flex px="10" py="6" justifyContent="center">
            <Text fontSize="18px" fontWeight='thin'>
                TaurosDAO &copy; {year}
            </Text>
        </Flex>
        <Flex pb={10} justifyContent="center">
            <Link href="https://twitter.com/TaurosDAO" isExternal><Icon as={ImTwitter} color="#1DA1F2" mx={2} /></Link>
            <Link href="https://www.instagram.com/taurosdao/" isExternal><Icon as={FaInstagramSquare} color="#FD1D1D" mx={2} /></Link>
            <Link href="https://discord.com/invite/labyrinthine" isExternal><Icon as={FaDiscord} mx={2} /></Link>
        </Flex>
    </footer>
    )
}