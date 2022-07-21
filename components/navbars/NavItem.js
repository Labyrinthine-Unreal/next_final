import { Flex, Text, Icon, Menu, MenuButton, Box } from '@chakra-ui/react'
import Link from "next/link"

export default function NavItem({ navSize, title, icon, href }) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Box 
                    p={3} 
                    borderRadius={8} 
                    _hover={{textDecor: 'none', backgroundColor: '#AEC8CA'}} 
                    w={navSize == "large" && "100%"}
                >
                    <Link href={href}>
                        <MenuButton w="100%">
                            <Flex>
                                <Icon as={icon} fontSize="xl" mt={1.5} />
                                <Text mt={title == "Dashboard" ? 2.5 : 0} ml={5} fontSize={title == "Dashboard" && 13} display={navSize == "small" ? "none" : "flex-start"}>{title}</Text>
                            </Flex>
                        </MenuButton>
                    </Link>
                </Box>
            </Menu>
        </Flex>
    )
}