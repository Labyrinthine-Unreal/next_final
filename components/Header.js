import { Box, Flex, Link, Button, Image, Spacer, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import Connect from "./wallets/ConnectButton";
export default function Header() {
  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      bg="black"
      color="white"
      px="28"
      py="4"
      align="center"
      justify="space-between"
      zIndex={1}
    >
      <Box>
        <Image src="/images/logos/TaurosDAO-logo.png" width="300px" height="auto" alt="TaurosDAO Logo" />
      </Box>
      <Spacer />
      <Box fontSize="20" pr="6">
        <Link p="2" href="/members" _hover={{ color: "teal" }}>Members</Link>
        <Link p="2" href="/categories/governance" _hover={{ color: "teal" }}>Governance</Link>
      </Box>
      <Box>
        <IconButton as="a" href="https://twitter.com/taurosdao" target="blank" aria-label="Twitter" icon={<FaTwitter />} mx="1" variant="ghost" isRound={true} fontSize="26px" _hover={{ color: "teal" }} />
        <IconButton as="a" href="https://instagram.com/taurosdao" target="blank" aria-label="Instagram" icon={<FaInstagram />} mx="1" variant="ghost" isRound={true} fontSize="26px" _hover={{ color: "teal" }} />
        <IconButton as="a" href="https://discord.com/invite/taurosdao" target="blank" aria-label="Discord" icon={<FaDiscord />} mx="1" variant="ghost" isRound={true} fontSize="26px" _hover={{ color: "teal" }} />
      </Box>
      {/* <Button background="linear-gradient(45deg, #FFD700, #DAA520)" color="black" _hover={{background: "linear-gradient(45deg, #DAA520, #FFD700)"}} ml="4">Connect</Button> */}
    <Connect />
    </Flex>
  );
}

