import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { Flex, Divider, Heading, CloseButton } from '@chakra-ui/react'
import { ImHome, ImCalendar, ImUsers, ImEarth, ImBlog } from 'react-icons/im'
import { MdSummarize, MdBallot } from "react-icons/md"
import NavItem from './NavItem'
import styles from '@styles/Sidebar.module.css'

export default function SidebarDrawer({ onClose, ...rest }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

    return (
        <Flex
            className={styles.hideScroll}
            pos="fixed"
            left="5"
            h="95vh"
            // borderRadius={navSize == "small" ? "15px" : "30px"}
            // w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            overflowY="scroll"
            overflowX="hidden"
            justifyContent="space-between"
            {...rest}
        >
            <Flex
                p="5%"
                flexDir="column"
                alignItems="flex-start"
                as="nav"
            >
                <CloseButton mt={5} display={{ base: "flex", md: "none" }} onClick={onClose} />

                    <Flex
                        flexDir="column"
                        w="100%"
                        alignItems="flex-start"
                        // mb={4}
                    >
                        <Flex mt={4} mb={4} align="center">

                            <Flex>
                                <Heading size="sm"><NavItem href="/" icon={ImHome} title="Dashboard"/></Heading>
                            </Flex>
                        </Flex>
                        <Divider />
                    </Flex>
                {/* <NavItem href="about" icon={MdSummarize} title="About" /> */}
                <NavItem href="members" icon={ImUsers} title="Members" />
                <NavItem href="governance" icon={MdBallot} title="Governance" />
                <NavItem href="events" icon={ImCalendar} title="Events" />
                {/* <NavItem href="galleries" icon={GrGallery} title="Galleries" />
                <NavItem href="podcast" icon={ImPodcast} title="Podcast" /> */}
                {/* <NavItem href="estates" icon={ImEarth} title="Estates" /> */}
                <NavItem href="blog" icon={ImBlog} title="Blog" />
            </Flex>
        </Flex>
    )
}
