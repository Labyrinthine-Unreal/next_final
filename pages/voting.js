import Head from 'next/head'
import { Box, Text, Heading } from "@chakra-ui/react"

export default function VotingPage() {
    return (
        <Box h="46vh">
            <Head>
                <title>
                    TaurosDAO | Voting
                </title>
            </Head>
            <Heading pb={10} fontSize="3xl" color="teal.700" fontWeight="extrabold"  textShadow='1px 1px white'>
                Voting
            </Heading>
            
            
                <Text
                    boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)" 
                    rounded="lg"
                    py={8} 
                    // px={4}
                    bg="#ffffffbb"
                    opacity="0.8"
                    fontSize="50px"
                    textAlign="center"
                >
                    Coming Soon 
                </Text>
        </Box>
    )
}