import { Flex, Text, Icon, Link, Menu, MenuButton, MenuList } from '@chakra-ui/react'

export default function NavItem({ navSize, title, icon, href }) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    p={3}
                    borderRadius={8}
                    _hover={{textDecor: 'none', backgroundColor: '#AEC8CA'}}
                    w={navSize == "large" && "100%"}
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
            </Menu>
        </Flex>
    )
}