import { Box, Heading, Text, Flex, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head"
import CECard from "@components/events/CurrentEventsCard"
import currentEvents from "@components/events/currentEventsData";

export default function EventsPage() {

    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | Events
                </title>
            </Head>

            <Heading pb={5} fontSize="3xl" textShadow='0.5px 0.5px white'>
                Events
            </Heading>
            
            <Text pb={5}>
                Below find a list of current, upcoming, and past events.
            </Text>

            <Box pt={10} pb={20} align="center">
                <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                {currentEvents.map((currentEvent, i) => (
                    <Flex key={i}>
                        <CECard currentEvent={currentEvent} />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}