import Head from 'next/head'
import { Box, Text, UnorderedList, ListItem, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function SlideEx() {
  
    return (
        <Box>
            <Head>
                <title>
                    Tauros | Members
                </title>
            </Head>

            <Box align="center" pt={70}>
                <Box mt={5} py={5} maxW="900px" textAlign="left" overflow="scroll">
                    <Text pt={10} pb={5}>TAUROS Cards confer a number of benefits on members. See the table below and click on each category for more info</Text>
                    
                    <Tabs>
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

                    <Text pt={5} pb={5}>It is important to understand that Terra is a curated NFT Marketplace and artists&apos; benefits are not guaranteed by membership. For example, if a work is found to be plagiarized, it will not be accepted and/or removed from the marketplace regardless of whether the artist is a member, and the author&apos;s artistic privileges will be terminated. However, while artworks will always be subject to the highest standards, members will receive priority and personal care in the checks and verification process.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
  }