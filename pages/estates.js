import Head from 'next/head'
import { Box, Center, Text, UnorderedList, List, ListItem, ListIcon, Heading, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { ImEarth } from 'react-icons/im'
import { Estates, Districts } from '@components/AnimatedTitles'
import { motion, useViewportScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// const MotionCenter = motion(Center)

// const VideoVariants = {
//     visible: { opacity: 1, scale: 1, y: 0 },
//     hidden: {
//       opacity: 0,
//       scale: 0.65,
//       y: 50
//     }
//   };

export default function EstatesPage() {

    // const [ref, inView] = useInView({
    //     /* Optional options */
    //     threshold: 0.5,
    //     triggerOnce: false
    //   });
            
    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | Estates
                </title>
            </Head>
            <Heading textStyle="title" fontSize="3xl">
                <Estates />
            </Heading>

            <Box textStyle="content">
                <Text>
                    Merca City is a World Building Metaverse/RTS Game bootstrapped with its own cryptocurrency economy. Players can fully own their assets, build and upgrade them, team up, form factions and alliances, and even raiding parties or full blown armies. Estates are their primary holdings in Merca City. Adjacent Estates may be joined to form larger areas (up to 5 for individual players, and up to 50 for factions).<br /><br />There is no difference between the Estates, except for their location and, over time, what players decide to do with them. Estates&apos; locations will be decided in a series of settling contests for each district upon launch of Merca City.<br /><br />Settlers can build whatever they wish in their Estates, or at least as far as the size allows. Below is a list of possible use cases, but this is not exhaustive and players may find novel uses for them:
                </Text>
                
                <Tabs pt={10}>
                    <TabList>
                        <Tab>Uses</Tab>
                        <Tab>Rewards</Tab>
                        <Tab>Services</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <UnorderedList fontSize="15px">
                                <ListItem fontWeight="semibold">Private & Public Art Galleries</ListItem>
                                <Text color="gray.700">For artists and collectors, the Estates are a great way to display their works and collections. They may be open to the public, or private and accessible only with the proper link or password. They are fully customizable, so users may show off their design skills, or they may opt to use default constructions.</Text>

                                <ListItem pt={6} fontWeight="semibold">Event Venues & Ticketed Events</ListItem>
                                <Text color="gray.700">The ability to lock private areas means also being able to create ticketed events and get paid in other NFTs or ERC20 tokens for access. From concerts and auditorium halls to conferences and workshops, users may create and schedule recurrent or one time events and even offer subscriptions to their followers.</Text>

                                <ListItem pt={6} fontWeight="semibold">Rental Spaces</ListItem>
                                <Text color="gray.700">Owners may use their Merca City properties directly or rent them out through our escrows. Users may also choose any third party smart contracts or even write their own to fit their specific purpose.</Text>

                                <ListItem pt={6} fontWeight="semibold">Collateral</ListItem>
                                <Text color="gray.700">Walk to the bank and take out a loan using your Estate as collateral. Build and upgrade your Estate to increase its value and qualify for higher loans. The more active you are in the game, the better your credit score gets.</Text>

                                <ListItem pt={6} fontWeight="semibold">Minigames</ListItem>
                                <Text color="gray.700">Do you have an idea for an activity or minigame? You can launch it in Merca City, airdrop the assets to players based on your own set of criteria, or sell them in our Marketplace. In Merca City you may also find many great artists, designers, and developers to collaborate with on your next big project.</Text>

                                <ListItem pt={6} fontWeight="semibold">Storage</ListItem>
                                <Text color="gray.700">Estates are necessary to store game assets that would otherwise reach the limit of the default backpack inventory space. Anyone may enter Merca City, but an Estate would extend a user&apos;s inventory beyond the default mode. In Merca City anyone may find rare items but, unless they own an Estate, there are limits to how many items may be picked up.</Text>

                                <ListItem pt={6} fontWeight="semibold">Approved Shops & Art Supplies</ListItem>
                                <Text color="gray.700">Select artist members of TaurosDAO will have a choice to set up their own art supplies&apos; shop where players not only from Merca City and Labyrinthine Unreal, but from other metaverses as well, may come up and enquire for custom made game items. In our own game platform, there are special designated rogue areas where players may try out experimental assets. If these assets work well and fit the general theme of the game, they may later be incorporated into the game proper, allocating lifetime royalties to both the artist and the sponsor.</Text>
                            </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                            <UnorderedList fontSize="15px">
                                <ListItem fontWeight="semibold">Airdrops</ListItem>
                                <Text color="gray.700">Real Estate is a lucrative business in Merca City. Aside from the ability to lease them out and receive passive income, all Estates get various new asset airdrops from time to time.</Text>

                                <ListItem pt={6} fontWeight="semibold">Upgrades</ListItem>
                                <Text color="gray.700">Upgrades are a great way to increase the value of your property. From creating your own custom design constructions to fortifications or floor additions to building resource mining facilities, they all add up not only to the overall value of your own property, but also the surrounding areas.</Text>

                                <ListItem pt={6} fontWeight="semibold">Native Game Token</ListItem>
                                <Text color="gray.700">The native game token of Merca City will be distributed to early players for time spent in the game or completing tasks and unlocking achievements. You may use it for further upgrades, stake it for liquidity to receive more rewards, or a combination of the two.</Text>

                                <ListItem pt={6} fontWeight="semibold">Voting</ListItem>
                                <Text color="gray.700">Staking the game token also unlocks voting powers, and each district will have its own separate voting process for issues important to them (see "Districts" below). In addition, factions may also choose to create and mint their own distinct tokens for closed voting important to their own activities.</Text>

                                <ListItem pt={6} fontWeight="semibold">Rare Item Discovery</ListItem>
                                <Text color="gray.700">You may stumble upon rare and valuable items throughout Merca City. However, these items must be brought to a safe space and secured before you can call them your own. Until then, you are open to attacks and mugging. Districts and factions may write their own rules and even build a police force to protect their citizenry and to create safe spaces within the city. Or they may decide to take a more Wild West and <em>laissez faire</em> approach. For these and other game decisions members may use their voting power.</Text>

                                <ListItem pt={6} fontWeight="semibold">Resource Mining</ListItem>
                                <Text color="gray.700">Natural resources are important in Merca City and, as long as people play the game, there will always be demand for them. Building lumber mills, stone quarries, oil rigs, or gold ores is therefore a lucrative activity.</Text>

                                <ListItem pt={6} fontWeight="semibold">Raids</ListItem>
                                <Text color="gray.700">"Money won is twice as sweet as money earned!" While all of the above activities are a good way to earn it, raiding others is more enjoyable still. You may raid alone or with your team or even gear up and wage open war to another faction or district and impose a tax on it. Be careful though, for imposing high taxes may lower productivity and even cause mass migrations. As in everything, a balance must be found.</Text>
                            </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                            <UnorderedList fontSize="15px">
                                <ListItem fontWeight="semibold">Ability to Mint, List, & Auction</ListItem>
                                <Text color="gray.700">In Merca City, you are not limited to only our official game resources, but can mint, list and auction your own works or custom made game assets and accessories. Depending on type (for example avatar accessories), they may be deployed immediately in the game or (in the case of weapons) in a designated rogue and experimental area.</Text>

                                <ListItem pt={6} fontWeight="semibold">Borrowing & Lending</ListItem>
                                <Text color="gray.700">If you need money quick but think that prices are going up and do not wish to sell, you may simply walk to the bank and get a loan by putting your property down as collateral. But you may also utilize our escrows to lend to others (for example to friends or allies). In that case you may specify your own terms and requirements.</Text>

                                <ListItem pt={6} fontWeight="semibold">Art & Design Services</ListItem>
                                <Text color="gray.700">Merca City is an open world booming with 1/1 NFT artists, designers, and developers. That is the reason we built TaurosDAO before everything else. If you have an idea for a custom made game item, game accessories, or even a mini game or some other type of activity, you may always collaborate with or simply hire others.</Text>

                                <ListItem pt={6} fontWeight="semibold">Escrows</ListItem>
                                <Text color="gray.700">Factions may wish to join Estates to create their own guild space, resource mining facilities, or military base of operations. In addition, players may wish to sponsor a custom made game item or some other custom design but each in isolation do not have the appropriate funds. For all of these and other use cases, they may use Merca City&apos;s native escrows to pull together funds or assets without the need to trust anyone else&apos;s promises.</Text>
                                </UnorderedList>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
                    
                <Center 
                    py={20} 
                    // variants={VideoVariants} 
                    // animate={inView ? "visible" : "hidden"} 
                    // transition={{ duration: 2, ease: "easeOut" }}
                    // ref={ref}
                    // className="magic"
                >
                    <video 
                        src="videos/Cloudy.mp4" 
                        alt="Merca-City-Map"
                        controls
                        objectfit="cover"
                        layout="fill"
                    />
                </Center>

            <Heading pt={10} fontSize="3xl" textStyle="title">
                <Districts />
            </Heading>
            
            <Box textStyle="content">
                <Text>
                    There are six districts in the city, each specialized in a specific area. Even in times of peace there is always tension between the two military districts, Bravio and Pangaea, as they vie for the favor of Ritus, the financial district, and dominance over resource rich districts of the city. For its part, Ritus ruthlessly plays this enmity to its own advantage. The other districts ally themselves now with one now with the other, as the power balance shifts.<br /><br />To complicate things further, there is an underground labyrinth below Merca City, where these enmities extend and mutate to unpredictable and wild new combinations. These subterranean spaces are ideal for the smuggler underclass of Merca City, and a growing insurgency struggling to overthrow the iron rule of both Bravio and Pangaea.
                    {/* But the labyrinth lore leads deeper still, into age old riddles that go well beyond the concerns of everyday society. There are many secrets inside the architectural game matrix of the <a style={{color: "#2E7DAF"}} href='https://docs.labyrinthineunreal.io/the-game/labyrinthine-unreal' target="blank">labyrinth</a>. Beware of the allure of these seemingly innocuous spaces. For it is said that the Minotaur was imprisoned in the underground labyrinth of king Mino&apos;s palace not by how difficult it was to navigate, but because he never wanted to leave its enchanted gardens. */}
                    </Text>

                    <List py={5} spacing="2">
                        <ListItem fontWeight="semibold" pt={5}>
                            <ListIcon as={ImEarth} />
                            Bacchanalia
                        </ListItem>
                        <Text color="gray.700" ml={6}>Rich in lumber. A dense strip of swamp forest called The Great Wetlands along its southern coast provides a natural barrier that makes Bacchanalia unassailable by sea. Many outcasts find protection in its thick, impenetrable woods in the company of those known as the Swamp People, who have never been assimilated in the more civilized citizenry of Merca City. A red light and designer drugs zone along its north and northwest borders with the Ritus and Bravio districts respectively are its main attraction and a second source of income. Tourists travel to try out some of the most potent hallucinatory experimental drugs in the metaverse, and often lose all their savings to the hookers, hustlers, drug dealers, and sometimes, the thieves and cutthroats of Bacchanalia. Its drugs are sought out by more than tourists, though. Bravio and Pangaea are pursuing their own military experiments, each attempting to produce the invicible soldier, impervious to pain, the hardship of the elements, sleep, and other limitations. Some of these experimental drugs have made their way from the lab to the street, probably sold by rogue soldiers themselves, or maybe just another story and a marketing technique. Whatever the truth, [name] is the most sought after and hard to find drug in Merca City, and accordingly the most expensive.</Text>
                        <ListItem spacing={3} fontWeight="semibold" pt={5}>
                            <ListIcon as={ImEarth} />
                            Bravio 
                        </ListItem>
                        <Text color="gray.700" ml={6}>Military and industrial district. The mightiest power in Merca City, its ambitions to dominate the whole territory curbed only by the counterbalancing armies of Pangaea and the cunning of Ritus. Its many factions were all joined into one long ago, thus bringing an end to petty local disagreements, with the ability to efficiently mobilize great numbers on the fly. Its powerful navy controls most of the western and northwestern coastlines, and is always on high alert in the rocky southern shores where Bacchanalia's pirate speedboats roam wild. However, maintaining a massive navy requires several natural resources, especially high quality lumber, and this usually means striking an uneasy balance with the resource rich districts of Bacchanalia and Morea. Bravio is always in an arms&apos; race with Pangaea, simultaneously sponsoring several programs led by Tauros scientists to improve its technology, including bodyhack and cyborg programs, AI and ML research, etc. Rumors that Bravio is on the verge of creating the ultimate invicible soldier have been circulating in Merca City for some time, but in the wild any experimentation with self-enhancing drugs claimed to come from its labs seems to have unpredictable effects. Whether some key to unclock their full potential is required remains unclear.</Text>
                        <ListItem spacing={3} fontWeight="semibold" pt={5}>
                            <ListIcon as={ImEarth} />
                            Morea
                        </ListItem>
                        <Text color="gray.700" ml={6}>Rugged terrain, rich in quarries, oil, and gold ores. Its inhabitants seem to take little interest in the social and political affairs of Merca City, save for their trade of raw materials. However, spending much of their time in Morea&apos;s endless mines, they have become masters of navigation in the labyrinthine spaces under Merca City and can easily circumvent any trade sanctions imposed from time to time by the two military powers above. It is said that if you need to smuggle anything across the heavily guarded district borders, you only need the assistance of one of Morea&apos;s goatmen, as its inhabitants are often derogatorily called owing to their shabby appearance.</Text>
                        <ListItem spacing={3} fontWeight="semibold" pt={5}>
                            <ListIcon as={ImEarth} />
                            Pangaea 
                        </ListItem>
                        <Text color="gray.700" ml={6}>The other military district of Merca City, Pangaea is Bravio's nemesis. Differently from Bravio, Pangaea's many tribal factions were never consolidated, and they often find themselves squabbling among themselves. However, this does not mean that it is easy to conquer, for when these wild tribes all unite against a common foe, their fierce asymmetric warfare and urban guerrilla tactics are unpredictable and hard to defend against. Bravio has invaded Pangaea twice in the past, but it could never control its territories for long and suffered more losses after than during the invasion. On the other hand, open source technology, quick and efficient voting mechanisms, and a perceived common threat, give Pangaea the ability to often mobilize just as well as the most unified systems.</Text>
                        <ListItem spacing={3} fontWeight="semibold" pt={5}>
                            <ListIcon as={ImEarth} />
                            Ritus 
                        </ListItem>
                        <Text color="gray.700" ml={6}>No one has ever waged open war on the financial district, for that would bring upon their heads the wrath of all its other districts who, as much as they rave against its injustices, need its financial services. For every resource, rare item, or gemstone found, mined, or outright stolen in Merca City must first pass through Ritus in order to be minted as an NFT and traded in the open market. There are always discontent citizens, but for the most part the interests of all are aligned and everyone is invested in Ritus in one way or another, including pirates and smugglers, who could not trade their ill gotten goods without their underhanded deals with Ritus. In the recesses of the Labyrinth however, an insurgency is brewing, although no one knows if these are separate individuals, one faction or many.</Text>
                        <ListItem spacing={3} fontWeight="semibold" pt={5}>
                            <ListIcon as={ImEarth} />
                            Tauros 
                        </ListItem>
                        <Text color="gray.700" ml={6}>Artistic and artisanal district. For the most part, Tauros is a quiet district inhabited by an artisanal class, artists, and developers. Similar to Ritus, Tauros also provides vital services to Merca City, although they are of a different nature. It is here that most of the OG brainpower is found, and where the most varied assets, including weapons and defense systems may be produced and sold to the highest bidder. Factions from all Merca City&apos;s districts, travel to the Tauros famous marketplace to discover and purchase the latest gadgets and accessories, and often even order custom items that do not yet exist.</Text>
                    </List>
            </Box>
        </Box>
    )
}