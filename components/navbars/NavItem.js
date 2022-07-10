import { Flex, Text, Icon, Menu, MenuButton, MenuList, Box } from '@chakra-ui/react'
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
                    w={navSize == "large" && "100%"}>
                    <Link
                        href={href}
                    >
                        <MenuButton w="100%">
                            <Flex>
                                <Icon as={icon} fontSize="xl" />
                                <Text ml={5} display={navSize == "small" ? "none" : "flex-start"}>{title}</Text>
                            </Flex>
                        </MenuButton>
                    </Link>
                <MenuList py={0} border="none" ml={5}></MenuList>
                </Box>
            </Menu>
        </Flex>
    )
}