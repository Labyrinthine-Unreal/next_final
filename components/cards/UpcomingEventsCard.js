import { Box, Image, Button, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react"
import styles from "@styles/Events.module.css"

export default function UpcomingEventsCard({ upcomingEvent }) {
    const { video, title, croppedDescription, description, buttonText, imageUrl, imageAlt, href, externalUrl } = upcomingEvent;

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
                        {buttonText}
                    </Button>
                    <Modal isCentered size="xl" isOpen={isOpen} onClose={onClose} transition="6">
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Game Trailer</ModalHeader>
                            <ModalBody>
                                <video
                                    autoPlay
                                    src={video}
                                    objectfit="cover"
                                    layout="fill"
                                />
                            </ModalBody>

                            <ModalFooter>
                                <Button variant="outline" colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Box>
        </Box>
    );
}