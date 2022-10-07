import { Box, Heading, Text, Flex, SimpleGrid, Link } from '@chakra-ui/react'
import Head from 'next/head'
import GalleriesCard from '@components/cards/GalleriesCard'
import galleriesData from '@components/data/galleriesData'
import { Galleries } from '@components/animations/AnimatedTitles'

export default function GalleriesPage() {

    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | Art Galleries
                </title>
                <meta name="description" content="Welcome to TaurosDAO | 9 Weeks Art Gallery series. Theme: Dante&apos;s Inferno. Panopticon: Darkness in Light" keywords="NFT, nftart, digitalart, digitalartist, mint, taurosdao, membership, art, gallery, 3D, metaverse, dao" />
            </Head>

            <Heading textStyle="title" fontSize="3xl">
                <Galleries />
            </Heading>

            <Box pb={20} textStyle="landingPageContent">
                <Heading fontSize="large" textStyle="subtitle">
                    DANTE&apos;S INFERNO
                </Heading>
            
                <Text>
                    A series of 3D digital art galleries in New Art City. Theme: <span style={{fontStyle: "italic"}}>Dante&apos;s Inferno</span>. New gallery floor is added every Monday. Some of the floors may hide a TAUROS token. Those who find one, may contact us on <Link href='https://discord.com/invite/labyrinthine' isExternal color="#2E7DAF">discord</Link> with their wallet address.
                </Text>

                <Box pt={10} align="center">
                    <SimpleGrid pl={{base: "1", md: "3", lg: "5"}} columns={{base: "1", md: "2", lg: "3"}} gap={5} mt="4" minH="full" spacingY={20}>
                    {galleriesData.map((gallery, i) => (
                        <Flex key={i}>
                            <GalleriesCard gallery={gallery} />
                        </Flex>
                    ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    );
}