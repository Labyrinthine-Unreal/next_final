import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, CloseButton, Flex, Image, Divider } from "@chakra-ui/react";
import { ImPen, ImHome, ImCalendar, ImUser, ImEarth } from 'react-icons/im'
import NavItem from "./NavItem";

export default function Sidebar({ onClose, ...rest }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  return (
    <Box
      pl={5}
      transition="3s ease"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" justifyContent="space-between">
        <Box>
          <Image src="images/TaurosDAO_logo.png" alt="TaurosDAO-logo" w="200px" h="65px" />
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <NavItem href="/" icon={ImHome} title="Dashboard"/>
      <NavItem href="members" icon={ImUser} title="Members" />
      <NavItem href="events" icon={ImCalendar} title="Events" />
      <NavItem href="apply" icon={ImPen} title="Apply" />
      <NavItem href="estates" icon={ImEarth} title="Estates" />
    </Box>
  );
}