import Head from 'next/head'
import { Box, Flex, Image } from "@chakra-ui/react"
import properties from "@/components/data/properties"

export default function EstatesPage() {
    const item = properties[1];
            
    return (
        <Box>
            <Head>
                <title>
                    Claim Estates
                </title>
            </Head>
            <Flex alignItems="center" pt={70} p={20}>
                <Image src="/Merca_City.png" alt="Merca-City-Map" />
            </Flex>
        </Box>
    )
}