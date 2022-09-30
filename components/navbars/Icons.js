import { Text, Icon, Image, Link, Center, Grid, GridItem } from "@chakra-ui/react"
import { ImTwitter } from "react-icons/im"
import { FaDiscord, FaInstagramSquare } from "react-icons/fa"

export default function Icons(){
    return(
        <Center>
            <Grid pb={10} align="center" templateColumns={{sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} maxW="900">
                <GridItem colSpan={1}>
                    <Center>
                        <Text>Connect:</Text>
                        <Link href="https://twitter.com/TaurosDAO" isExternal><Icon as={ImTwitter} color="#1DA1F2" mx={2} mt={2} /></Link>
                        <Link href="https://www.instagram.com/taurosdao/" isExternal><Icon as={FaInstagramSquare} color="#FD1D1D" mx={2} mt={2} /></Link>
                        <Link href="https://discord.com/invite/labyrinthine" isExternal><Icon as={FaDiscord} mx={2} mt={2} /></Link>
                    </Center>  
                </GridItem>

                <GridItem colSpan={1}>
                    <Center>
                        <Text>Tauros:</Text>
                        <Link href="https://etherscan.io/address/0x1a0f33bbc5c7ba83f490cdb6c13ee50e1c851908#code" isExternal mx={2}>
                            <Image src="images/logos-icons/etherscan.png" w="0.8em" h="0.8em" p={0} />
                        </Link>
                        <Link href="https://opensea.io/collection/taurosdao" isExternal mx={2}>
                            <Image src="images/logos-icons/opensea-blue.png" color="#1868B7" w="0.8em" h="0.8em" p={0} />
                        </Link>
                    </Center>
                </GridItem>

                <GridItem colSpan={1}>
                <Center>
                    <Text>Estates:</Text>
                        <Link href="" isExternal mx={2}>
                            <Image src="images/logos-icons/etherscan.png" w="0.8em" h="0.8em" p={0} />
                        </Link>
                        <Link href="" isExternal mx={2}>
                            <Image src="images/logos-icons/opensea-blue.png" color="#1868B7" w="0.8em" h="0.8em" p={0} />
                        </Link>
                    </Center>
                </GridItem>
            </Grid>
        </Center>
    )
}