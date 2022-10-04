import { Box, Heading, Flex, SimpleGrid } from '@chakra-ui/react'
import Head from 'next/head'
import OECard from '@components/cards/OngoingEventsCard'
import ongoingEvents from '@components/data/ongoingEventsData'
import UECard from '@components/cards/UpcomingEventsCard'
import upcomingEvents from '@components/data/upcomingEventsData'
import PECard from '@components/cards/PastEventsCard'
import pastEvents from '@components/data/pastEventsData'
import { Events } from '@components/animations/AnimatedTitles'
import '@fontsource/tangerine'


export default function EventsPage() {
    
    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | Events
                </title>
                <meta name="description" content="Welcome to TaurosDAO" keywords="NFT, nftart, digitalart, digitalartist, mint, taurosdao, labyrinthine, game, cryptocurrency, crypto, ethereum, membership, art, gallery, 3D, airdrop, airdrops, virtual real estate, plots, estate, estates, mask, masks, initiation, collection, marketplace, metaverse, MMORTS, exploration, mystery, podcast, bitcoin, token, coin, altcoin, voting, dao" />
            </Head>

            <Heading fontSize="3xl" textStyle="title">
                <Events />
            </Heading>

            <Box pb={20} textStyle="landingPageContent">
                <Heading fontSize="large" textStyle="title">
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

                <Heading fontSize="large" textStyle="title">
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

                <Heading fontSize="large" textStyle="title">
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