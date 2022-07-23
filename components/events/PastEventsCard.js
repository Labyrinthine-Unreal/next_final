import { Box, Image, Button, Text, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react"
import styles from "@styles/Events.module.css"
import dynamic from 'next/dynamic'

const Model = dynamic(
  () => import('./AragogModel'),
  { ssr: false }
)

export default function PastEventsCard({ pastEvent }) {
    const { title, croppedDescription, description, buttonText, imageUrl, imageAlt, href, externalUrl } = pastEvent;

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <Box className={styles.container}>
                <Image className={styles.image} src={imageUrl} alt={imageAlt} />
                <Box className={styles.overlay}>
                    <Box className={styles.text}>
                        <Text className={styles.title}>{title}</Text>
                        <Text className={styles.body}>{croppedDescription}</Text>
                    </Box>
                </Box>
                <Box className={styles.overlay2}>
                    <Box className={styles.text}>
                        <Text className={styles.title}>{title}</Text>
                        <br />
                        <Text className={styles.body2}>{description}</Text>
                    </Box>
                </Box>
                <Box className={styles.btn}>
                    <Button onClick={onOpen} borderRadius="0" _hover={{opacity: "0.7"}} size="sm" variant="outline">
                        <Link style={{textDecoration: "none"}} href={externalUrl} isExternal>{buttonText}</Link>
                        {title == "Art Contest" &&
                        <Modal isCentered size="lg" isOpen={isOpen} onClose={onClose} transition="6">
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Aragog</ModalHeader>
                            <ModalBody>
                                <Model />
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="outline" colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>}

                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
