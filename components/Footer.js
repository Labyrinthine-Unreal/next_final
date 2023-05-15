import { Box, Flex, Link, Text, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  return (
    <Flex
      as="footer"
      bg="black"
      color="white"
      px="28"
      py="28"
      direction="column"
      align="center"
      justify="center"
    >
      <Text fontSize="2xl" pb="6">TaurosDAO</Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        textAlign={{ base: "center", md: "initial" }}
      >
        <Box fontSize="20" pr="6" pb="4">
            <Box as={ScrollLink}
                to="top"
                p="2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1700}
                _hover={{ color: "teal" }}
                style={{ cursor: "pointer" }}
                >
                Home
            </Box>
            <Link p="2" href="/members" _hover={{ color: "teal" }}>Members</Link>
            <Link p="2" href="/galleries" _hover={{ color: "teal" }}>Galleries</Link>
        </Box>
        <Box pb="4">
            <IconButton as="a" href="https://twitter.com/taurosdao" target="blank" aria-label="Twitter" icon={<FaTwitter />} mx="1" variant="ghost" isRound={true} fontSize="26px" _hover={{ color: "teal" }} />
            <IconButton as="a" href="https://instagram.com/taurosdao" target="blank" aria-label="Instagram" icon={<FaInstagram />} mx="1" variant="ghost" isRound={true} fontSize="26px" _hover={{ color: "teal" }} />
            <IconButton as="a" href="https://discord.com/invite/taurosdao" target="blank" aria-label="Discord" icon={<FaDiscord />} mx="1" variant="ghost" isRound={true} fontSize="26px" _hover={{ color: "teal" }} />
        </Box>
      </Flex>
    </Flex>
  );
}
