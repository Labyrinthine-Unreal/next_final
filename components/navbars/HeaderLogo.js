import { Flex, Center, IconButton, Image, useDisclosure } from '@chakra-ui/react'
import { ImMenu } from 'react-icons/im'


export default function HeaderLogo() {

  const { onOpen } = useDisclosure()

  return (

    //LEFT SIDE LOGO AND BURGER MENU (ICONBUTTON) FOR SMALL SCREENS
    <Flex>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<ImMenu />}
      />
      <Center display={{ base: "none", md: "flex" }}>
        <Image src="images/logos-icons/tauros_head.png" alt="Tauros_final" w="65px" h="85px" />
        <Image pl={1} src="images/logos-icons/tauros_letters.png" alt="Tauros_final" w="180px" h="65px" />
      </Center>
    </Flex>
  )
}