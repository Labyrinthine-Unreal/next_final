import Head from 'next/head'
import { Box, Text, Heading } from '@chakra-ui/react'
import { Governance } from '@components/animations/AnimatedTitles'

export default function VotingPage() {
    return (
        <Box h="46vh">
            <Head>
                <title>
                    TaurosDAO | Governance
                </title>
                <meta name="description" content="Welcome to TaurosDAO | Welcome to TaurosDAO | TaurosDAO Membership Cards (TAUROS) confer a number of benefits on members. Governance, staking, passive income, airdrops, and various allowlists are only a few of them. Depending on whether you are an investor, an artist, a collector, or all of the above, you may look forward to a number of privileges from TaurosDAO membership." keywords="NFT, nftart, digitalart, digitalartist, mint, taurosdao, cryptocurrency, crypto, ethereum, membership, art, airdrop, airdrops, metaverse, MMORTS, exploration, mystery, podcast, token, coin, altcoin, voting, dao" />
            </Head>
            <Heading textStyle="title" fontSize="3xl">
                <Governance />
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