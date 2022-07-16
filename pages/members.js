import Head from 'next/head'
import { Box, Heading, Text, UnorderedList, ListItem, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function SlideEx() {
  
    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | Members
                </title>
            </Head>

            <Heading pb={5} fontSize="3xl" textShadow='0.5px 0.5px white'>
                Members
            </Heading>
            <Text>
                TAUROS Cards confer a number of benefits on members. Fractionalized ownership, governance, and airdrops are only a few of them. Depending on whether you are an investor, an artist, a collector, or all of the above, you may look forward to a number of privileges from TaurosDAO membership. For a detailed breakdown, see the table below and click on each of the three categories.
            </Text>
            <Tabs py={10}>
                <TabList>
                    <Tab>Investors</Tab>
                    <Tab>Artists</Tab>
                    <Tab>Collectors</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <UnorderedList fontWeight="semibold" fontSize="15px">
                            <ListItem py={3}>Fractionalized Ownership</ListItem>
                            <ListItem py={3}>Governance</ListItem>
                            <ListItem py={3}>Airdrops</ListItem>
                            <ListItem py={3}>Various Whitelists, Rewards, and third party Airdrops</ListItem>
                        </UnorderedList>
                    </TabPanel>
                    <TabPanel>
                        <UnorderedList fontWeight="semibold" fontSize="15px">
                            <ListItem py={3}>Eligibility for TaurosDAO&apos;s 3D Art Galleries</ListItem>
                            <ListItem py={3}>Contests</ListItem>
                            <ListItem py={3}>Direct Purchases by TaurosDAO or Labyrinthine Unreal</ListItem>
                            <ListItem py={3}>Early Access to the Terra curated NFT Marketplace</ListItem>
                            <ListItem py={3}>Waved Fees</ListItem>
                            <ListItem py={3}>Various Promotional Activities, such as Featured Artists/Works/Themes</ListItem>
                            <ListItem py={3}>Collaboration with and Featuring in the Labyrinthine Unreal Game</ListItem>
                            <ListItem py={3}>Exclusive and Private Events with known collectors, Art Galleries, Auction Houses</ListItem>
                            <ListItem py={3}>And more...</ListItem>
                        </UnorderedList>
                    </TabPanel>
                    <TabPanel>
                        <UnorderedList fontWeight="semibold" fontSize="15px">
                            <ListItem p={3}>Access to Public and Private Areas of TaurosDAO&apos;s Curated Art Galleries</ListItem>
                            <ListItem p={3}>Collectors who acquire a 10 or more artworks from our upcoming platform will also be able to claim a free Estate inside Merca City, where they may showcase their collections. This is a limited offer and the number of works required to claim a land parcel will increase with each Estate claimed</ListItem>
                            </UnorderedList>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <Text>
                It is important to understand that Terra is a curated NFT Marketplace and artists&apos; benefits are not guaranteed by membership. For example, if a work is found to be plagiarized, it will not be accepted and/or removed from the marketplace regardless of whether the artist is a member, and the author&apos;s artistic privileges will be terminated. However, while artworks will always be subject to the highest standards, members will receive priority and personal care in the checks and verification process.
            </Text>
        </Box>
    )
  }