import { Box, Heading, Text, Flex, SimpleGrid, Link } from "@chakra-ui/react"
import Head from "next/head"
import GalleriesCard from "@components/events/GalleriesCard"
import galleriesData from "@components/events/galleriesData";

export default function GalleriesPage() {

    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | Art Galleries
                </title>
            </Head>

            <Heading pb={10} fontSize="3xl" textShadow='0.5px 0.5px white'>
                Art Galleries
            </Heading>
            
            <Text py={5}>
                A nine week series of 3D digital art galleries in New Art City. Theme: <span style={{fontStyle: "italic"}}>Dante&apos;s Inferno</span>. New gallery floor is added every Monday. Some of the floors may hide a TAUROS token. Those who find one, may contact us on <Link href='https://discord.com/invite/labyrinthine' isExternal color="#2E7DAF">discord</Link> with their wallet address.
            </Text>

            <Box pt={10} align="center">
                <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                {galleriesData.map((gallery, i) => (
                    <Flex key={i}>
                        <GalleriesCard gallery={gallery} />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}