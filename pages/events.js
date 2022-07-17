import { Box, Heading, Text, Flex, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head"
import CEC from "@components/events/CurrentEventsCard"
import currentEvents from "@components/events/currentEvents";

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
                <SimpleGrid gap={5} mt="4" minChildWidth="250px" minH="full" spacing="4em">
                {currentEvents.map((currentEvent, i) => (
                    <Flex key={i}>
                        <CEC currentEvent={currentEvent} />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}