import { Box, Heading, Flex, SimpleGrid } from '@chakra-ui/react'
import Head from 'next/head'
import OECard from '@components/cards/OngoingEventsCard'
import ongoingEvents from '@components/data/ongoingEventsData'
import UECard from '@components/cards/UpcomingEventsCard'
import upcomingEvents from '@components/data/upcomingEventsData'
import PECard from '@components/cards/PastEventsCard'
import pastEvents from '@components/data/pastEventsData'
import { Events } from '@components/AnimatedTitles'
import '@fontsource/tangerine'


export default function EventsPage() {
    
    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | Events
                </title>
            </Head>

            <Heading fontSize="3xl" textStyle="title">
                <Events />
            </Heading>

            <Box pb={20} textStyle="landingPageContent">
                <Heading fontSize="large" textStyle="subtitle">
                    ONGOING
                </Heading>

                <Box pb={20} align="center">
                    <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                    {ongoingEvents.map((ongoingEvent, i) => (
                        <Flex key={i}>
                            <OECard currentEvent={ongoingEvent} />
                        </Flex>
                    ))}
                    </SimpleGrid>
                </Box>

                <Heading fontSize="large" textStyle="subtitle">
                    UPCOMING
                </Heading>

                <Box pb={20} align="center">
                    <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                    {upcomingEvents.map((upcomingEvent, i) => (
                        <Flex key={i}>
                            <UECard upcomingEvent={upcomingEvent} />
                        </Flex>
                    ))}
                    </SimpleGrid>
                </Box>

                <Heading fontSize="large" textStyle="subtitle">
                    PAST
                </Heading>

                <Box align="center">
                    <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                    {pastEvents.map((pastEvent, i) => (
                        <Flex key={i}>
                            <PECard pastEvent={pastEvent} />
                        </Flex>
                    ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    );
}