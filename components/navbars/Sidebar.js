import React, { useState } from 'react'
import { Flex, IconButton, Divider, Avatar, Heading } from '@chakra-ui/react'
import { ImMenu, ImPen, ImHome, ImCalendar, ImUser } from 'react-icons/im'
import NavItem from './NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="fixed"
            left="5"
            h="95vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex 
                p="5%"
                flexDir="column"
                alignItems="flex-start"
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
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Flex mt={4} mb={4} align="center">
                    <Avatar size="sm" src="../tauros-avatar-black.png" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">TaurosDAO</Heading>
                    </Flex>
                </Flex>
                <Divider display={navSize == "small" ? "none" : "flex"} />
            </Flex>
                <NavItem navSize={navSize} href="/" icon={ImHome} title="Dashboard"/>
                <NavItem navSize={navSize} href="events" icon={ImCalendar} title="Events" />
                <NavItem navSize={navSize} href="members" icon={ImUser} title="Members" />
                <NavItem navSize={navSize} href="apply" icon={ImPen} title="Apply" />
                
            </Flex>
            
        </Flex>
    )
}