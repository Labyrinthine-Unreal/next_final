import { Box, Image, Button, Text } from "@chakra-ui/react"
import styles from "@styles/Events.module.css"

export default function PastEventsCard({ pastEvent }) {
    const { title, croppedDescription, description, buttonText, imageUrl, imageAlt, href, externalUrl } = pastEvent;
    
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
                <Box pb={5} className={styles.btn}>
                    <Button borderRadius="0" _hover={{opacity: "0.7"}} size="sm" variant="outline">
                        {buttonText}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}