import Head from 'next/head'
import { Box, Text, Heading } from "@chakra-ui/react"

export default function AboutPage() {
    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | About
                </title>
            </Head>
            <Heading textStyle="title" fontSize="3xl">About</Heading>
            
            
                <Text textStyle="content">
                    <span style={{color: "black", fontWeight: "500"}}>TaurosDAO</span>, <span style={{color: "black", fontWeight: "500"}}>Merca City</span>, and <span style={{color: "black", fontWeight: "500"}}>Labyrinthine Unreal</span> are all seamlessly part of an ecosystem known as <span style={{color: "black", fontWeight: "500"}}>The Ontological Game</span> which is the umbrella game that comprises them all, but with enough room for expansion as well as additional games, enterprises, and diversions. With TaurosDAO we've built and continue to nurture a 1/1 NFT Art Treasury which is both comprised of and controlled by all and any NFT artists or members who hold its token. Any artworks held in our treasury can be used within our multiplayer sim, Merca City or our combat-puzzler game, Labyrinthine Unreal.<br /><br />
                    Where things start to make more sense as an ecosystem is in the way we've structured our games: Merca City is an overworld and Labyrinthine Unreal is its underworld. They are both complete and separate games if you want them to be, yet if you hold the necessary assets to access them, you can seamlessly travel, advance, and save your progress between each of these intricate worlds.<br /><br />
                    As we've mentioned, Merca City is a fully realized overworld, a city sim made up of districts with fully realized mini-games, performance arts, social gatherings, real estate management, mercantilism, and optional raids and competitions between its very distinct and exotic city districts, or between neighborhoods within any given district. Labyrinthine Unreal, Merca City's less grounded underworld, is a surreal combat-puzzler which can be accessed by any Initiation Mask holders by means of booting straight into its maze or by summoning a portal into it anywhere within Merca City. What further ties these games together and incentivizes players who hold the necessary assets to access both is the overarching lore, intrigue, and ARG elements which unify them and will lead to cross-play events that go both between and beyond each of them into other metaverses, platforms, and even reality itself. 
                </Text>
        </Box>
    )
}