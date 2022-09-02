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
