import React, { useState } from 'react'
import { Flex, IconButton, Divider, Heading, Center } from '@chakra-ui/react'
import { ImMenu, ImEarth, ImHome, ImCalendar, ImUsers, ImBlog } from 'react-icons/im'
import { MdSummarize, MdBallot,GrGallery } from 'react-icons/md'
import NavItem from './NavItem'
import styles from '@styles/Sidebar.module.css'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("small")
    return (
        <Flex
            className={styles.hideScroll}
            display={{ base: "none", md: "block" }}
            top={20}
            pos="fixed"
            left="5"
            h="85vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
            overflowY="scroll"
            overflowX="hidden"
            // bgGradient="linear(to-br, #f6ffee,#fef2f2)"
        >
            <Flex
                p="5%"
                flexDir="column"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
               <IconButton
                    background="none"
                    mt={5}
                    _hover={{background: 'none'}}
                    icon={<ImMenu />}
                    onClick={() => {
                        if(navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                    <Flex
                        flexDir="column"
                        w="100%"
                        alignItems={navSize == "small" ? "center" : "flex-start"}
                        // mb={4}
                    >
                        <Flex align="center">
                            {/* <Avatar size="sm" src="../tauros-avatar-black.png" /> */}
                            <Flex>
                                <Heading size="sm"><NavItem navSize={navSize} href="/" icon={ImHome} title="Dashboard"/></Heading>
                            </Flex>
                        </Flex>
                        <Divider display={navSize == "small" ? "none" : "flex"} />
                    </Flex>
                
                <NavItem navSize={navSize} href="about" icon={MdSummarize} title="About" />
                <NavItem navSize={navSize} href="members" icon={ImUsers} title="Members" />
                <NavItem navSize={navSize} href="voting" icon={MdBallot} title="Voting" />
                <NavItem navSize={navSize} href="events" icon={ImCalendar} title="Events" />
                <NavItem navSize={navSize} href="Auctions" icon={GrGallery} title="Auctions" />
                {/* <NavItem navSize={navSize} href="podcast" icon={ImPodcast} title="Podcast" /> */}
                <NavItem navSize={navSize} href="estates" icon={ImEarth} title="Estates" />
                <NavItem navSize={navSize} href="blog" icon={ImBlog} title="Blog" />
            </Flex>

        </Flex>
    )
}