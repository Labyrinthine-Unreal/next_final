import HeaderSignIn from "./HeaderSignIn";
import Footer from "./Footer"
import Sidebar from "./Sidebar";
import SidebarDrawer from "./SidebarDrawer";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import styles from "@styles/Layout.module.css"

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box id={styles.about} className={styles.section}
        // minH="100vh"
        // style={{backgroundImage: `url(images/epiphany.jpg)`}}
        // bgGradient="linear(to-br, teal.300,purple.300)"
        // bgGradient="linear(to-br, #dbcccc,#c4bd8b)"
        // bgGradient="linear(to-br, #f2f1ef,#d8cfd0)"
        // bgGradient="linear(to-br, #f6f6f2,#fef2f2)"
        // bgGradient="linear(to-br, #fef2f2,#f6ffee)"
        // bg="#d8cfd0"
        // bg="#EDF1F0"
        // bg="#f6f6f2"
        // bg="#fef2f2"
        // bg="#f6ffee"
        // backgroundImage="images/AbstractFuturistic.jpg"
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