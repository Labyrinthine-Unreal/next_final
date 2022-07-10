// import Head from 'next/head'
// import { Box, Text, Flex } from "@chakra-ui/react"

// export default function MembersPage() {
//     return (
//         <Box>
//             <Head>
//                 <title>
//                     Tauros | Members
//                 </title>
//             </Head>

//             <Flex direction="column" alignItems="center" width="100%" pt={70} p={20}>
//                 <Text 
//                     pl={40} pr={40} pb={5} fontWeight="semibold" fontSize="2xl" alignSelf="flex-start">
//                     Requirements
//                 </Text>
//                 <Text pl={40} pr={40} pb={20}>This page should only open if the person signing in owns a TAUROS token. If not, perhaps a pop up window: `It seems you do not have permission to access this page. Would you like to purchase a TAUROS token? Yes/No.` If Yes, is clicked, proceed to the /tauros page. If No, close pop up window and stay where you are.</Text>
//                 <Text 
//                     pl={40} pr={40} pb={5} fontWeight="semibold" fontSize="2xl" alignSelf="flex-start">
//                     Requirements, yes I wrote it twice so you actually read it!
//                 </Text>
//                 <Text pl={40} pr={40} pb={20}>This page should only open if the person signing in owns a TAUROS token. If not, perhaps a pop up window: `It seems you do not have permission to access this page. Would you like to purchase a TAUROS token? Yes/No.` If Yes, is clicked, proceed to the /tauros page. If No, close pop up window and stay where you are.</Text>
//             </Flex>
//         </Box>
//     )
// }

import Head from 'next/head'
import { Box, Text, Flex, UnorderedList, ListItem, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function SlideEx() {
  
    return (
        <Box>
            <Head>
                <title>
                    Tauros | Members
                </title>
            </Head>

            <Box direction="column" alignItems="center" width="100%" pt={70} p={20}>
                <Text pl={60} pr={40} pb={5} fontSize="16px" alignSelf="flex-start">TAUROS Cards confer a number of benefits on members. See the table below and click on each category for more info</Text>
                
                <Tabs pl={60} pr={40}>
                    <TabList>
                        <Tab>Investors</Tab>
                        <Tab>Artists</Tab>
                        <Tab>Collectors</Tab>
                    </TabList>
                    <TabPanels p='2rem'>
                        <TabPanel>
                            <UnorderedList fontWeight="semibold" fontSize="15px">
                                <ListItem p={3}>Fractionalized Ownership</ListItem>
                                <ListItem p={3}>Governance</ListItem>
                                <ListItem p={3}>Airdrops</ListItem>
                                <ListItem p={3}>Various Whitelists, Rewards, and third party Airdrops</ListItem>
                            </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                            <UnorderedList fontWeight="semibold" fontSize="15px">
                                <ListItem p={3}>Eligibility for TaurosDAO&apos;s 3D Art Galleries</ListItem>
                                <ListItem p={3}>Contests</ListItem>
                                <ListItem p={3}>Direct Purchases by TaurosDAO or Labyrinthine Unreal</ListItem>
                                <ListItem p={3}>Early Access to the Terra curated NFT Marketplace</ListItem>
                                <ListItem p={3}>Waved Fees</ListItem>
                                <ListItem p={3}>Various Promotional Activities, such as Featured Artists/Works/Themes</ListItem>
                                <ListItem p={3}>Collaboration with and Featuring in the Labyrinthine Unreal Game</ListItem>
                                <ListItem p={3}>Exclusive and Private Events with known collectors, Art Galleries, Auction Houses</ListItem>
                                <ListItem p={3}>And more...</ListItem>
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

                <Text pl={60} pr={40} pb={5} fontSize="16px" alignSelf="flex-start">It is important to understand that Terra is a curated NFT Marketplace and artists&apos; benefits are not guaranteed by membership. For example, if a work is found to be plagiarized, it will not be accepted and/or removed from the marketplace regardless of whether the artist is a member, and the author&apos;s artistic privileges will be terminated. However, while artworks will always be subject to the highest standards, members will receive priority and personal care in the checks and verification process.
                </Text>
            </Box>
        </Box>
    )
  }