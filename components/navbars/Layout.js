import HeaderSignIn from "./HeaderSignIn";
import Footer from "./Footer"
import Sidebar from "./Sidebar";
import SidebarDrawer from "./SidebarDrawer";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
        minH="100vh"
        // style={{backgroundImage: `url(images/epiphany.jpg)`}}
        // bgGradient="linear(to-br, teal.300,purple.300)"
        bgGradient="linear(to-br, #dbcccc,#c4bd8b)"
        // bg="#EDF1F0"
        // bg="#ffffffbb"
    >
        <Sidebar
            onClose={() => onClose}
            display={{ base: "none", md: "block" }}
        />
        <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
        >
            <DrawerContent>
            <SidebarDrawer onClose={onClose} />
            </DrawerContent>
        </Drawer>

        {/* Header */}
        <HeaderSignIn onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
            {children}
        </Box>
        <Footer />
    </Box>
  );
}