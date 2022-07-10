import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Text, UnorderedList, ListItem, DrawerCloseButton, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function SlideEx() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen} size="md" colorScheme="black" variant="ghost" pl={1} fontWeight="bold">here.</Button>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />
          <DrawerContent bgGradient="linear(to-br, gray.300,teal.300)" py={20} px={80}>
          <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>Membership Benefits</DrawerHeader>
            <DrawerBody>
            <Text pb={5} fontSize="16px">TAUROS Cards confer a number of benefits on members. See the table below and click on each category for more info</Text>
            
            <Tabs>
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

            <Text pb={10} fontSize="16px">It is important to understand that Terra is a curated NFT Marketplace and artists&apos; benefits are not guaranteed by membership. For example, if a work is found to be plagiarized, it will not be accepted and/or removed from the marketplace regardless of whether the artist is a member, and the author&apos;s artistic privileges will be terminated. However, while artworks will always be subject to the highest standards, members will receive priority and personal care in the checks and verification process.
            </Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }