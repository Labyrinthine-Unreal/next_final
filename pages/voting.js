import Head from 'next/head'
import { Box, Text, Heading } from '@chakra-ui/react'
import { Voting } from '@components/animations/AnimatedTitles'

export default function VotingPage() {
    return (
        <Box h="46vh">
            <Head>
                <title>
                    TaurosDAO | Voting
                </title>
            </Head>
            <Heading textStyle="title" fontSize="3xl">
                <Voting />
            </Heading>
            
            
                <Text textStyle="content"
                    fontSize="50px"
                    textAlign="center"
                >
                    Coming Soon 
                </Text>
        </Box>
    )
}