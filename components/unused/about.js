import Head from 'next/head'
import { Box, Text, Heading, Center } from "@chakra-ui/react"
import Link from 'next/link'
import { About } from '@components/animations/AnimatedTitles'
import styles from '@styles/About.module.css'

export default function AboutPage() {
    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | About
                </title>
                <meta name="description" content="TaurosDAO, Merca City, and Labyrinthine Unreal are all seamlessly part of an ecosystem known as The Ontological Game, which is the umbrella game that comprises them all, but with enough room for expansion as well as additional games, enterprises, and diversions." keywords="NFT, nftart, digitalart, digitalartist, mint, taurosdao, labyrinthine, game, cryptocurrency, crypto, ethereum, membership, art, metaverse, MMORTS, exploration, token, coin, altcoin, dao, multiplayer, simulation, sim, ecosystem" />
            </Head>
            
            <Heading textStyle="title" fontSize="3xl"><About /></Heading>
            
            
            <Text textStyle="content">
                <span style={{color: "black", fontWeight: "500"}}>TaurosDAO</span>, <span style={{color: "black", fontWeight: "500"}}>Merca City</span>, and <span style={{color: "black", fontWeight: "500"}}>Labyrinthine Unreal</span> are all seamlessly part of an ecosystem known as <a style={{color: "black", fontWeight: "500"}} href='https://ontologicalgame.com/' target="blank">The Ontological Game</a> which is the umbrella game that comprises them all, but with enough room for expansion as well as additional games, enterprises, and diversions. With TaurosDAO we've built and continue to nurture a 1/1 NFT Art Treasury which is both comprised of and controlled by all and any NFT artists or members who hold its token. Any artworks held in our treasury can be used within our MMORPG, Merca City or our combat-puzzler game, Labyrinthine Unreal.<br /><br />
                Where things start to make more sense as an ecosystem is in the way we've structured our games: Merca City is an overworld and Labyrinthine Unreal is its underworld. They are both complete and separate games if you want them to be, yet if you hold the necessary assets to access them, you can seamlessly travel, advance, and save your progress between each of these intricate worlds.
            </Text>
            <Center pt={10}>
                <video 
                    className={styles.aboutTrailer}
                    src="videos/Trailer.mp4" 
                    alt="game-trailer"
                    controls
                    objectfit="cover"
                    layout="fill"
                />
                
            </Center>
            <Center pb={10}>
                <figcaption>Game Trailer. All footage from the game</figcaption>
            </Center>
            <Text textStyle="content">
                As we've mentioned, Merca City is a fully realized overworld, a city sim made up of districts with fully realized mini-games, performance arts, social gatherings, real estate management, mercantilism, and optional raids and competitions between its very distinct and exotic city <Link href="/estates#districts"><a className={styles.district}>districts</a></Link>, or between neighborhoods within any given district. Labyrinthine Unreal, Merca City's less grounded underworld, is a surreal combat-puzzler which can be accessed by any Initiation Mask holders by means of booting straight into its maze or by summoning a portal into it anywhere within Merca City. What further ties these games together and incentivizes players who hold the necessary assets to access both is the overarching lore, intrigue, and ARG elements which unify them and will lead to cross-play events that go both between and beyond each of them into other metaverses, platforms, and even reality itself. 
            </Text>
        </Box>
    )
}