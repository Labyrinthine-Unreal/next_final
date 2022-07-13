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
                        Merca City is a World Building RTS Game with the addition of a cryptocurrency economy, thus ideal for a full blown financial simulation and real world economy. Players can fully own their assets, build and upgrade them, team up, form financial interest groups, and even armies. Estates are their primary holdings in Merca City. Adjacent Estates may be joined to form larger areas (up to 5 for individual players, and up to 50 for factions).<br /><br />There is no difference between the Estates, except for their location and, over time, what players decide to do with them. The Estates&apos; location will be decided in settling contests for each district upon launch of Merca City.<br /><br />There are six districts in the city, each specialized in one area: 
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
                                Bravio (military & industrial district)
                            </ListItem>
                            <ListItem spacing={3}>
                                <ListIcon as={ImEarth} />
                                Bacchanalia (drug district)
                            </ListItem>
                            <ListItem spacing={3}>
                                <ListIcon as={ImEarth} />
                                Pangaea (ethnic & cultural district)
                            </ListItem>
                            <ListItem spacing={3}>
                                <ListIcon as={ImEarth} />
                                Morea (rugged terrain, rich in oil & gold ores)
                            </ListItem>
                        </List>
                        <Text>
                            Peace is fragile in the city. Tension is in the air and war is always ready to break out. Morea is rich in gold and oil but its denizens are beholden to the whims of Ritus, the financial district whose reach no one in Merca can escape.
                        </Text>
                    <Center>
                        <Image src="images/Merca_City.png" alt="Merca-City-Map" />
                    </Center>
            </Box>
        </Box>
    )
}