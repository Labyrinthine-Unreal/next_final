import HeaderSignIn from "./HeaderSignIn";
import Sidebar from "./Sidebar";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bgGradient="linear(to-br, #dbcccc,#c4bd8b)">
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
            <Sidebar onClose={onClose} />
            </DrawerContent>
        </Drawer>

        {/* Header */}
        <HeaderSignIn onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
            {children}
        </Box>
    </Box>
  );
}