import Head from 'next/head'
import { Box, Center, Image, Text, List, ListItem, ListIcon } from "@chakra-ui/react"
import properties from "@/components/data/properties"
import { ImEarth } from 'react-icons/im'

export default function EstatesPage() {
    const item = properties[1];
            
    return (
        <Box align="center" py={20}>
            <Head>
                <title>
                    TaurosDAO | Merca City
                </title>
            </Head>
            <Box maxW="900" textAlign="left">
                    <Text>
                        Estates are Merca City&apos;s genesis assets. There are six districts in the city, each specialized in on area: 
                    </Text>
                        <List py={5} ml={5} spacing="2">
                            <ListItem>
                                <ListIcon as={ImEarth} />
                                Ritus (financial district)
                            </ListItem>
                            <ListItem spacing={3}>
                                <ListIcon as={ImEarth} />
                                Tauros (artistic & artisanal district)
                            </ListItem>
                            <ListItem spacing={3}>
                                <ListIcon as={ImEarth} />
                                Bravio (military and industrial district)
                            </ListItem>
                            <ListItem spacing={3}>
                                <ListIcon as={ImEarth} />
                                Bacchanalia (drug district)
                            </ListItem>
                            <ListItem spacing={3}>
                                <ListIcon as={ImEarth} />
                                Pangaea (ethnic, cultural district)
                            </ListItem>
                            <ListItem spacing={3}>
                                <ListIcon as={ImEarth} />
                                Morea (rugged terrain, rich in oil and gold ores)
                            </ListItem>
                        </List>
                        <Text>
                            There is a fragile balance in the city. Tension is in the air and peace is about to be broken. Morea is rich in gold and oil but its inhabitants are beholden to the whims of Ritus, the financial district that controls everything.
                        </Text>
                    <Center>
                        <Image src="images/Merca_City.png" alt="Merca-City-Map" />
                    </Center>
            </Box>
        </Box>
    )
}