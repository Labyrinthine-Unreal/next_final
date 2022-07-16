import { Box, Image, Heading, Link, Button, Text, Flex } from "@chakra-ui/react"
import Head from "next/head"
import styles from "@styles/Events.module.css"

export default function PodcastPage() {

  return (
    <Box>
        <Head>
            <title>
                TaurosDAO | Events
            </title>
        </Head>

        <Heading pb={5} fontSize="3xl" textShadow='0.5px 0.5px white'>
            Events
        </Heading>
        
        <Text pb={5}>
            Below find a list of current, upcoming, and past events.
        </Text>
        <Box pt={10} pb={20} align="center">
            <Box className={styles.container}>
                <Image className={styles.image} src="/images/ragingtaz.png" alt="Raging Taz" />
                <Box className={styles.overlay}>
                    <Text className={styles.text}>
                        <span className={styles.title}>Artist Series Podcast</span>
                        <br />
                        <span className={styles.body}>TaurosDAO | Frontier Podcast...</span>
                    </Text>
                </Box>
                <Box className={styles.overlay2}>
                    <Text className={styles.text2}>
                        <span className={styles.title}>Artist Series Podcast</span>
                        <br /><br />
                        <span className={styles.body2}>TaurosDAO & Frontier Podcast bring you the latest from the NFT Art World</span>
                        <br /><br />
                        <span className={styles.body2}>This series of podcasts focuses on 1/1 artists in the NFT Space. Airing on Tuesdays and Fridays at 12:00 PM EST.</span>
                    </Text>
                </Box>
                <Box pt={5} mt={5} className={styles.btn}>
                    <Button borderRadius="0" _hover={{opacity: "0.7"}} size="lg" variant="outline">
                        <Link style={{textDecoration: "none"}} href="https://youtu.be/OSRyEKS8M-I" isExternal>All Podcasts</Link>
                    </Button>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}