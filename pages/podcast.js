import { Box, Heading, Text, Flex, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head"
import PodcastsCard from "@components/events/PodcastsCard"
import podcastsData from "@components/events/podcastsData";

export default function EventsPage() {

    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | Podcast
                </title>
            </Head>

            <Heading ptextStyle="title" fontSize="3xl">
                Frontier Podcast
            </Heading>
            
            <Text textStyle="landingPageContent">
                A collaboration podcast series between TaurosDAO and Frontier Podcast bringing you the latest from the NFT Art World. The series focuses on established and emerging 1/1 artists in the NFT Space. Airs weekly.
            </Text>

            <Box pt={10} align="center">
                <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                {podcastsData.map((podcast, i) => (
                    <Flex key={i}>
                        <PodcastsCard podcast={podcast} />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}