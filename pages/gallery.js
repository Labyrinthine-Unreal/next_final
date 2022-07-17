import { Box, Heading, Text, Flex, SimpleGrid } from "@chakra-ui/react"
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

            <Heading pb={5} fontSize="3xl" textShadow='0.5px 0.5px white'>
                Art Galleries
            </Heading>
            
            <Text pb={5}>
                Below find a list of current, upcoming, and past events.
            </Text>

            <Box pt={10} pb={20} align="center">
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