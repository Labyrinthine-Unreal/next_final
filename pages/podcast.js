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

            <Heading pb={5} fontSize="3xl" textShadow='0.5px 0.5px white'>
                Podcast
            </Heading>
            
            <Text pb={5}>
                Below find a list of podcasts.
            </Text>

            <Box pt={10} pb={20} align="center">
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