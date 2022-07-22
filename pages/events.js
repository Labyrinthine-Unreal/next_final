import { Box, Heading, Flex, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head"
import CECard from "@components/events/CurrentEventsCard"
import currentEvents from "@components/events/currentEventsData"
import UECard from "@components/events/UpcomingEventsCard"
import upcomingEvents from "@components/events/upcomingEventsData"
import PECard from "@components/events/PastEventsCard"
import pastEvents from "@components/events/pastEventsData"
import "@fontsource/tangerine"


export default function EventsPage() {

    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | Events
                </title>
            </Head>

            <Heading pb={10} fontSize="3xl" color="teal.700" fontWeight="extrabold" textShadow='1px 1px white'>
                Events
            </Heading>

            <Heading fontSize="large" fontWeight="extrabold" color="teal.700" textShadow='1px 1px white'>
                ONGOING
            </Heading>

            <Box pt={5} pb={20} align="center">
                <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                {currentEvents.map((currentEvent, i) => (
                    <Flex key={i}>
                        <CECard currentEvent={currentEvent} />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>

            <Heading fontSize="large" color="teal.700" fontWeight="extrabold" textShadow='1px 1px white'>
                UPCOMING
            </Heading>

            <Box pt={5} pb={20} align="center">
                <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                {upcomingEvents.map((upcomingEvent, i) => (
                    <Flex key={i}>
                        <UECard upcomingEvent={upcomingEvent} />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>

            <Heading fontSize="large" color="teal.700" fontWeight="extrabold" textShadow='1px 1px white'>
                PAST
            </Heading>

            <Box pt={5} align="center">
                <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                {pastEvents.map((pastEvent, i) => (
                    <Flex key={i}>
                        <PECard pastEvent={pastEvent} />
                    </Flex>
                ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}