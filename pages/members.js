import Head from 'next/head'
import { Box, Heading, Text, UnorderedList, ListItem, Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from "@chakra-ui/react"

export default function SlideEx() {
  
    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | Members
                </title>
            </Head>

            <Heading pb={10} fontSize="3xl" textShadow='0.5px 0.5px white'>
                Members
            </Heading>
            <Text pt={5}>
                TaurosDAO Membership Cards (TAUROS) confer a number of benefits on members. Fractionalized ownership, governance, and airdrops are only a few of them. Depending on whether you are an investor, an artist, a collector, or all of the above, you may look forward to a number of privileges from TaurosDAO membership. For a detailed breakdown, see the table below and click on each of the three categories.
            </Text>
            <Tabs py={10}>
                <TabList>
                    <Tab>Investors</Tab>
                    <Tab>Artists</Tab>
                    <Tab>Collectors</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <UnorderedList fontSize="15px">
                            <ListItem fontWeight="semibold">Governance</ListItem>
                            <Text color="gray.700">First and foremost, governance tokens grant holders the right to vote on important decisions and the direction a project may take in the future. In the case of TaurosDAO, TAUROS are our governance tokens. It&apos;s simple: 1 TAUROS token means 1 vote.</Text>

                            <ListItem pt={6} fontWeight="semibold">Fractionalized Ownership</ListItem>
                            <Text color="gray.700">TAUROS tokens represent also a fraction of TaurosDAO&apos;s assets, thus as the funds and assets of the DAO grow, in theory the tokens&apos; value should also follow, although this depends on the market and is not a guarantee (it may take time for it to catch up).</Text>

                            <ListItem pt={6} fontWeight="semibold">Airdrops</ListItem>
                            <Text color="gray.700">Many assets created by TaurosDAO are initially dropped to existing members (TAUROS holders). This is the case, for example, with Merca City Estates (land plots), in-game tokens, and other game assets such as, resource mining utilities, etc.</Text>

                            <ListItem pt={6} fontWeight="semibold">Various Whitelists, Rewards, and third party Airdrops</ListItem>
                            <Text color="gray.700">Being part of a thriving community brings many other opportunities beyond the community itself. Other projects constantly seek collaboration & partnership with TaurosDAO. Airdrops from other projects will be common.</Text>
                        </UnorderedList>
                    </TabPanel>
                    <TabPanel>
                        <UnorderedList fontSize="15px">
                            <ListItem fontWeight="semibold">Eligibility for TaurosDAO&apos;s 3D Art Galleries</ListItem>
                            <Text>Our Art Galleries are both curated and theme oriented, so it is not always a guarantee that your work will appear in them even if you may be a TaurosDAO member. However, we will launch various themed events from time to time, so eventually your theme/genre may come up. If you have an idea in this regard, and wish to collaborate with us first hand, you may contact us on <a style={{color: "#2E7DAF"}} href='https://discord.com/invite/labyrinthine' target="blank">Discord</a></Text>

                            <ListItem pt={6} fontWeight="semibold">Art Contests</ListItem>
                            <Text color="gray.700">Art contests will be another common event. Rewards may vary depending on theme and purpose, but usually they will be oriented towards both genre and art category&#8212;for example, our first contest was for a 3D Animal Familiar to be featured in the Labyrinthine Unreal game. Other themes may be architectural, avatar accessories, and other game assets, or quite simply any art theme, similar to the art galleries.</Text>

                            <ListItem pt={6} fontWeight="semibold">Direct Purchases by TaurosDAO or Labyrinthine Unreal</ListItem>
                            <Text color="gray.700">Both Labyrinthine Unreal and TaurosDAO may directly purchase artworks from our members. However, this is not a guarantee and it should not be the reason for anyone to purchase a card and become a member. TaurosDAO exists as a service to its art community, and being a member does not entitle one to guaranteed sales.</Text>

                            <ListItem pt={6} fontWeight="semibold">Early Access to the Terra curated NFT Marketplace</ListItem>
                            <Text color="gray.700">Terra is an exclusive curated NFT Marketplace. It will feature both 1/1 works and collections and it is designed from the ground up to bring many features that are sorely lacking in the space, from a tiered verification system to various promotional activities to give participating artists good visibility, personal author&apos;s page, wip publishing options and much more. Applications for 1/1 artists will open soon, so keep an eye out for the announcement.<a href="#disclaimer">*</a></Text>

                            <ListItem pt={6} fontWeight="semibold">Various Promotional Activities</ListItem>
                            <Text color="gray.700">Labyrinthine Unreal and TaurosDAO are a massive ecosystem, and therefore hold a huge potential for promotional activities, from art galleries and podcast shows featuring our members, to exhibitions within the Merca City sim, concerts, contests, museums, and even collaborations and custom works demand by gamers and other metaverse visitors.</Text>

                            <ListItem pt={6} fontWeight="semibold">Waved Fees and other perks</ListItem>
                            <Text color="gray.700">Early users of our platform may look forward not only to great promotional services, but also to waved fees in our marketplace. Just mint and list, we'll pick up the bill.</Text>

                            <ListItem pt={6} fontWeight="semibold">Collaboration with and Featuring in the Labyrinthine Unreal Game</ListItem>
                            <Text color="gray.700">Many of the works we purchase may be featured in the Labyrinthine Unreal game or in Merca City. A work of art may be laced with some unclockable content giving further clues to the solution of a puzzle or it may be sought out simply for the art&apos; sake by collectors and gamers alike. NFT artists may also collaborate with us first hand in the custom creation of game assets, from 2D and 3D art objects (avatars, architectural constructions, game accessories, etc.) to animation and film, soundtracks and sound FX, etc.</Text>

                            <ListItem py={6} fontWeight="semibold">Exclusive and Private Events with known collectors, Auction Houses, etc</ListItem>
                            <Text color="gray.700">Closed door digital events are a great way for interested collectors to meet directly with their favourite artists. Live auctions, art galleries, art workshops, and educational events are all in the works in Merca City. Labyrinthine Unreal and TaurosDAO are uniquely positioned to capture and hold the attention of anyone interested in the NFT and metaverse space. We are only getting started!</Text>
                        </UnorderedList>
                        <Divider maxW="300" py={6} />
                        <Text id="disclaimer" fontSize="15px" color="gray.700">
                            * It is important to understand that Terra is a curated NFT Marketplace and artists&apos; benefits are not guaranteed by membership. For example, if a work is found to be plagiarized, it will not be accepted and/or removed from the marketplace regardless of whether the artist is a member, and the author&apos;s artistic privileges will be terminated. However, while artworks will always be subject to the highest standards, members will receive priority and personal care in the checks and verification process.
                        </Text>
                    </TabPanel>
                    <TabPanel>
                        <UnorderedList fontSize="15px">
                            <ListItem fontWeight="semibold">Invitations to Live 3D Auction House events</ListItem>
                            <Text color="gray.700">Live Auction House events may be subject to certain standards before one is admitted (e.g., genuine and long standing involvement with the art community). Even though, these may be closed door events, they may be streamed live online for other viewers.</Text>

                            <ListItem pt={6} fontWeight="semibold">Access to Public and Private Areas of TaurosDAO&apos;s Curated Art Galleries</ListItem>
                            <Text color="gray.700">Collectors will enjoy access not only to live auction houses but also to limited and private areas of our art galleries and workshops. These are generally great opportunities to meet the artist face to face (or avatar to avatar, as the case may be).</Text>

                            <ListItem pt={6} fontWeight="semibold">Other Perks and Rewards</ListItem>
                            <Text color="gray.700">Collectors who acquire a 10 or more artworks from our upcoming platform will also be able to claim a free Estate inside Merca City, where they may showcase their collections. This is a limited offer and the number of works required to claim a land parcel will increase with each Estate claimed
                            </Text>
                            </UnorderedList>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
  }